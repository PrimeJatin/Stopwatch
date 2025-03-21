// Html Elements Selection

let timer = document.querySelector("#timer p") ;
let start = document.querySelector("#start") ;
let reset = document.querySelector("#reset") ;
let stop = document.querySelector("#stop") ;

// Default Timing Variables

let min = 0 , sec = 0 , mSec = 0 ;
let watch = null ;

// Start Event

start.addEventListener("click" , function() {

    if(watch != null){
        clearInterval(watch) ;
    } ;

    setTimeout(function(){
        watch = setInterval(stopWatch , 10);

    } , 0) ;

}) ;


// Main Function

function stopWatch(){



    if(mSec < 100){
        mSec++ ;
    }
    if(mSec == 100){
        mSec = 0;
        sec++;
    }
    if(sec == 60){
        sec = 0;
        min++ ;
    }

let newmSec = mSec<10? `0${mSec}`: mSec  ;
let newSec = sec<10? `0${sec}`: sec  ;
let newMin = min<10? `0${min}`: min  ;

timer.innerHTML = `${newMin} : ${newSec} : ${newmSec}` ;

} ;

// Reset Event

reset.addEventListener("click" , function() {

    min = 0 ;
    sec = 0 ;
    mSec = 0;

    clearInterval(watch) 
    timer.innerHTML = `00 : 00 : 00` ;

}) ;

// Stop Event

stop.addEventListener("click" , function () {

    clearInterval(watch) ;

}) ;