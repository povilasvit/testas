const form = document.querySelector('.form');
const taskListUl = document.querySelector('.taskListUl');
const taskItemFin = document.querySelector('.taskItemFin');

const addTaskInput = document.getElementById('addTaskInput');

let listItem;
let deleteBtn;
let doneBtn;


//Create ToDo
form.addEventListener('submit', function(e){
	e.preventDefault();
	
createLiElement();
//delete ToDo
deleteToDo();
//done ToDo
doneToDo();

});


function createLiElement(){
	//li div with all elements
	const li = document.createElement('li');
	const divInput = document.createElement('div');
	const divDelete = document.createElement('div');
	const spanDelete = document.createElement('span');
	const divDone = document.createElement('div');
	const spanDone = document.createElement('span');
	
	divInput.innerHTML = addTaskInput.value;

	li.classList.add('listItem');
	divInput.classList.add('listItemEl');
	divInput.classList.add('taskText');
	//define delete btn
	divDelete.classList.add('listItemEl');
	spanDelete.classList.add('deleteBtn');
	spanDelete.classList.add('material-symbols-outlined');
	spanDelete.innerHTML = 'delete';
	//define done btn
	divDone.classList.add('listItemEl');
	spanDone.classList.add('doneBtn');
	spanDone.classList.add('material-symbols-outlined');
	spanDone.innerHTML = 'done';


	li.appendChild(divInput);
	li.appendChild(divDelete);
	li.appendChild(divDone);
	divDelete.appendChild(spanDelete);
	divDone.appendChild(spanDone);
	taskListUl.appendChild(li);

	addTaskInput.value = '';
}

function deleteToDo(){
	deleteBtn = document.querySelectorAll('.deleteBtn');
	listItem = document.querySelectorAll('.listItem');

	deleteBtn.forEach(function(element, index){
		element.addEventListener('click', function(e){
			listItem[index].remove();
		});
	});
}

function doneToDo(){
		doneBtn = document.querySelectorAll('.doneBtn');
		const taskText = document.querySelectorAll('.taskText');

		doneBtn.forEach(function(element, index){
			element.addEventListener('click', function(){
				listItem[index].remove();
				const liF = document.createElement('li');
				liF.classList.add('taskItemFin');
				liF.textContent = taskText[index].textContent;
				taskItemFin.appendChild(liF);
		});
	});
}