const jellytimer=document.getElementById("jellytimer")
const jellyplay=document.getElementById("jellyplay")
const jellystop=document.getElementById("jellystop")
const jellyreset=document.getElementById("jellyreset")

let time=0; //переменная в которой хранится время
let jellyId; //переменная для хранения id таймера

jellyplay.addEventListener("click",function(){
    if(!jellyId){
        jellyId = setInterval(()=>{
        jellytimer.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)}, 0, 237)`;
        jellytimer.style.color="rgb(255, 255, 255)";

            time++;
            jellytimer.textContent=time;
    },1000);
    }
    }
)
jellystop.addEventListener("click",function(){
    clearInterval(jellyId);
        jellyId=null;
    
})
jellyreset.addEventListener("click",function(){
    clearInterval(jellyId);
    jellytimer.style.backgroundColor=`#fff`;
    jellytimer.style.color="black";

    jellyId=null;
    time=0;
    jellytimer.textContent=time;

})
