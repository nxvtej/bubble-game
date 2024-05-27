var timer = 20;
var score =0;
var hitrn=0;

// event bnubbling
// jispe clickroge vo element par event raise hoga, aur event
// listener na milne par even element pareten literner 


function increaseScrore (){
    score +=10;
    document.querySelector("#scoreVal").textContent = score;
}
function getNewHit() {
   hitrn = Math.floor(Math.random()*10);
    document.querySelector("#HitVal").textContent = hitrn;
}

function makeBubble() {
var clutter = "";
 
for(var i =1 ;i <= 102;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
var timerInterval = setInterval(function() {
    if(timer>0) {
    timer--;
document.querySelector("#timerValue").textContent = timer;
} else {

    clearInterval(timerInterval);
    document.querySelector("#pbtm").innerHTML = `<div>
    <h1>Game Over<h1>
    <div> 
    <h1>Your Score is ${score}</h1>
    </div>
    </div>`;
}

},1000);
}

document.querySelector("#pbtm")
.addEventListener("click", function(details) {
    var clickedNumber = Number(details.target.textContent);  //to have nubmer instead of string
                                                    // if hjave string then cant add
    if(hitrn == clickedNumber){
        increaseScrore();
        makeBubble();
        getNewHit();
    } else {

    }
})

runTimer();
// increaseScrore();
