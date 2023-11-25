var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var username = req.body.usernameServer;
    var senha = req.body.senhaServer;

    if (username == undefined) {
        res.status(400).send("Seu username está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(username, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.status(200).json(resultadoAutenticar)

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Username e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    const { nome, username, classe, agente, senha, idElo } = req.body;

    res.status(200);
    // // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (username == undefined) {
        res.status(400).send("Seu username está undefined!");
    } else if (classe == undefined) {
        res.status(400).send("Sua classe está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (agente == undefined) {
        res.status(400).send("Seu agente está undefined!");
    } else {


        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js 1  3 4
        usuarioModel.cadastrar(nome, username, senha, agente, classe, idElo)
            .then((resultado) => {
                res.json(resultado);
            }).catch((erro) => {
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

function cadastrarPontuacao(req, res) {
    const { pontuacao, idJogador } = req.body;

    usuarioModel.cadastrarPontuacao(idJogador, pontuacao)
        .then(() => {
            res.status(200).json();
        }).catch((erro) => {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });
}




module.exports = {
    autenticar,
    cadastrar,
    cadastrarPontuacao
}