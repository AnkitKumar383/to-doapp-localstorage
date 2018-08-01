"use strict";

// using count to keep the record of the total number of tasks
let count = 0;
if(localStorage.getItem('counter')==null || localStorage.getItem('counter')==0){
    count = 0;
}else{
    count = parseInt(localStorage.getItem('counter'));
}
// to store all the tasks
let tasks = [];

const button = document.getElementById('add');

button.addEventListener('click',function(){

    let task = document.getElementById('task');
    tasks[count++] = task.value;
    console.log(tasks);
    task.value=null;
    localStorage.setItem('counter',count);
    localStorage.setItem(count-1,tasks[count-1]);

    
});

// function to add tasks into the DOM
function addTasks() {

    for(let i=0;i<count; i++){

        let par = document.getElementById('item');
        let el =  document.createElement('li');
        let ts = localStorage.getItem(i);
        el.innerHTML = ts + " <span class='close'>x</span>";
        el.setAttribute('class','content');
        el.setAttribute('id',i);
        console.log(par);
        par.appendChild(el);
    }

}

addTasks();

// function to get the target 
function returnTarget(e){
    if(!e){
        e=window.event;
    }
    return e.target || e.srcElement;
}


// function to remove the elements
const list = document.querySelector("ul.item");

list.addEventListener('click',function(e){

    let target = returnTarget(e);
    // console.log(target);
    if(target.className == "close"){
        console.log(target);
        let par = document.querySelector("ul.item");
        let el = target.parentElement;
        let id = parseInt(el.getAttribute('id'));
        console.log(id);
        if(localStorage.getItem(id)){
            localStorage.removeItem(id);
        }
        par.removeChild(el);
        count--;
        localStorage.setItem('counter',count);
    }
    

},false);
