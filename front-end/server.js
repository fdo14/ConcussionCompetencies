const fs = require('fs');
const http = require('http');
const https = require('https');

const express = require('express');
const path = require('path');
const app = express();

// Certificate
const privateKey = fs.readFileSync('../keys/privkey.pem', 'utf8');
const certificate = fs.readFileSync('../keys/cert.pem', 'utf8');
const ca = fs.readFileSync('../keys/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

app.all('*', ensureSecure); // at top of routing calls

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);


httpServer.listen(8080, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});

function ensureSecure(req, res, next){
  if(req.secure){
    // OK, continue
    return next();
  };
  // handle port numbers if you need non defaults
  // res.redirect('https://' + req.host + req.url); // express 3.x
  res.redirect('https://' + req.hostname + req.url); // express 4.x
}
