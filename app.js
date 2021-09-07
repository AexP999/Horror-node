const express = require('express');
const fs=require('fs');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose')
const router = require('./routes/film.router');
const uri = "insert here ref to database";

const app = express();
_mongooseConnector();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const staticPath =path.join(__dirname, 'data');
app.use(express.static(staticPath));

app.use('/films', router)


app.listen(3001, () => {
    console.log('App listen 3001');
  })

  function _mongooseConnector() {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, })
      .then((con) => {
        console.log(con.connection);
        console.log('MongoDb connected')
      })
      .catch(err => console.log(err));
  // mongo.connect('mongodb://localhost:27017/horror-films', { useNewUrlParser: true, useUnifiedTopology: true });
}