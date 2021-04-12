const caixaDeTexto = document.querySelector('#texto-tarefa');
const botaoAdicionar = document.querySelector('#criar-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');
const apagarTudo = document.querySelector('#apaga-tudo');
const apagarFinalizados = document.querySelector('#remover-finalizados');

botaoAdicionar.addEventListener('click', event => {
  const novoLi = document.createElement('li');
  novoLi.innerText = caixaDeTexto.value;
  listaDeTarefas.appendChild(novoLi);
  caixaDeTexto.value = '';
});
function changeBg() {
  const eventTarget = event.target;
  if (eventTarget.id !== 'clickedItem') {
    eventTarget.id = 'clickedItem';
  } else {
    eventTarget.id = null;
  }
}

function completedTask() {
  const eventTarget = event.target;
  if (eventTarget.className !== 'completed') {
    eventTarget.classList.add('completed');
  } else {
    eventTarget.className = null;
  }
}

listaDeTarefas.addEventListener('click', changeBg);
listaDeTarefas.addEventListener('dblclick', completedTask);

function apagaTudo() {
  while (listaDeTarefas.firstChild) {
    listaDeTarefas.removeChild(listaDeTarefas.firstChild);
  }
}

apagarTudo.addEventListener('click', apagaTudo);

function removerFinalizados() {
  const finalizados = document.querySelectorAll('.completed');
  for (let index = 0; index < finalizados.length; index += 1) {
    finalizados[index].remove();
  }
}
apagarFinalizados.addEventListener('click', removerFinalizados);
