const newYears='1 Jan 2023';

const day=document.getElementById('day');
const hour=document.getElementById('hour');
const min=document.getElementById('min');
const second=document.getElementById('second');



function countdown(){
    const newyearsdate= new Date(newYears);
    const currentDate= new Date()

    // console.log(newyearsdate-currentDate);

    const totalSeconds=(newyearsdate-currentDate)/1000;
    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600) %24;
    const minutes=Math.floor(totalSeconds/60) %60;
    const seconds=Math.floor(totalSeconds)%60;

    console.log(days,hours,minutes,seconds);

   day.innerText=days;
   hour.innerText=formatTime(hours);
   min.innerText=formatTime(minutes);
   second.innerText=formatTime(seconds);

  function formatTime(time){
      return time<10 ?`0${time}` :time
  }




    // console.log(day)
}

countdown();

setInterval(countdown,1000)