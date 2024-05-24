var express = require("express");
var router = express.Router();

var coreoController = require("../controllers/coreoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    coreoController.cadastrar(req, res);
})

// router.post("/autenticar", function (req, res) {
//     coreoController.autenticar(req, res);
// });

module.exports = router;