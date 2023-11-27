var corretas = [4, 3, 2, 1, 4, 2, 3, 1, 2, 3, 1, 4, 2, 3, 1]
var opcao = []
var acertos = 0


function resposta(num_pergunta, selecionada) {
  opcao[num_pergunta] = selecionada.value;

  id = "p" + num_pergunta;

  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = "#adb8b1";
  labels[5].style.backgroundColor = "#adb8b1";
  labels[7].style.backgroundColor = "#adb8b1";


  selecionada.parentNode.style.backgroundColor = "#808080"
}

function corrigir() {
  
  acertos = 0;
  for (i = 0; i < corretas.length; i++) {
    if (corretas[i] == opcao[i]) {
      acertos++;
    }
  }
  document.getElementById("resultado").innerHTML = acertos

  var idJogador = sessionStorage.getItem("ID_JOGADOR");;

  fetch("/usuario/cadastrarPontuacao", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pontuacao: acertos,
      idJogador: idJogador,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);
      if (resposta.ok) {
        console.log(JSON.stringify(resposta))
        resposta.json().then(
          resposta => {
                  var pontuacao = [resposta[0].pontuacao];
                  chartAcerto.data.datasets[0].data = pontuacao
                  chartAcerto.update();
            // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
          }
          )

        // setTimeout(() => {
        //   window.location = "./quizdash.html";

        // }, "5000");
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}

// const image = document.querySelector("img"),
// input = document.querySelector("input");

// input.addEventListener("change", () => {
// image.src = URL.createObjectURL(input.files[0]);
// });
