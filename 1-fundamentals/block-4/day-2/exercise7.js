let numbers = [10000, 9, 3, 19, 70, 8, 5, 35, 36, 37];
// Utilizando for, descubra qual o menor valor contido no array e imprima-o; 

//Criar uma variável, chamada menorValor que recebe o primeiro elemento existente no array
//Criar um laço for que percorra todos os valores do array
  //Se o valor for menor que o da variável menorValor, a variável menorValor recebe este valor.
//Imprima a variável menorValor

let menorValor = numbers[0];

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index];
  }
}
console.log(menorValor);