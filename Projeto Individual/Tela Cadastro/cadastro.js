// Div's fora da "funtion" para a mensagem já aparecer quando a tela carregar 
div_nomeErrado.innerHTML = `O nome deve conter mais de 7 caracteres`;
div_emailErrado.innerHTML = `Informe um e-mail válido`;
div_senhaErrada.innerHTML = `A senha deve conter mais de 8 caracteres <br> e pelo menos um caracter especial`;
div_confirmacaoErrada.innerHTML = `Digite a senha novamente`;
div_cnpjErrado.innerHTML = `Informe um CNPJ válido`;


function Exibir(){
    var nome = input_nome.value;
    var email = input_email.value;
    var cnpj = input_cnpj.value;
    var senha = input_senha.value;
    var confirmacao = input_confirmacao.value;

// DIV's sem texto para limpar após executar a function

    div_nome.innerHTML = ``;
    div_email.innerHTML = ``;
    div_senha.innerHTML = ``;
    div_confirmacao.innerHTML = ``;
    div_cnpj.innerHTML = ``;
    

    div_nomeErrado.innerHTML = ``;
    div_emailErrado.innerHTML = ``;
    div_senhaErrada.innerHTML = ``;
    div_confirmacaoErrada.innerHTML = ``;
    div_cnpjErrado.innerHTML = ``;
    


    // O "Length" serve para saber o tamanho da palavra especificada antes do " . ", nesse caso o texto da variavel "nome"
        if (nome.length > 7){ 
            div_nome.innerHTML = `O nome é valido! <br>`
        } else {div_nomeErrado.innerHTML = `Informe um nome válido <br>`}
    }