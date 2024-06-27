// app.js

const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/usersRoute.js');
const pejantanRouter = require('./routes/pejantanRoute.js');
const petugasRouter = require('./routes/petugasRoute.js');
const obatRouter = require('./routes/obatRoute.js');
const dataSapiRouter = require('./routes/dataSapiRoute.js');
const perkawinanRouter = require('./routes/perkawinanRoute.js');
const pkbRouter = require('./routes/pkbRoute.js');
const kelahiranRouter = require('./routes/kelahiranRoute.js');
const treatmentRouter = require('./routes/treatmentRoute.js');
const kematianRouter = require('./routes/kematianRoute.js');
const distribusiRouter = require('./routes/distribusiRoute.js');


// const client = require("./config/database.js")


const app = express();
const port = 3000;

app.use(bodyParser.json());

// Konfigurasi middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users', usersRouter);
app.use('/pejantan', pejantanRouter);
app.use('/petugas', petugasRouter);
app.use('/obat', obatRouter);
app.use('/datasapi', dataSapiRouter);
app.use('/perkawinan', perkawinanRouter);
app.use('/pkb', pkbRouter);
app.use('/kelahiran', kelahiranRouter);
app.use('/treatment', treatmentRouter);
app.use('/kematian', kematianRouter);
app.use('/distribusi', distribusiRouter);





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})