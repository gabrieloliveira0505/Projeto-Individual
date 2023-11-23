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
  }
  