// index.js atau app.js

const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/usersRoute.js');
const pejantanRouter = require('./routes/pejantanRoute.js')
// const client = require("./config/database.js")


const app = express();
const port = 3000;

app.use(bodyParser.json());

// Konfigurasi middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users', usersRouter);
app.use('/pejantan', pejantanRouter);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})