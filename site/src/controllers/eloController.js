const eloModel = require("../models/eloModel.js");

async function consultarElos(res) {
    var elos = await eloModel.consultarElos();

    if (elos.length == 0) {
        res.status(201);
    }

    return res.status(200).json(elos);
}

module.exports = { consultarElos }