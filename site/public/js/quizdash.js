var corretas = [4,3,2,1,4,2,3,1,2,3,1,4,2,3,1]
var opcao = []
var qtdCorretas = 0

function resposta(num_pergunta, selecionada){
    opcao[num_pergunta] = selecionada.value;

    id="p" + num_pergunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "#adb8b1";
    labels[5].style.backgroundColor = "#adb8b1";
    labels[7].style.backgroundColor = "#adb8b1";
    

    selecionada.parentNode.style.backgroundColor = "#808080"
}

function corrigir() {
    qtdCorretas = 0;
     for(i=0; i < corretas.length; i++){
        if(corretas[i] == opcao[i]){
            qtdCorretas++;
        }
     }
     document.getElementById("resultado").innerHTML = qtdCorretas
}

const image = document.querySelector("img"),
input = document.querySelector("input");

input.addEventListener("change", () => {
image.src = URL.createObjectURL(input.files[0]);
});