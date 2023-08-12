//Atividade sobre expressão regular “Regex”
//1
const texto = "teste 12 teste";
const regex = /t/gi;
const resultado = texto.replace(regex, "7");

console.log(resultado);
//2
const texto = "Este é um texto de exemplo, exemplo, exemplo";
const palavra = "exemplo";
const regex = new RegExp(palavra, "gi");
const ocorrencias = texto.match(regex).length;

console.log(`A palavra "${palavra}" aparece ${ocorrencias} vezes.`);
//3
const inputElement = document.querySelector("#meuInput");

inputElement.addEventListener("input", function () {
  const valor = this.value;
  const regex = /^[A-Z]*$/;

  if (!regex.test(valor)) {
    this.value = valor.slice(0, -1);
  }
});

