function gerarSequencia(tamanho, min, max) {
  let sequencia = [];

  for (let i = 0; i < tamanho; i++) {
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    sequencia.push(numeroAleatorio);
  }

  return sequencia;
}

const tamanhoSequencia = 10;
const minimo = 1;
const maximo = 100;

const sequenciaAleatoria = gerarSequencia(tamanhoSequencia, minimo, maximo);
console.log(sequenciaAleatoria);
