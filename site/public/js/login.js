function acessar() {

  var username = ipt_username.value;
  var senha = ipt_senha.value;

  if (username.indexOf('#') >= 0) {
    div_mensagem.innerHTML = ' <p class="sucesso"> username correto <br> </p>';
  }
  else {
    div_mensagem.innerHTML = ' <p class="erro"> Coloque um username valido <br></p>'
  }


  if (senha.length >= 8) {
    div_mensagem.innerHTML += `<p class="sucesso">Sua senha está correta <br> </p>`;
  } else {
    div_mensagem.innerHTML += `<p class="erro">Sua senha deve possuir ao menos 8 caracteres <br> </p>`;
  }
  
  fetch("/usuario/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usernameServer: username,
      senhaServer: senha
    })
  }).then(function (resposta) {

    if (resposta.ok) {

      resposta.json().then(json => {  
        sessionStorage.USERNAME_USUARIO = json[0].username;
        sessionStorage.ID_JOGADOR = json[0].idJogador;
        // mensagem_erro.style.display = "flex"
        // mensagem_erro.innerHTML = "<i class='bx bx-checkbox-checked'></i>Logado com sucesso!";
        setTimeout(() => {
          window.location = "./quizdash.html";
        }, "2000");
      });

    } else {
      resposta.text().then(texto => {
        console.error(texto);
      });
    }

  }).catch(function (erro) {
    console.log(erro);
  })
  return false;
}
