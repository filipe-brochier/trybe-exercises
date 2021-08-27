let numeros = [2, 3, 2, 5, 8, 2, 3];
let soma2 = 0;
let soma3 = 0;
let soma5 = 0;
let soma8 = 0;
for (let numero of numeros) {
    switch (numero) {
      case 2:
        soma2++;
      break;
      case 3:
        soma3++;
      break;
      case 5:
        soma5++;
      break;
      case 8:
        soma8++;
      break;
    }
}
console.log(soma2);
console.log(soma3);
console.log(soma5);
console.log(soma8);