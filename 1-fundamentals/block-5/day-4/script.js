document.querySelector('#bgcolor').addEventListener('click', () => {
  if (document.body.style.backgroundColor === 'grey') {
    document.body.style.backgroundColor = 'white';
  } else {
  document.body.style.backgroundColor = 'grey';
  }
  localStorage.setItem('bgcolor', document.body.style.backgroundColor);
});

document.querySelector('#color').addEventListener('click', () => {
  if (document.body.style.color === 'grey') {
    document.body.style.color = 'black';
  } else {
  document.body.style.color = 'grey';
  }
  localStorage.setItem('color', document.body.style.color);
});

document.querySelector('#size').addEventListener('click', () => {
  if (document.body.style.fontSize === '2rem') {
    document.body.style.fontSize = '1rem';
  } else {
    document.body.style.fontSize = '2rem';
  }
  localStorage.setItem('fontSize', document.body.style.fontSize);
});

document.querySelector('#spacing').addEventListener('click', () => {
 if (document.body.style.lineHeight === '2rem') {
  document.body.style.lineHeight = '1rem';
 } else {
  document.body.style.lineHeight = '2rem';
 }
 localStorage.setItem('lineHeight', document.body.style.lineHeight);
});

document.querySelector('#family').addEventListener('click', () => {
  if (document.body.style.fontFamily === 'Arial') {
    document.body.style.fontFamily = 'Georgia';
  } else {
    document.body.style.fontFamily = 'Arial'
  }
  localStorage.setItem('fontFamily', document.body.style.fontFamily);
});

window.onload = () => {
  document.body.style.backgroundColor = localStorage.getItem('bgcolor');
  document.body.style.color = localStorage.getItem('color');
  document.body.style.fontSize = localStorage.getItem('fontSize');
  document.body.style.lineHeight = localStorage.getItem('lineHeight');
  document.body.style.fontFamily = localStorage.getItem('fontFamily');
}