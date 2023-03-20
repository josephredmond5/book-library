const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('request made');
  next();
});

app.post('/readers', (req, res) => {
  res.status(201).send('success');
})

const { createReader } = require('./models/reader');

app.post('/readers', createReader);

module.exports = app;
