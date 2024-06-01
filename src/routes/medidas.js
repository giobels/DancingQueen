var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.post("/desempenho", function (req, res) {
    medidaController.buscarDesempenho(req, res);
});

router.post("/habilidade", function (req, res) {
    medidaController.buscarHabilidade(req, res);
});

module.exports = router;