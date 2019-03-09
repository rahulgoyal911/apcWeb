
var input=document.getElementById('inp');
var par=document.getElementById('p1');
input.addEventListener("mouseover",function(event)
{
  inp.setAttribute("style","background-color: black;color:white");
  console.log(1);
});
input.addEventListener("mouseout",function(event){
  inp.setAttribute("style","background-color: tomato;color:black");
  console.log(2);
})
var input2=document.getElementById('inp2');
input2.addEventListener("mouseover",function(event)
{
  inp2.setAttribute("style","background-color: black;color:white");
  console.log(event.x);
  console.log(event.y);
  par.innerHTML=event.x;
  par.innerHTML+=" ";
  par.innerHTML+=event.x;
  par.innerHTML+=" ";
  par.innerHTML+=event.pageX;
  par.innerHTML+=" ";
  par.innerHTML+=event.pageY;
  par.innerHTML+=" ";

});
