/*
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
  Porcentagem >= 90 -> A
  Porcentagem >= 80 -> B
  Porcentagem >= 70 -> C
  Porcentagem >= 60 -> D
  Porcentagem >= 50 -> E
  Porcentagem < 50 -> F

  O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

const mark = -2;

if (mark < 0 || mark > 100) {
  console.log('Número inválido!');
} else if (mark >= 90) {
  console.log('A');
} else if (mark >= 80) {
  console.log('B');
} else if (mark >= 70) {
  console.log('C');
} else if (mark >= 60) {
  console.log('D');
} else if (mark >= 50) {
  console.log('E');
} else if (mark >= 0) {
  console.log('F');
}