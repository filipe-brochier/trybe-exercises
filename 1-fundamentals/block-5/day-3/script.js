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

function createButton(string) {
  button.innerText = string;
  button.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(button);
}

createButton('Feriados');

//Exercicio 3
button.addEventListener('click', mudaCorFeriado);

function mudaCorFeriado() {
  for (let index of document.getElementsByClassName('holiday')){
      index.style.backgroundColor = 'green'; 
  }
}
