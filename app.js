const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const akunRouter = require('./route/router')
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(akunRouter)

app.listen(port, () => {
  console.log(`server berjalan di port ${port}`);
});
