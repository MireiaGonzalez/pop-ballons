// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let ballonsColor = ["red", "blue", "pink", "purple", "gray", "green", "yellow"];
const balloon1 = document.querySelector("#balloon1");
const balloon2 = document.querySelector("#balloon2");
const balloon3 = document.querySelector("#balloon3");
const balloon4 = document.querySelector("#balloon4");
const balloon5 = document.querySelector("#balloon5");
const balloon6 = document.querySelector("#balloon6");
const balloon7 = document.querySelector("#balloon7");
const balloon8 = document.querySelector("#balloon8");
const balloon9 = document.querySelector("#balloon9");
const balloon10 = document.querySelector("#balloon10");
const balloon11 = document.querySelector("#balloon11");
const balloon12 = document.querySelector("#balloon12");
const title = document.querySelector("#title");
let balloonCount = document.querySelector("#balloon-count");
let count = 12;

const popBalloons = (ballon) => {
    if(count>2){
        ballon.classList.add("popped");
        count--;
        balloonCount.innerHTML = count;
    }else if(count===2){
        title.innerHTML = `Pop the <span id="balloon-count">1</span> balloon left!`
        ballon.classList.add("popped");
        count--;
    }else if(count === 1){
        ballon.classList.add("popped");
        title.innerHTML = `No ballons left! You win!`
    }
    
}



const render = () => {
    balloonCount.innerHTML = count;

    balloon1.classList.add(ballonsColor[(Math.floor(Math.random()*7)+1)-1]);
    balloon2.classList.add(ballonsColor[(Math.floor(Math.random()*7)+1)-1]);
    balloon3.classList.add(ballonsColor[(Math.floor(Math.random()*7)+1)-1]);
    balloon4.classList.add(ballonsColor[(Math.floor(Math.random()*7)+1)-1]);
    balloon5.classList.add(ballonsColor[(Math.floor(Math.random()*7)+1)-1]);
    balloon6.classList.add(ballonsColor[(Math.floor(Math.random()*7)+1)-1]);
    balloon7.classList.add(ballonsColor[(Math.floor(Math.random()*7)+1)-1]);
    balloon8.classList.add(ballonsColor[(Math.floor(Math.random()*7)+1)-1]);
    balloon9.classList.add(ballonsColor[(Math.floor(Math.random()*7)+1)-1]);
    balloon10.classList.add(ballonsColor[(Math.floor(Math.random()*7)+1)-1]);
    balloon11.classList.add(ballonsColor[(Math.floor(Math.random()*7)+1)-1]);
    balloon12.classList.add(ballonsColor[(Math.floor(Math.random()*7)+1)-1]);
}




// this makes the "render" function trigger when the website starts existing
window.onload = render();