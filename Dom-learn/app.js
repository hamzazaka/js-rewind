// const para=document.querySelector('.error');

// console.log(para);

// const allp=document.querySelectorAll('p');
// const errors=document.querySelectorAll('.error')

// allp.forEach(para=>{
//     console.log(para);
// })

//  console.log(allp[0]);
//  console.log(errors);
//  errors.forEach((error=>{
//      console.log(error);
//  }))

// const para= document.querySelectorAll('p');

// para.forEach(h=>{
//     h.innerText='hello this is world'
// })

// console.log(para.innerText);
// para.innerText='hello this is world';

// const content=document.querySelector('.content');

// content.innerHTML+='<span>this is the new content </span>';

// const people=['hamza','zaka','zizi'];

// people.forEach(p=>{
//     content.innerHTML+=`<p>${p}</p>`
// })

// const link =document.querySelector('a');

// console.log(link.setAttribute('href','https://www.helloworld.com'));
// link.innerText='this is hello world';

// const msg=document.querySelector('div');

// console.log(msg.getAttribute('class'));

// msg.setAttribute('class','success');
// msg.setAttribute('style','color:greenf')

// const title=document.querySelector('.dom')
// title.style.color='orange';
// title.style.fontSize='60px';
// title.style.marginTop='80px';

const title=document.querySelector('.title');

const p=document.querySelector('.error p')
console.log(p);

const error=document.querySelector('.error');

const button =document.querySelector('button')

button.addEventListener('click',()=>{
    error.style.border='1px dashed green';
    p.style.color='green'
    title.style.color='green'
})
title.classList.add('hello');

