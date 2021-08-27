//  Depois, faça uma pirâmide com n asteriscos de base
let n = 7;
if ((n > 1) && (n % 2 != 0)) {
  for (let index = 1; index <= n; index++) {
    if ((index % 2) != 0) {
    console.log(" ".repeat((n - index)/2) + "*".repeat(index));
    }
  }
} else {
  console.log("O valor de n precisa ser maior que 1 e ser ímpar.")
}