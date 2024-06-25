const express = require("express")
const dataSapiControler = require("../controllers/dataSapiControllers")

const route = express.Router();
route.get('/data-sapi', dataSapiControler.getdata)

module.exports = route;
