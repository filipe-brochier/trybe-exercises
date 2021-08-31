const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

// Exercicio 6.1
const findAnimalByName = animalName => (
  new Promise((resolve, reject) => {
    const result = Animals.find((animal) => animal.name === animalName);

    if (result) return resolve(result);

    return reject(new Error('Nenhum animal com esse nome!'));
  })
)

// Exercicio 6.2

const findAnimalByAge = age => (
  new Promise((resolve, reject) => {
    const list = Animals.filter((animal) => animal.age === age);

    if (list.length > 0) return resolve(list);

    return reject(new Error('Nenhum animal encontrado!'))
  })
)



module.exports = { findAnimalByName, findAnimalByAge };