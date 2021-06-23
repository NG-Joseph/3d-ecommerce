const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 4003;
const app = express();
app.use(favicon(__dirname + '/favicon/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.listen(port);
console.log('App is running on http://localhost:4003')