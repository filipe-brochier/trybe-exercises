const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const object = await fetch(API_URL, myObject)
  const objectJSON = await object.json()
  document.querySelector('h2').innerText = objectJSON.joke;
};

window.onload = () => fetchJoke();