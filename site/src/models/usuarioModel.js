var database = require("../database/config")

function autenticar(username, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", username, senha)
    var instrucao = `
        SELECT idJogador, nome, username FROM jogador WHERE username = '${username}' AND senha = '${senha}';
    `;


    console.log(instrucao);
    console.log(database.executar(instrucao));
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, username, agente, classe, senha, idElo) {
    var instrucao = `INSERT INTO jogador (nome, username, agente, classe, senha, fkElo) VALUES ('${nome}', '${username}', '${agente}', '${classe}', '${senha}', '${idElo}');`;



    return database.executar(instrucao);
}

function cadastrarPontuacao(idJogador,pontuacao) {
    var instrucao = `INSERT INTO pontuacao (fkJogador, pontuacao) VALUES ('${idJogador}', '${pontuacao}');`;


    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarPontuacao
};