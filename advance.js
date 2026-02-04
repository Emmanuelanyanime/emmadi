var hourH=document.getElementById("hour");
var minutesM=document.getElementById("minutes");
var secondH=document.getElementById("seconds");
var AmPmE=document.getElementById("AmPm");


function updateClock(){
   var h=new Date().getHours();
   var m=new Date().getMinutes();
   var s=new Date().getSeconds();
   var ampm="Am";

   if(h>12){
    h=h-12
    ampm="PM"
   }
 if (h === 0) h = 12;
   
   h=h<10 ? "0" + h:h;
    m=m<10 ? "0" + m:m;
     s=s<10 ? "0" + s:s;

   hourH.innerText=h;
   minutesM.innerText=m;
   secondH.innerText=s;
   AmPmE.innerText=ampm;
   

   setTimeout(()=>{
updateClock()
   },1000)
}

updateClock()



