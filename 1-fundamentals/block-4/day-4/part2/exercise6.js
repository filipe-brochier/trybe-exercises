function gau(n) {
  let soma = 0;
  for (let index = 1; index <= n; index++) {
    soma += index;
  }
  return console.log(soma);
}

gau(3);