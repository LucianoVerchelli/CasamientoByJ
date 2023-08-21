const express = require("express")
const router = express.Router();


const inicioController = require("../controller/inicioController")


router.get("/", inicioController.inicio)

module.exports = router;
