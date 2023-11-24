var database = require("../database/config"); 

function corrigir() {
    return database.executar("SELECT * FROM quiz;")
}

module.exports = { corrigir }