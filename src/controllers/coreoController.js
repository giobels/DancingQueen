var coreoModel = require("../models/coreoModel");


// function autenticar(req, res) {
//     var coreografia = req.body.coreografiaServer;
//     var categoria = req.body.categoriaServer;

//     if (coreografia == undefined) {
//         res.status(400).send("A coreografia está undefined!");
//     } else if (categoria == undefined) {
//         res.status(400).send("A categoria está indefinida!");
//     } else {

//         coreoModel.autenticar(email, senha)
//             .then(
//                 function (resultadoAutenticar) {
//                     console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
//                     console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

//                     if (resultadoAutenticar.length == 1) {
//                         console.log(resultadoAutenticar);
//                         if (resultadoAutenticar.length > 0) {
//                             res.json({
//                                 idCoreografia: resultadoAutenticar[0].idCoreografia,
//                                 coreografia: resultadoAutenticar[0].coreografia,
//                                 categoria: resultadoAutenticar[0].categoria,
//                             });
//                         }
//                     } else if (resultadoAutenticar.length == 0) {
//                         res.status(403).send("Email e/ou senha inválido(s)");
//                     } else {
//                         res.status(403).send("Mais de um usuário com o mesmo login e senha!");
//                     }
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }

// }

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

module.exports = {
    cadastrar
}