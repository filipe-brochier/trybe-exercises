/*
Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
*/
let n = 7;
if ((n > 1) && (n % 2 != 0)) {
  for (let index = 1; index <= n; index++) {
    if ((index % 2) != 0) {
      if ((index === 1 || index === n)) {
        console.log(" ".repeat((n - index)/2) + "*".repeat(index));
        } else {
        console.log(" ".repeat((n - index)/2) + "*" + " ".repeat(index - 2) + "*");
      }
    }
  }
} else {
  console.log("O valor de n precisa ser maior que 1 e ser ímpar.")
}