'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  console.log(process.env);
  const userName = process.env.MY_NAME_IS;
  console.log("userName: (" + userName + ")");
  res.send('Hello Wooooorld! ' + userName);
});
app.get('/special', (req, res) => {
  res.send('Thank you for your special request');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);