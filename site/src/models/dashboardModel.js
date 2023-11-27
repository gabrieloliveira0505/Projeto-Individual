var database = require("../database/config"); 

function resultadoQuiz(acertos, fkJogador) {

    var instrucao = `
        INSERT INTO pontuacao (idPontuacao, pontuacao, fkJogador) VALUES (null, ${acertos}, ${fkJogador});
    `;

    return database.executar(instrucao);

}

async function pegarDadosQuiz(idResultado) {
    var pegarDadosQuiz = 
        
        `SELECT * FROM pontuacao join jogador on fkJogador = idJogador where idPontuacao = ${idResultado};`
    
    return  database.executar(pegarDadosQuiz);
    
    
    
    // console.log(pegarDadosQuiz)
    
    // return {
    //     dadosQuizHtml: pegarDadosQuiz,
        
    // }
}

module.exports = { resultadoQuiz ,
                pegarDadosQuiz}