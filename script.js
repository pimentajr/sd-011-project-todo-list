function addTask() {
  const input = document.getElementById('texto-tarefa').value;
  const taskList = document.getElementById('lista-tarefas');
  const task = document.createElement('li');
  taskList.appendChild(task);
  const textTask = input;
  task.innerText = textTask;
  document.getElementById('texto-tarefa').value = '';
}

const buttonAddTask = document.getElementById('criar-tarefa');

buttonAddTask.addEventListener('click', addTask);

const taskList = document.getElementById('lista-tarefas');

function backgroundClassItem(event) {
  let itens = taskList.children;
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].classList.remove('selected');
  }  
  event.target.className = 'selected';
}

taskList.addEventListener('click', backgroundClassItem);
