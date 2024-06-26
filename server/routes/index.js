const express = require("express")

const dataSapiControler = require("../controllers/dataSapiControllers");
const userControllers = require("../controllers/userControllers.js");
const pejantanController = require("../controllers/pejantanControllers.js");
const obatControllers = require("../controllers/obatControllers.js");
const petugasController = require("../controllers/petugasController.js")

const route = express.Router();


route.get('/getAllDataSapi', dataSapiControler.getdata)

route.get('/getAllUserData', userControllers.getdata)

route.get('/getAllPejantan', pejantanController.getdata)

route.get('/getAllObat', obatControllers.getdata)

route.get('/getAllPetugas', petugasController.getdata)




module.exports = route;
