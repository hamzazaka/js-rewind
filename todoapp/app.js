
const form=document.getElementById('form');
const input =document.getElementById('input');
const todos=document.querySelector('.todos');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const todo=input.value;

    if(todo){
        const todoEl=document.createElement('li');
        todoEl.innerText=todo;
        todos.appendChild(todoEl);
        input.value=''


        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('completed')
        })


        todoEl.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            todoEl.remove()
        })
    }
})
