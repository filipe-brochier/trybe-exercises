const list = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];

const techList = (array, person) => {
  if (array.length === 0) return ('Vazio!');
  return array.sort().map((technology) => ({
    tech: technology,
    name: person
  }))
}

module.exports = techList;