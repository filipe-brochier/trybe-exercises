const hydrate = string => {
  const numbers = /\d+/g;
  const qtd = string.match(numbers).map((elem) => parseInt(elem)).reduce((acc, curr) => acc + curr, 0);
  return qtd > 1 ? `${qtd} copos de água` : `1 copo de água`
}

console.log(hydrate('3 cervejas e 4 vodkas'));



module.exports = hydrate;