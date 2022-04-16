const quizData=[
    {
        question:'how old is florin',
        a:'10',
        b:"20",
        c:'22',
        d:'33',
        correct:'c'
    },
    {
        question :'hello how is everything',
        a:'hello',
        b:'fine',
        c:'not fine',
        d:'ok',
        correct:'b'
    },
    {
        question :'Hamza How are you',
        a:'fine',
        b:'not fine',
        c:'jsut ok',
        d:'ok',
        correct:'a'
    },
    {
        question :'what is your age hamza',
        a:'22',
        b:'23',
        c:'25',
        d:'24',
        correct:'a'
    },
    {
        question :'Who is the President of USA',
        a:'not me',
        b:'not you',
        c:'Donald trump',
        d:'kennedy',
        correct:'d'
    },
]
const question=document.getElementById('question')
const text_a=document.getElementById('text_a');
const text_b=document.getElementById('text_b');
const text_c=document.getElementById('text_c');
const text_d=document.getElementById('text_d');
const submitBtn=document.getElementById('submitBtn');
const quiz=document.querySelector('.quiz-container')

let currentQuestions=0;
let score=0

function loadQuiz(){
   const currentQuizData= quizData[currentQuestions];
   question.innerText=currentQuizData.question
   text_a.innerText=currentQuizData.a;
   text_b.innerText=currentQuizData.b;
   text_c.innerText=currentQuizData.c;
   text_d.innerText=currentQuizData.d;
}

let answer=undefined

function getSelected(){
    const answers=document.querySelectorAll('.answers')
    answers.forEach(mya=>{
        if(mya.checked){
            answer=mya.id
        }
        return answer
    })

    answers.forEach(my=>my.checked=false)
}


submitBtn.addEventListener('click',()=>{
   getSelected()

    if(answer===quizData[currentQuestions].correct){
       score++
    }
    currentQuestions++

    if(currentQuestions<quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML=`<h2 style='text-align:center'> your total score is ${score}</h2>` 
    }
   
    // getSelected()
    // console.log(answer);
    console.log(score);
    //  (currentQuestions.checked=true)?
    // loadQuiz():alert('helo this is finished')
})



loadQuiz();

