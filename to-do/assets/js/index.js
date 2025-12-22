let submit = document.getElementById('submit');
let element = document.getElementById('taskInput');
let ul = document.getElementById('to-do')
let draggedLi = null;
let dragId = null;

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

/**
 * {
  id: Date.now(),
  text: 'Task name',
  completed: false
} 
**/

submit.addEventListener('click', addTask);
element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});
 
function addTask(){
    const text = element.value.trim();
    if(!text) return;

    tasks.unshift({
        id:Date.now(),
        text,
        completed:false,
    });
    
    element.value ='';
    renderTasks()

    const scrollContainer = document.querySelector('.scroll-container');

  // 🔥 wait for DOM paint
  requestAnimationFrame(() => {
    scrollContainer.scrollTop = 0;
  });
}

function renderTasks(){
    ul.innerHTML='';
    tasks.forEach(task=>{
        const li = createTask(task);
        ul.appendChild(li);
    })
    updateTaskCount()
    saveTasks();
}
renderTasks();
function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function playSound(type){
    const audio = document.getElementById(`sound-${type}`);
    audio.currentTime=0;
    audio.play();
}

function enableDrag(li) {
 
    li.addEventListener('dragstart', (e) => {
        draggedLi = li;
        li.classList.add('dragging');
      
        e.dataTransfer.setData('text/plain', '');
        e.dataTransfer.effectAllowed = 'move';
      })

     li.addEventListener('dragend', () => {
        li.classList.remove('dragging');
        draggedLi = null;
      
        document
          .querySelectorAll('.drag-over')
          .forEach(el => el.classList.remove('drag-over'));
      
        syncOrderFromDOM();
      });

    li.addEventListener('dragover', (e) => {
      e.preventDefault();
  
      if (li === draggedLi) return;
  
      li.classList.add('drag-over');
  
      // 🔥 REAL-TIME DOM MOVE
      const rect = li.getBoundingClientRect();
      const offset = e.clientY - rect.top;
  
      if (offset > rect.height / 2) {
        ul.insertBefore(draggedLi, li.nextSibling);
      } else {
        ul.insertBefore(draggedLi, li);
      }
    });
  
    li.addEventListener('dragleave', () => {
      li.classList.remove('drag-over');
    });
  }

  function syncOrderFromDOM(){
    const newOrder = [];
  
    document.querySelectorAll('#to-do li').forEach(li => {
      const id = Number(li.dataset.id);
      const task = tasks.find(t => t.id === id);
      if (task) newOrder.push(task);
    });
  
    tasks = newOrder;
    saveTasks();
  }
 
function reorderTask(from, to){
    console.log(from, to);
    const fromIndex = tasks.findIndex(t=>t.id == from);
    const toIndex = tasks.findIndex(t=>t.id == to);
    const moved = tasks.splice(fromIndex, 1)[0];
    tasks.splice(toIndex, 0, moved);

    renderTasks();

}

function createTask(task){
const li = document.createElement('li');
// let text = element.value
li.draggable = true;
li.dataset.id = task.id;

// if(text.trim()!=''){

const div = document.createElement('div');
div.className='text';
 
const checkbox = document.createElement('input');
checkbox.type='checkbox';
checkbox.className='checkbox'
checkbox.checked=task.completed;

const span = document.createElement('span')
span.className='list'
span.textContent = task.text;

if(task.completed) span.classList.add('strike-through');

const editBtn = document.createElement('button')
editBtn.type = 'button'
editBtn.innerHTML = '<i class="edit fa fa-pencil"></i>'; 

const delBtn = document.createElement('button')
delBtn.type = 'button'
delBtn.innerHTML = '<i class="delete fa fa-trash"></i>'; 

checkbox.addEventListener('change', ()=>{
    task.completed = checkbox.checked;
    // span.classList.toggle('strike-through', checkbox.checked);
    if(checkbox.checked=='true') playSound('check');
    if(checkbox.checked==false) playSound('uncheck')
    renderTasks();
})
editBtn.addEventListener('click', () =>
    EditTask(task, span, editBtn, checkbox, delBtn)
  );

delBtn.addEventListener('click', () => deleteTask(task.id, li));

div.append(checkbox, span, editBtn, delBtn);
li.appendChild(div)

enableDrag(li);
 
playSound('add');
document.querySelector('#taskInput').focus();
requestAnimationFrame(() => {
    li.classList.remove('enter');
  });
return li
 
}

function EditTask(task, span, btn, checkbox, delBtn){
    if(btn.dataset.editing=== 'true'){
        const input=span.querySelector('input');
        task.text = input.value.trim() || task.text;
        span.textContent = task.text;
        span.classList.remove('edit-animate');
    void span.offsetWidth;
    span.classList.add('edit-animate');

        btn.innerHTML = '<i class="edit fa fa-pencil"></i>';
        btn.dataset.editing = 'false';
        checkbox.style.display = '';
        delBtn.style.display = '';
        
        playSound('edit');
        saveTasks();
        return;
    }

    checkbox.style.display='none';
    delBtn.style.display='none';
    btn.dataset.editing='true';
    btn.innerHTML = '<i class="fa fa-chevron-right edit-submit"></i>';

    const input= document.createElement('input');
    input.value = task.text;
    input.className='edit-input';

    span.textContent='';
    span.appendChild(input);
    input.focus();

    input.addEventListener('keydown', e=>{
        if(e.key==='Enter') btn.click();
    })
}
 
function deleteTask(id, li) {
    li.classList.add('exit');
  
    li.addEventListener(
      'transitionend',
      () => {
       finalize(id, li)
      },
      { once: true }
    );

    setTimeout(() => {
        if (li.isConnected) {
          finalizeDelete(id, li);
        }
      }, 300);
  }

  function finalize(id, li){
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    li.remove();
    updateTaskCount();
    playSound('delete')
  }

function updateTaskCount(){
     
let completed = tasks.filter(t=>t.completed).length;
let pending = tasks.length -completed;
console.log(completed, pending, tasks);
 if(!tasks.length){
document.querySelector('.text-notification').innerText = `No Tasks Yet`;
 }
   document.querySelector('.text-notification').innerText = `${pending} Pending Tasks · ${completed} Completed Tasks`
}
 

