const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1:
// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addNewKey = (obj, key, value) => {
  obj[key] = value;
}

addNewKey(lesson2, 'turno', 'noite');

// Exercício 2
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = obj => Object.keys(obj);

console.log(listKeys(lesson2))

// Exercício 3
// Crie uma função para mostrar o tamanho de um objeto

const objSize = obj => Object.keys(obj).length;

console.log(objSize(lesson2));

// Exercício 4
// Crie uma função para listar os valores de um objeto

const listValues = obj => Object.values(obj);

console.log(listValues(lesson2));

// Exercício 5
// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// Exercício 6:
// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = obj => {
  let total = 0;
  const array = Object.keys(obj);
  for (let index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
}

console.log(totalStudents(allLessons));

//Exercício 7:
//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

  // console.log(getValueByNumber(lesson1, 0));
  // Output: 'Matématica'

const getValueByNumber = (obj, number) => Object.values(obj)[number];

console.log(getValueByNumber(lesson1, 0));

//Exercício 8:
// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. EXEMPLO:

// console.log(verifyPair(lesson3, 'turno', 'noite'));
  // Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
  // Output: false

const verifyPair = (obj, key, value) => {
  const array = Object.entries(obj);
  let condicao = false;
  for (let index in array) {
    if (array[index][0] === key && array[index][1] === value) {
      condicao = true;
    }
  } return condicao;
}

console.log(verifyPair(lesson1, 'numeroEstudantes', 20));
