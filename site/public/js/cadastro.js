// Div's fora da "funtion" para a mensagem já aparecer quando a tela carregar 
div_nomeErrado.innerHTML = `O nome deve conter mais de 3 caracteres`;
div_usernameErrado.innerHTML = `Informe um username válido`;
div_agenteErrado.innerHTML = `Informe um agente válido`;
div_classeErrada.innerHTML = `Informe uma classe válida`;
div_senhaErrada.innerHTML = `A senha deve conter mais de 8 caracteres <br> e pelo menos um caracter especial`;


function Exibir() {
    var nome = input_nome.value;
    var username = input_username.value;
    var agente = input_agente.value;
    var classe = input_classe.value;
    var senha = input_senha.value;

    // DIV's sem texto para limpar após executar a function

    div_nome.innerHTML = ``;
    div_username.innerHTML = ``;
    div_agente.innerHTML = ``;
    div_classe.innerHTML = ``;
    div_senha.innerHTML = ``;


    div_nomeErrado.innerHTML = ``;
    div_usernameErrado.innerHTML = ``;
    div_agenteErrado.innerHTML = ``;
    div_classeErrada.innerHTML = ``;
    div_senhaErrada.innerHTML = ``;



    // O "Length" serve para saber o tamanho da palavra especificada antes do " . ", nesse caso o texto da variavel "nome"
    if (nome.length > 3) {
        div_nome.innerHTML = `O nome é valido! <br>`
    } else { div_nomeErrado.innerHTML = `Informe um nome válido <br>` }


    // indexOf verifica se tem um dos caracteres especificados dentro do (), se a condição for verdadeira ela responde algo >= 0;
    // Nesse caso tambem usei o conector lógico && pois o email precisa ter o "@" e mais um sufixo (.com ou .br)
    if (username.indexOf('#') >= 0) { div_username.innerHTML = 'Username válido! <br>' }
    else { div_usernameErrado.innerHTML = 'Informe um username válido! <br>' }

    if (agente.length > 3) {
        div_agente.innerHTML = `agente válido! <br>`
    } else { div_agenteErrado.innerHTML = `Informe um agente válido <br>` }

    if (classe.indexOf('Duelista') >= 0
        || classe.indexOf('Iniciador') >= 0
        || classe.indexOf('Controlador') >= 0
        || classe.indexOf('Sentinela') >= 0) {
        div_classe.innerHTML = `Classe Válida <br>`
    } else {
        div_classeErrada.innerHTML = `Informe uma classe válida`
    }


    if (senha.length >= 8 &&
        (senha.indexOf('#') >= 0
            || senha.indexOf('!') >= 0
            || senha.indexOf('@') >= 0
            || senha.indexOf('$') >= 0
            || senha.indexOf('%') >= 0
            || senha.indexOf('&') >= 0
            || senha.indexOf('*') >= 0)
    ) {
        div_senha.innerHTML = ` Sua senha é válida! <br>`
    } else {
        div_senhaErrada.innerHTML = `Sua senha deve possuir ao menos 8 caracteres <br> e pelo menos um caracter especial! <br>`
    }



}

function cadastrar() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = input_nome.value;
    var usernameVar = input_username.value;
    var agenteVar = input_agente.value;
    var classeVar = input_classe.value;
    var senhaVar = input_senha.value;

    if (
      nomeVar == "" ||
      usernameVar == "" ||
      agenteVar == "" ||
      classeVar == "" ||
      senhaVar == ""
    ) {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =
        "(Mensagem de erro para todos os campos em branco)";

      finalizarAguardar();
      return false;
    } else {
      setInterval(sumirMensagem, 5000);
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        usernameServer: usernameVar,
        agenteServer: agenteVar,
        classeServer: classeVar,
        senhaServer: senhaVar
      }),
    })
}