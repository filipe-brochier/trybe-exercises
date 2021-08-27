let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; 

//Criar uma variável "numerosImpares" que receba a quantidade de números ímpares existentes no array.
//Criar um laço for que percorra todos os elementos no array
  //Se o número for ímpar, a variável numerosImpares recebe uma unidade.
//Se a variável numerosImpares for maior que zero, imprima a quantidade de números ímpares. Senão, imprima a mensagem: "nenhum valor ímpar encontrado"

let numerosImpares = 0;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 != 0) {
    numerosImpares += 1;
  }
}
if (numerosImpares > 0){
  console.log("A quantidade de números ímpares é: " + numerosImpares);
} else {
  console.log("Nenhum valor ímpar encontrado");
}

