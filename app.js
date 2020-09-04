const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

app.use(bodyParser.json());

const postRoute = require('./routes/post');

app.use('/post', postRoute);

app.get('/', (req, res) => {
    res.send('We are home');
});


mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log('connected to DB!')
);
   


app.listen(3000);

