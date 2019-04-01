var timer = document.getElementById("timer");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var userInput = document.getElementById("userInput");
var time;
var flag=0;
var timegap;
var breakt;
userInput.addEventListener("keyup",function(event){
  if(event.keyCode==13) {
    time = userInput.value;
    timer.setAttribute("value",time);
    console.log(time);
  }
});
timer.addEventListener("dblclick",function(event) {
  clearInterval(timegap);
  timer.setAttribute("value",0);
});
start.addEventListener("click",function(event) {
  timegap = setInterval(function() {
    time--;
    timer.setAttribute("value",time);
    if(time==-1) {
      clearInterval(timegap);
      alert("Time is Over");
      timer.setAttribute("value",0);
      flag=0;
    }
  },1000);
});

pause.addEventListener("click",function(event){
  breakt = time;
  clearInterval(timegap);
});