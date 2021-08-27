// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
let n = 5;
if (n > 1) {
  let a = "*";
  for (let index = 1; index <= n; index++) {
    console.log(a.repeat(index));
  }
} else {
  console.log("O valor de n precisa ser maior que 1")
}

