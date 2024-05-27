var coreoModel = require("../models/coreoModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var coreografia = req.body.coreografiaServer;
    var categoria = req.body.categoriaServer;
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (coreografia == undefined) {
        res.status(400).send("A coreografia está undefined!");
    } else if (categoria == undefined) {
        res.status(400).send("A categoria está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        coreoModel.cadastrar(coreografia, categoria)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarPorCoreo(req, res) {
    var coreografia = req.query.coreografia;

    coreoModel.buscarPorCoreo(coreografia).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function buscarPorId(req, res) {
    var idCoreografia = req.params.idCoreografia;

    coreoModel.buscarPorId(idCoreografia).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function listar(req, res) {
    coreoModel.listar().then((resultado) => {
        res.status(200).json(resultado);
    });
}


module.exports = {
    cadastrar,
    buscarPorCoreo,
    buscarPorId,
    listar,
}