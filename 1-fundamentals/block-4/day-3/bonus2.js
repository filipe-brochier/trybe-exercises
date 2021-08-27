/*
Faça um programa que diz se um número definido numa variável é primo ou não.
  Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

  Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
*/

const num = 4;
let zeroRemainder = 0;

for (let i = 1; i <= 7; i += 1) {
  if (num % i === 0) {
    zeroRemainder += 1;
  }
}

if (zeroRemainder > 2) {
  console.log('Não é primo!');
} else {
  console.log('É primo!');
}
