// Seleciona o botão gerador de números - Mapeou o botão
const generateNumber = document.querySelector(".btn-draw");
// Seleciona o elemento onde o texto vai aparecer
const resultDisplay = document.querySelector("#result-value");

function generateNewNumber() {
  //Math.ceil e floor - arredonda o valor
  const min = Math.ceil(document.querySelector("#input-min").value);
  const max = Math.floor(document.querySelector("#input-max").value);

  // Validação simples: evita o sorteio se os campos estiverem vazios ou com letras
  if (isNaN(min) || isNaN(max)) {
    resultDisplay.innerHTML = "Erro: Digite os números";
    return;
  }

  const result = Math.floor(Math.random() * (max - min + 1) + min);

  resultDisplay.innerHTML = result;
}

generateNumber.addEventListener("click", generateNewNumber);
