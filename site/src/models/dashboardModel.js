var database = require("../database/config"); 

function resultadoQuiz(acertos, fkJogador) {

    var instrucao = `
        INSERT INTO pontuacao (pontuacao, fkJogador) VALUES (${acertos}, ${fkJogador});
    `;

    return database.executar(instrucao);

}

async function pegarDadosQuiz(idJogador) {
    var pegarDadosQuiz = `
    SELECT pontuacao as Pontuação FROM pontuacao where fkJogador = ${idJogador};`;
    
    var pegarDadosQuiz = await database.executar(pegarDadosQuiz);
    
    
    
    console.log(pegarDadosQui)
    
    return {
        dadosQuizHtml: pegarDadosQuiz,
        
    }
}
module.exports = { resultadoQuiz ,
                pegarDadosQuiz}