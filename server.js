// server.js
const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const hostname = 'localhost';
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  console.log("in /");

  res.sendFile(path.join(__dirname, 'faceappTest.html'));
});


app.listen(port, () => console.log(`🚀 Backend ready at http://localhost:${port}`));


