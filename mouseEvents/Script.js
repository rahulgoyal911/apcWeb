
var input=document.getElementById('inp');
var body=document.getElementById('bd');
var par=document.getElementById('p1');
input.addEventListener("mousemove   ",function(event)
{
  inp.setAttribute("style","background-color: black;color:white");
  console.log(1);
});
body.addEventListener("mousemove",function(event)
{
  body.setAttribute("style","color:white");
  inp2.setAttribute("style",`top: ${event.pageY}; left: ${event.pageX}`);
});
input.addEventListener("mouseout",function(event){
  inp.setAttribute("style","background-color: tomato;color:black");
  console.log(2);
})
var input2=document.getElementById('inp2');
input2.addEventListener("mouseover",function(event)
{
//   inp2.setAttribute("style","background-color: black;color:white");
//   console.log(event.x);
//   console.log(event.y);
//   par.innerHTML="event x = ";
//   par.innerHTML+=event.x;
//   par.innerHTML+="\n";
//   par.innerHTML+="event Y = ";
//   par.innerHTML+=event.y;
//   par.innerHTML+="\n";
//   par.innerHTML+="coordinate X = ";
//   par.innerHTML+=event.pageX;
//   par.innerHTML+="\n";
//   par.innerHTML+="coordinate Y = ";
//   par.innerHTML+=event.pageY;
  

});
