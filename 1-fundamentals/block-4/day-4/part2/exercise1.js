// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for. 

function verificaPalindromo(palavras) {
  let palavraAoContrario = '';
  for (let index = palavras.length - 1; index >= 0; index--) {
    palavraAoContrario += palavras[index];
  }
  if (palavras === palavraAoContrario) {
      return console.log(true);
  } else {
      return console.log(false);
  }
}

verificaPalindromo('soladomaluco');

