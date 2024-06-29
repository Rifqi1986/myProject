const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

router.post("/login", AuthController.login);

router.get("/login", AuthController.renderLogin);

router.get("/admin-dashboard", AuthController.renderadmindash);

router.get("/home", AuthController.renderhomepage);

module.exports = router;
