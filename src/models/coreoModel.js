// const { buscarPorId } = require("../controllers/coreoController");
var database = require("../database/config")

// function autenticar(email, senha) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
//     var instrucaoSql = `
//         SELECT idUsuario, nome, email FROM Usuario WHERE email = '${email}' AND senha = '${senha}';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(coreografia, categoria) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",coreografia,categoria);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO Coreografia (coreografia, categoria) VALUES ('${coreografia}', '${categoria}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorCoreo(coreografia) {
    var instrucaoSql = `SELECT * FROM Coreografia WHERE coreografia = '${coreografia}'`;
  
    return database.executar(instrucaoSql);
  }

  function buscarPorId(idCoreografia) {
    var instrucaoSql = `SELECT * FROM Coreografia WHERE idCoreografia = '${idCoreografia}'`;
  
    return database.executar(instrucaoSql);
  }

  function listar() {
    var instrucaoSql = `SELECT * FROM Coreografia`;
  
    return database.executar(instrucaoSql);
  }

module.exports = {
    // autenticar,
    cadastrar,
    buscarPorCoreo,
    buscarPorId,
    listar
};