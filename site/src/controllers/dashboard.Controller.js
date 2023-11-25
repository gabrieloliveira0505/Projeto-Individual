const dashboardModel = require("../models/dashboardModel.js");

function resultadoQuiz(idJogador, acertos) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertosServer;
    var idJogador = req.body.idJogadorServer;
    // Faça as validações dos valores

    // Passe os valores como parâmetro e vá para o arquivo JogadorModel.js
    dashboardModel.resultadoQuiz(idJogador, acertos)
        .then(
            function (resultado) {
                res.status(201).json()
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

function pegarDadosQuiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var idJogador = req.body.idJogadorServer;
    // Faça as validações dos valores

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    dashboardModel.pegarDadosQuiz(idJogador)
        .then(
            function (resultado) {
                res.status(201).json(resultado)
            }
        ).catch(
            function (erro) {
                console.log("erro");
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
module.exports = { resultadoQuiz,
                    pegarDadosQuiz}