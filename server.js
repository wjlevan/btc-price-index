const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// const __dirname = './';
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', './public/index.html'));
});
app.listen(port);