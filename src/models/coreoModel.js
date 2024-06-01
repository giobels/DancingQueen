var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(coreografia, categoria, fkUsuario) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", coreografia, categoria);

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucaoSql = `
        INSERT INTO Coreografia (coreografia, categoria, fkUsuario) VALUES ('${coreografia}', '${categoria}', ${fkUsuario});
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listar(fkUsuario) {
  var instrucaoSql = `SELECT * FROM Coreografia WHERE fkUsuario = ${fkUsuario}`;

  return database.executar(instrucaoSql);
}

function listarKpi(fkUsuario) {
  var instrucaoSql = `select coreografia,
  round(avg(nota),1) as media
  from festival
  inner join coreografia on fkCoreografia = idCoreografia
  where fkUsuario = ${fkUsuario}
  group by fkCoreografia;`;

  return database.executar(instrucaoSql);
}

module.exports = {
  cadastrar,
  listar,
  listarKpi,
};