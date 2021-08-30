// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .

  // 1. Crie uma função que receba um número e retorne seu fatorial.
    // Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
    // Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const fatorial = num => {
  let res = 1;
  if (num > 1) {
    for (let i = 1; i <= num; i += 1) {
      res *= i;
    }
    return res;
  } else {
    return res;
  }
}

const fatorialTernary = num => num > 1 ? num*fatorialTernary(num-1) : 1;

// 2 Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = sentence => {
  let lw = sentence.split(' ')[0];
  for (let i of sentence.split(' ')) {;
    i.length > lw.length ? lw = i : null; 
  }
  return(lw);
}

/* 3. Crie uma página que contenha:
  * Um botão ao qual será associado um event listener;
  * Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
  * Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada. */

// const button = document.querySelector('#button');
// const span = document.querySelector('span');
// let timesClicked = 0;
// button.addEventListener('click', () => {
//   timesClicked += 1;
//   span.innerText = timesClicked;
// });

/* 4 Crie um código JavaScript com a seguinte especificação:
  * Não se esqueça de usar template literals

  * Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
  
  Exemplo:
    String determinada: "Tryber x aqui!"
    Parâmetro: "Bebeto"
    Retorno: "Tryber Bebeto aqui!"
    
  * Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
  
  * Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
    
  Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
    JavaScript;
    HTML; ... #goTrybe". 
*/

const includeNameIntoString = string => {
  const sentence = 'Tryber x aqui!';
  return sentence.split('x')[0] + string + sentence.split('x')[1];
}

// console.log(includeNameIntoString('Filipe'));

const skills = ['HTML', 'CSS', 'JS', 'Bootstrap', 'React'];

const concatFunction = string => {
  const greet = includeNameIntoString(string);
  return `${greet} Minhas cinco principais habilidades são: \n${skills.join('\n')}`;
} 

// console.log(concatFunction('Filipe'));

