var coreoModel = require("../models/coreoModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var coreografia = req.body.coreografiaServer;
    var categoria = req.body.categoriaServer;
    var fkUsuario = req.body.usuarioServer;

    
    if (coreografia == undefined) {
        res.status(400).send("A coreografia está undefined!");
    } else if (categoria == undefined) {
        res.status(400).send("A categoria está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("o Usuario está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        coreoModel.cadastrar(coreografia, categoria, fkUsuario)
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

// function buscarPorFk(req, res) {
//     var fkUsuario = req.params.fkUsuario;

//     coreoModel.buscarPorFk(fkUsuario).then((resultado) => {
//         res.status(200).json(resultado);
//     });
// }


function listar(req, res) {
    var fkUsuario = req.body.fkusuarioServer;

    if (fkUsuario == undefined) {
        // res.status(400).send("o Usuario está undefined!");
        console.log('Usuario undefined')
    } else {

        coreoModel.listar(fkUsuario).then((resultado) => {
            res.status(200).json(resultado);
        });
    }

}


module.exports = {
    cadastrar,
    listar,
    // buscarPorFk,
}