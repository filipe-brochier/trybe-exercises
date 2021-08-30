// const obj = {
//   key1: 'value1',
// }

// console.log(obj);

// const key2 = 'key2';
// obj[key2] = 'value2';

// console.log(obj);

// function asas(obj, key, value) {
//   obj = {};
//   const keyV = key;
//   obj[keyV] = value;
//   return obj;
// }

// console.log(asas(obj, 'chave', 'aloalo'));

// PARTE 2

// const obj2 = {
//   HTML: 'muito bom',
//   CSS: 'bom',
//   JS: 'muito bom',
// }

// console.log(Object.keys(obj2));

// PARTE 3

// console.log(Object.values(obj2));

// PARTE 4

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);

// PARTE 5

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

  const person = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person, lastName);
  
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person); // { name: 'Roberto', lastName: 'Silva' }