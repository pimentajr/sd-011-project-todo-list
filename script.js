
let listTask =  document.getElementById('lista-tarefas');

/* function remove(input){
	//let input = document.getElementById('texto-tarefa');
	input.value = '';
} */

function addTasks(){
		let input = document.getElementById('texto-tarefa');
		let newElement = document.createElement('li');
		newElement.innerText = input.value;
		listTask.appendChild(newElement);
		input.value = '';
}

let bot = document.getElementById('criar-tarefa');
bot.addEventListener('click', addTasks)


/* function clickAndChangeColor(color){

	listTask.addEventListener('click', (event) => {
		event.target.style.backgroundColor = color;
	});
} 

clickAndChangeColor ('rgb(128, 128, 128)');  */
