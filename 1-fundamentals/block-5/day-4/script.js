document.querySelector('#bgcolor').addEventListener('click', () => {
  if (document.body.style.backgroundColor === 'grey') {
    document.body.style.backgroundColor = 'white';
  } else {
  document.body.style.backgroundColor = 'grey';
  }
  // localStorage.setItem('bgcolor', document.body.style.backgroundColor);
});

document.querySelector('#color').addEventListener('click', () => {
  if (document.body.style.color === 'grey') {
    document.body.style.color = 'black';
  } else {
  document.body.style.color = 'grey';
  }
});

document.querySelector('#size').addEventListener('click', () => {
  if (document.body.style.fontSize === '2rem') {
    document.body.style.fontSize = '1rem';
  } else {
    document.body.style.fontSize = '2rem';
  }
});

document.querySelector('#spacing').addEventListener('click', () => {
 if (document.body.style.lineHeight === '2rem') {
  document.body.style.lineHeight = '1rem';
 } else {
  document.body.style.lineHeight = '2rem';
 }
});

document.querySelector('#family').addEventListener('click', () => {
  if (document.body.style.fontFamily === 'Arial') {
    document.body.style.fontFamily = 'Georgia';
  } else {
    document.body.style.fontFamily = 'Arial'
  }
});

window.onload = () => {
  // document.body.style.backgroundColor = localStorage.getItem('bgcolor');
  // localStorage.getItem();
  // localStorage.getItem();
  // localStorage.getItem();
  // localStorage.getItem();
}