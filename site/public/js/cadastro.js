// Div's fora da "funtion" para a mensagem já aparecer quando a tela carregar 
div_nomeErrado.innerHTML = `O nome deve conter mais de 3 caracteres`;
div_usernameErrado.innerHTML = `Informe um username válido`;
div_agenteErrado.innerHTML = `Informe um agente válido`;
div_classeErrada.innerHTML = `Informe uma classe válida`;
div_senhaErrada.innerHTML = `A senha deve conter mais de 8 caracteres <br> e pelo menos um caracter especial`;


function Exibir() {
  var idElo = input_elo.value;
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

  fetch("usuario/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome,
      username,
      agente,
      classe,
      senha,
      idElo,
    })
  });
  setTimeout(() => {
    window.location = "./login.html";
    
  }, "2000");
}

async function consultarElos() {

  var response = await fetch("/elo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  const elos = await response.json();
  
  const selectElos = document.getElementById("input_elo");

  elos.forEach((elo) => {
    var opt = document.createElement('option');
    opt.value = elo.idElo;
    opt.innerHTML = elo.elo;
    selectElos.appendChild(opt);
  });

}



