// let play = document.getElementById("play");
// function playMusic(){
//     let audio= new Audio("sample.mp3");
//     audio.play()
// }
// play.addEventListener("click" , playMusic);

let play = document.getElementById("play");
let audio = new Audio("Drum.mp3");  
let isPlaying = false;  

function Music() {
    if (isPlaying) {
        audio.pause();  
    } else {
        audio.play();   
    }
    isPlaying = !isPlaying;  
}
play.addEventListener("click", Music);



let play2 = document.getElementById("play2");
let audio2 = new Audio("flute.mp3");  
let isPlaying2 = false;  

function Music2() {
    if (isPlaying2) {
        audio2.pause(); 
    } else {
        audio2.play();  
    }
    isPlaying2 = !isPlaying2;  
}
play2.addEventListener("click", Music2);

let play3 = document.getElementById("play3");
let audio3 = new Audio("violin.mp3");  
let isPlaying3 = false;  

function Music3() {
    if (isPlaying3) {
        audio3.pause();
        
    } else {
        audio3.play(); 
         
    }
    isPlaying3 = !isPlaying3;  
}
play3.addEventListener("click", Music3);

let play4 = document.getElementById("play4");
let audio4 = new Audio("piano.mp3");  
let isPlaying4 = false;  

function Music4() {
    if (isPlaying4) {
        audio4.pause();
    } else {
        audio4.play();   
    }
    isPlaying4 = !isPlaying4;  
}
play4.addEventListener("click", Music4);

let play5 = document.getElementById("play5");
let audio5 = new Audio("Matta.mp3");  
let isPlaying5 = false;  

function Music5() {
    if (isPlaying5) {
        audio5.pause();  
    } else {
        audio5.play();  
    }
    isPlaying5 = !isPlaying5;  
}
play5.addEventListener("click", Music5);







