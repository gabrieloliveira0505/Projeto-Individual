var database = require("../database/config"); 

function consultarElos() {
    return database.executar("SELECT * FROM elo;")
}

module.exports = { consultarElos }