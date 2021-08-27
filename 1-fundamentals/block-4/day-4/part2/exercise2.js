// Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 
let array = [2, 3, 6, 7, 10, 1];
function indiceDoMaiorValor() {
  let maiorValor = array[0];
  let indiceDoMaiorNumero = array[0];
  for (let index in array) {
    if (array[index] > maiorValor) {
      indiceDoMaiorNumero = index;
    }
  }
  return console.log(indiceDoMaiorNumero);
}

indiceDoMaiorValor();