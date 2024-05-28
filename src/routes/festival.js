var express = require("express");
var router = express.Router();

var festivalController = require("../controllers/festivalController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    festivalController.cadastrar(req, res);
})

module.exports = router;