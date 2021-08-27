let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function nomeMaisLongo() {
  let letras = nomes[0];

  for (let key of nomes) {
    if (key.length > letras.length) {
      letras = key;
    }
  }
  return console.log(letras);
}
nomeMaisLongo(nomes);