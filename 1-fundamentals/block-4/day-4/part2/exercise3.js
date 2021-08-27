let array = [2, 4, 6, 7, 10, 0, -3]; 

function indiceDoMenorValor() {
  let menorValor = array[0];
  let indiceDoMaiorNumero = array[0];
  for (let index in array) {
    if (array[index] < menorValor) {
      indiceDoMaiorNumero = index;
    }
  }
  return console.log(indiceDoMaiorNumero);
}

indiceDoMenorValor();