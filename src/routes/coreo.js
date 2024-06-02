var express = require("express");
var router = express.Router();

var coreoController = require("../controllers/coreoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    coreoController.cadastrar(req, res);
})

router.post("/deletar", function (req, res) {
    coreoController.deletar(req, res);
})

router.post("/deletarCoreo", function (req, res) {
    coreoController.deletarCoreo(req, res);
})

router.post("/listar", function (req, res) {
    coreoController.listar(req, res);
});

router.post("/listarKpi", function (req, res) {
    coreoController.listarKpi(req, res);
});


module.exports = router;