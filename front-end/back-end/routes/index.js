var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: 'concussioncompetencies@gmail.com',
    pass: 'artjonjenn'
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var subject = req.body.subject
  var content = `name: ${name} \n email: ${email} \n message: ${message} `
  var mail = {
    from: name,
    to: 'concussioncompetencies@gmail.com',
    subject: subject,
    text: `${name} want to know more about Concussion Competencies. Please email them back
            at ${subject}`
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
