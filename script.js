const addTask = document.querySelector('#texto-tarefa');
const buttonTask = document.querySelector('#criar-tarefa');

function addNewTask() {
  const task = addTask.value;
  const olList = document.querySelector('.lista-tarefas');
  const listLiTask = document.createElement('li');
  const list = document.createTextNode(task);
  listLiTask.appendChild(list);
  olList.appendChild(listLiTask);

  addTask.value = ''; // limpar campo
}
buttonTask.addEventListener('click', addNewTask);

function activityCompleted(event){
  const actComplete = event.taget;

}


