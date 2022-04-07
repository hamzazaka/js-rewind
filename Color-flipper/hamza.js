const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const color=document.querySelector('.color')
const btn=document.getElementById('btn')

btn.addEventListener('click',()=>{
    let newHex='#';
    for(let i=0;i<6;i++){
        let randomNumber=Math.floor(Math.random()* hex.length);
        newHex+=hex[randomNumber]
        console.log(newHex)
        // console.log(newHex);
        document.body.style.backgroundColor=newHex;
        color.textContent=newHex
    }
    console.log(newHex);
})

