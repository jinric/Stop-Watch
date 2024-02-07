// Stop Watch

// Time Hours, Minutes, Seconds
var display = document.getElementById("timer");
let hours;
let minutes;
let seconds=0;

let Start_T = 0;
let Elapse_T = 0;
let Paused_T = true;

//Interval

let Interval;
 document.getElementById("start").addEventListener('click',function str(){
    
    if(Paused_T){
        
        Paused_T = false;
        Start_T = Date.now() - Elapse_T;
        Interval = setInterval(update_T, 1000);
        
    }
});

document.getElementById("pause").addEventListener('click', function stop(){
    if(!Paused_T){
    Paused_T = true;
    Elapse_T = Date.now() - Start_T;
    clearInterval(Interval);
    }
});

 document.getElementById("reset").addEventListener('click', function(){
 Paused_T = true;
 clearInterval(Interval);
 hours;
 minutes;
 seconds=0;
 Start_T = 0;
 Elapse_T = 0;
display.innerText = ("00:00:00");
});

// Update Time

function update_T(){
    
     Elapse_T = Date.now() - Start_T;
  
     hours = Math.floor((Elapse_T / (1000 * 60 * 60)) % 60);
     minutes = Math.floor((Elapse_T / (1000 * 60)) % 60);
     
     seconds = Math.floor((Elapse_T / 1000 ) % 60);
     
  let hrs = hours < 10 ? "0" + hours : hours;
  
   let mins = minutes < 10 ? "0" + minutes : minutes;
   
    let secs = seconds < 10 ? "0" + seconds : seconds;
    
                 
       display.innerHTML = (hrs + ":" + mins + ":" + secs);
     
}
