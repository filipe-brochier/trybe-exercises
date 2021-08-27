let n = 6;
// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
if (n > 1) {
  let a = "*";
  for (let i = 1; i <= n; i++) {
    console.log(a.repeat(n));
  }
} else {
  console.log("O valor de n deve ser maior que 1")
}