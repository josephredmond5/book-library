const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('request made');
  next();
});

module.exports = app;
