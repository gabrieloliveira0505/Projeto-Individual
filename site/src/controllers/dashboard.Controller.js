const dashboardModel = require("../models/dashboardModel.js");

async function corrigir(res) {
    var quiz = await dashboardModel.corrigir();

    if (quiz.length == 0) {
        res.status(201);
    }

    return res.status(200).json(quiz);
}

module.exports = { corrigir }