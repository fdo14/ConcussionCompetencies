const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");
const Comment = require("./comments");

const fs = require('fs');
const http = require('http');
const https = require('https');

const API_PORT = 5001;
const app = express();
const router = express.Router();

var cors = require('cors');

const privateKey = fs.readFileSync('../keys/privkey.pem', 'utf8');
const certificate = fs.readFileSync('../keys/cert.pem', 'utf8');
const ca = fs.readFileSync('../keys/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};


// this is our MongoDB database
const dbRoute = "mongodb://fdo1415:jackwill1@ds131697.mlab.com:31697/concomp";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {

  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.post("/addArrayElement", (req, res) => {
  const { id, comment } = req.body;

  Comment.findByIdAndUpdate(id,
    {$push: {comments:comment}},
    {safe: true, upsert: true},
    function(err, doc) {
        if(err){
        console.log(err);
        }else{
        //do stuff
        }
    }
  );
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findByIdAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

router.delete("/deleteComment", (req, res) => {
  const { id, title, userId } = req.body;
  Comment.findByIdAndUpdate(id,
    { $pull: { comments: { comment: title, googleId: userId } } },
    {safe: true, upsert: true},
    function(err, doc) {
        if(err){
        console.log(err);
        }else{
        //do stuff
        }
    }
  );
});

// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, message, name, title, date } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.message = message;
  data.id = id;
  data.name = name;
  data.title = title;
  data.date = date;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.post("/putComment", (req, res) => {
  let data = new Comment();
  const { id } = req.body;
  if ((!id && id !== 0)) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }

  data.comments= [];
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.get("/getComments", (req, res) => {
  Comment.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

app.use("/api", router);


const httpsServer = http.createServer(app);

// append /api for our http requests

// launch our backend into a port
httpsServer.listen(API_PORT, () => console.log(`LISTENING ON PORT 69`));
