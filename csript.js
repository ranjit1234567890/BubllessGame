function makeBubble(){
let clutter =" ";
for(let i=1; i<=120; i++){
    let rn=Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rn}</div>`;
}
document.getElementById("bottom").innerHTML = clutter;
}

let timer =60;

function runTumer(){
   let timerint= setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timer").textContent=timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#bottom").innerHTML=" ";

        }
    },1000)
}
let newHit=0;
function getNewHit(){
  newHit = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML=newHit;
}

let score =0;

function increaseScore(){
    score +=10;

    document.querySelector("#score").innerHTML=score;
}

document.querySelector("#bottom")
.addEventListener("click", function(data){
   let clickedNum = (Number(data.target.textContent));
  if (clickedNum === newHit){

    increaseScore()
    makeBubble();
    getNewHit();

  }
})


increaseScore()
getNewHit();
runTumer()
makeBubble();