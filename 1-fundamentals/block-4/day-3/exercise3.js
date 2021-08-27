// Agora inverta o lado do triângulo.
let n = 5;
if (n > 1) {
  // let asterisco = "*"; É possível usar variáveis no método "repeat", ou strings.
  // let espacoEmBranco = " ";
  for (let index = 1; index <= n; index++) {
    console.log(" ".repeat(n-index) + "*".repeat(index));
  }
} else {
  console.log("O valor de n precisa ser maior que 1")
}