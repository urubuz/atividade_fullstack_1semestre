const input = document.getElementById("input");
const mensagem = document.getElementById("resultado");
const tentativasEl = document.getElementById("tentativas");
const btnVerificar = document.getElementById("btn-verificar");
const btnNovo = document.getElementById("btn-novo");

let numeroSecreto;
let tentativas;

function novoJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  input.value = "";
  input.disabled = false;
  input.style.borderColor = "transparent";
  mensagem.textContent = "";
  tentativasEl.textContent = "";
  btnVerificar.style.display = "inline-block";
  btnNovo.style.display = "none";
  input.focus();
}

function verificar() {
  const valor = parseInt(input.value);

  if (isNaN(valor) || valor < 1 || valor > 100) {
    mensagem.textContent = "Digite um número válido entre 1 e 100!";
    mensagem.style.color = "#fbbf24";
    input.style.borderColor = "#fbbf24";
    return;
  }

  tentativas++;
  tentativasEl.textContent = `Tentativas: ${tentativas}`;

  if (valor === numeroSecreto) {
    input.style.borderColor = "#5cff9d";
    mensagem.textContent = `Você acertou em ${tentativas} tentativa(s)!`;
    mensagem.style.color = "#5cff9d";
    input.disabled = true;
    btnVerificar.style.display = "none";
    btnNovo.style.display = "inline-block";
  } else if (valor > numeroSecreto) {
    input.style.borderColor = "#ef4444";
    mensagem.textContent = "O número é menor!";
    mensagem.style.color = "#ef4444";
  } else {
    input.style.borderColor = "#ef4444";
    mensagem.textContent = "O número é maior!";
    mensagem.style.color = "#ef4444";
  }
}

btnVerificar.addEventListener("click", verificar);
btnNovo.addEventListener("click", novoJogo);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (btnVerificar.style.display !== "none") {
      verificar();
    } else {
      novoJogo();
    }
  }
});

novoJogo();
