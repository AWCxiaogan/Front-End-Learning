function add(){
	let inputs=document.getElementById('todo-form').children;
	for(let i=0;i<inputs.length;i++)
		console.log(inputs[i].value);
	let 
		title=inputs[0].value,
		descr=inputs[1].value,
		time=inputs[2].value;
	let id=new Date().getTime();
	tempData={
		id:id,
		title:title,
		descr:descr,
		time:time,
	}
	generateElement(tempData);
}

function generateElement(tempData){
	let taskList=document.getElementById('taskList');
	let addItem='title：'+tempData.title+'</br>time:'+tempData.time+'</br>descripttion:'+tempData.descr;
	let node=document.createElement('div');
	node.innerHTML=addItem;
	taskList.appendChild(node);
}

function clr()
{
	let taskList=document.getElementById('taskList');
	let head=taskList.firstChild;
	taskList.innerHTML='<h3>Task List</h3>';
	//console.log(taskList.children);
}