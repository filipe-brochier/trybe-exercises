function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const promiseFunction = () => {
  const promise = new Promise((resolve, reject) => {
    const array = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1,
    )
    
    const sum = array.map(num => num ** 2)
      .reduce((acc, curr) => acc + curr);
    
    sum < 8000 ? resolve(sum) : reject(sum);
  });

  promise
    .then((sum) => [2, 3, 5, 10].map(number => sum / number))
    .then(array => array.reduce((acc, curr) => acc + curr, 0))
    .catch(() => console.error('É mais de oito mil! Essa promise deve estar quebrada!'));
}

promiseFunction();
