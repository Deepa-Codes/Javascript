let submit = document.getElementById('submit');
let element = document.getElementById('taskInput');
let ul = document.getElementById('to-do')


submit.addEventListener('click', createTask);
element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        createTask();
    }
  });
 


function createTask(){
    
let text = element.value
if(text.trim()!=''){
const li = document.createElement('li');
const div = document.createElement('div');
div.className='text';
 
const checkbox = document.createElement('input');
checkbox.type='checkbox';
checkbox.className='checkbox'

const span = document.createElement('span')
span.className='list'
span.innerText = text

const editBtn = document.createElement('button')
editBtn.type = 'button'
editBtn.innerHTML = '<i class="edit fa fa-pencil"></i>'; 

const delBtn = document.createElement('button')
delBtn.type = 'button'
delBtn.innerHTML = '<i class="delete fa fa-trash"></i>'; 

checkbox.addEventListener('change', ()=>{
    span.classList.toggle('strike-through', checkbox.checked);
    updateTaskCount()
})
editBtn.addEventListener('click', () => editTask(span, editBtn, checkbox, delBtn));
delBtn.addEventListener('click', () => deleteTask(li));

div.append(checkbox, span, editBtn, delBtn);
li.appendChild(div)

ul.prepend(li);
requestAnimationFrame(() => {
    li.classList.remove('enter');
  });

ul.parentElement.scrollTop = 0;
element.value='';
 
updateTaskCount()
}
}

//edit and delete
function editTask(span, btn, checkbox, delBtn) {
    // already editing → save
    if (btn.dataset.editing === 'true') {
      const input = span.querySelector('input');
      span.textContent = input.value.trim() || span.dataset.old;
      // animate submit
        span.classList.add('edit-animate');
        span.addEventListener(
        'animationend',
        () => span.classList.remove('edit-animate'),
        { once: true }
        );
      btn.innerHTML = '<i class="edit fa fa-pencil"></i>';
      btn.dataset.editing = 'false';
      checkbox.style.display='';
      delBtn.style.display='';
      return;
    }
    
    span.dataset.old = span.textContent;
    checkbox.style.display='none';
    delBtn.style.display='none';
     
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.textContent;
    input.className = 'edit-input';
  
    span.textContent = '';
    span.appendChild(input);
    // input.select();
    input.focus();
  
    btn.innerHTML = '<i class="edit-submit fa fa-chevron-right"></i>';
    btn.dataset.editing = 'true';
  
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        btn.click();
      }
    });
  }

function updateTaskCount(){
    const checkboxes = document.querySelectorAll('.todo-list .checkbox');
    // const total = checkboxes.length;
   let completed = [...checkboxes].filter(cb=>cb.checked).length;
   let pending = checkboxes.length-completed;
     
   document.querySelector('.text-notification').innerText = `${pending} Pending Tasks · ${completed} Completed Tasks`
}

function deleteTask(li) {
    li.classList.add('exit');
console.log(li);

    li.addEventListener(
      'transitionend',
      () => {
        console.log('transitioned');
        
        li.remove();
        updateTaskCount();
      },
      { once: true }
    );
  }