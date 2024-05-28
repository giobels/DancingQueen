var festivalModel = require("../models/festivalModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var festival = req.body.festivalServer;
    var data = req.body.dataServer;
    var nota = req.body.notaServer;
    var coreo = req.body.coreoServer;


    // Faça as validações dos valores
    if (festival == undefined) {
        res.status(400).send("O festival está undefined!");
    } else if (data == undefined) {
        res.status(400).send("A data está undefined!");
    }else if (nota == undefined) {
        res.status(400).send("A nota está undefined!");
    }else if (coreo == undefined) {
        res.status(400).send("A coreografia está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        festivalModel.cadastrar(festival, data, nota, coreo)
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


module.exports = {
    cadastrar,
}