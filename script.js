const createTaskButton = document.querySelector('#criar-tarefa');

function addTaskOnList() {
  const textFromInputArea = document.getElementsByTagName('input')[0].value;
  const toDoList = document.createElement('li');
  const toDoOrderedList = document.querySelector('#lista-tarefas');
  toDoList.className = 'tasks';
  toDoList.innerHTML = textFromInputArea;
  toDoOrderedList.appendChild(toDoList);
}

function clearInputField() {
  document.getElementsByTagName('input')[0].value = '';
}

createTaskButton.addEventListener('click', addTaskOnList);
createTaskButton.addEventListener('click', clearInputField);

const orderedList = document.querySelector('#lista-tarefas');

function changeListItemBackgroundColor(event) {
  const aux = event;
  let tasklist = document.querySelectorAll('.tasks');
  for (let index = 0; index < tasklist.length; index += 1) {
    if (tasklist[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      tasklist[index].style.backgroundColor = 'transparent';
      tasklist[index].classList.remove('selected');
    }
  }
  aux.target.style.backgroundColor = 'rgb(128, 128, 128)';
  aux.target.classList.add('selected');
  if (orderedList.style.backgroundColor = 'rgb(128, 128, 128)') {
    orderedList.style.backgroundColor = 'transparent';
  }
}

orderedList.addEventListener('click', changeListItemBackgroundColor);

function crossOutCompletedTask(event) {
  const aux = event;
  const isCompleted = event.target.classList.contains('completed');
  if (isCompleted) {
    aux.target.classList.remove('completed');
  } else {
    aux.target.classList.add('completed');
  }
}

orderedList.addEventListener('dblclick', crossOutCompletedTask);

const eraseButton = document.querySelector('#apaga-tudo');

function removeEverything() {
  while (orderedList.firstChild) {
    orderedList.removeChild(orderedList.firstChild);
  }
}

eraseButton.addEventListener('click', removeEverything);

const removeCompletedButton = document.querySelector('#remover-finalizados');

function removeCompleted() {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    if (completed[index].classList.contains('completed')) {
      orderedList.removeChild(completed[index]);
    }
  }
}

removeCompletedButton.addEventListener('click', removeCompleted);

const saveTasksButton = document.querySelector('#salvar-tarefas');

function saveTasksLocalStorage() {
  const listItems = document.querySelectorAll('.lista-tarefas');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].innerHTML
  }
}

saveTasksButton.addEventListener('click', saveTasksLocalStorage);

const buttonRmvSelected = document.querySelector('#remover-selecionado');

function removeSelectedItems() {
  const selectedItem = document.querySelector('.selected');
  orderedList.removeChild(selectedItem);
}

buttonRmvSelected.addEventListener('click', removeSelectedItems);
