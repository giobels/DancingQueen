const { buscarCoreos } = require("../controllers/medidaController");
var database = require("../database/config");

function buscarUltimasMedidas(fkcoreo, limite_linhas) {

    var instrucaoSql = `SELECT  
    nota,
    dataFestival,
    DATE_FORMAT(dataFestival,'%d/%m/%Y') as data_grafico
    FROM Festival
    WHERE fkCoreografia = ${fkcoreo}
    ORDER BY fkCoreografia DESC LIMIT ${limite_linhas}; `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDesempenho(fkusuario) {

    var instrucaoSql = `select coreografia,
    round(avg(nota),1) as media
    from Festival
    inner join Coreografia on fkCoreografia = idCoreografia
    where fkUsuario = ${fkusuario}
    group by coreografia`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHabilidade(fkusuario) {

    var instrucaoSql = `select categoria,
    round(avg(nota),2) as media
    from Coreografia
    inner join Festival on fkCoreografia = idCoreografia
    where fkUsuario = ${fkusuario}
    group by categoria`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarDesempenho,
    buscarHabilidade,
}
