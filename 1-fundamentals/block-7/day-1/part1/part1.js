// Parte 1 - Exercício 1

/*      function testingScope(escopo) {
        if (escopo === true) {
          let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope += ' ótimo, fui utilizada no escopo !';
          console.log(ifScope);
        } else {
          let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      }

      testingScope(true);

*/
const testingScope = escopo => {
  let ifScope = 'Não devo ser utilizado fora do meu escopo(if)';
  let elseScope = 'Não devo ser usado fora do meu escopo (else)';
  escopo === true ? console.log(`${ifScope}`) : console.log(`${elseScope}`);
}

testingScope(1 === 1);

//Parte 1 - Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

function sortAnArray(param1) {
  let maiorNumero = Infinity;
  for (let i = param1.length; i >= 0; i -= 1) {
    if (param1[i] < maiorNumero) {
      maiorNumero = param1[i];
    }
  }
}

console.log(`Os números ${oddsAndEvens.sort()} se encontram ordernados de forma crescente`);