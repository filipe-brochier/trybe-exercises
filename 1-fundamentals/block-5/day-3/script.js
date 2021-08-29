const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const divButton = document.querySelector('.buttons-container');

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//Exercício 1

function createDaysofTheMonth() {
  const days = document.querySelector('#days');
  for (let index of dezDaysList) {
    const day = document.createElement('li');
    day.classList.add('day');
    day.innerText = index;

    switch (index) {
      case 24:
      case 31:
        day.classList.add('holiday');
        break;

      case 4:
      case 11:
      case 18:
        day.classList.add('friday');
        break;

      case 25:
        day.classList.add('holiday');
        day.classList.add('friday');
        break;
    }
    days.appendChild(day);
  }
}

createDaysofTheMonth();

//Exercicio 2

function createButton(string, id) {
  let button = document.createElement('button');
  button.innerText = string;
  button.id = id;
  document.querySelector('.buttons-container').appendChild(button);
}

createButton('Feriados', 'btn-holiday');

//Exercicio 3
document.querySelector('#btn-holiday').addEventListener('click', mudaCorFeriado);

function mudaCorFeriado() {
  for (let index of document.getElementsByClassName('holiday')) {
    index.style.backgroundColor = 'green';
  }
}

//Exercicio 4
createButton('Sexta-feira', 'btn-friday');

// Exercicio 5
function highlightFriday() {
  let fridayList = document.getElementsByClassName('friday');
  for (let i = 0; i < fridayList.length; i += 1) {
    if (fridayList[i].style.color === 'blue') {
      fridayList[i].style.color = 'grey';
    } else {
      fridayList[i].style.color = 'blue';
    }
  }
}

document.querySelector('#btn-friday').addEventListener('click', highlightFriday);

// Exercicio 6

function zoomIn(event) {
  if (event.target.style.fontSize === '32px') {
    event.target.style.fontSize = '20px';
  } else {
    event.target.style.fontSize = '32px';
  }
}

function dayListeners() {
  let days = document.querySelectorAll('.day');
  for (let i = 0; i < days.length; i += 1) {
    days[i].addEventListener('mouseover', zoomIn);
    days[i].addEventListener('mouseout', zoomIn);
  }
}

// Exercicio 7

function createTask() {
  const li = document.createElement('li');
  const taskText = document.querySelector('#task-input').value;
  li.innerHTML = taskText + '<br>';
  li.classList.add('task');
  li.style.listStyle = 'none';
  document.querySelector('.my-tasks').appendChild(li);
}

document.querySelector('#btn-add').addEventListener('click', createTask);

// Exercício 8
function createNewTaskDiv(color) {

  const tasks = document.querySelector('.my-tasks');
  const div = document.createElement('div');

  div.className = 'taskDiv';
  div.style.backgroundColor = color;
  tasks.appendChild(div);
};

createNewTaskDiv('red');

// Exercício 9

function activateListener() {
  const tasks = document.querySelectorAll('.task');
  const days = document.querySelectorAll('.day');
  for (let task of tasks) {
    task.addEventListener('click', addTaskSelectedClass);
  }
  for(let index of days) {
    index.addEventListener('click', highlightDay);
  }
}

function addTaskSelectedClass(event) {
  if (event.target.classList.value.includes('selected')) {
    event.target.classList.remove('selected');
    event.target.style.backgroundColor = document.querySelector('body').style.backgroundColor;
  } else {
    event.target.classList.add('selected');
    event.target.style.backgroundColor = document.querySelector('.taskDiv').style.backgroundColor;
  }
}

document.querySelector('.taskDiv').addEventListener('click', activateListener);

// Exercicio 10

function highlightDay(event) {
  const taskDivColor = document.querySelector('.taskDiv').style.backgroundColor;
  if (event.target.style.color === taskDivColor) {
    event.target.style.color = 'rgb(119,119,119)';
  } else {
    event.target.style.color = 'red';
  }
}

window.onload = dayListeners();