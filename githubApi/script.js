var btn=document.getElementById('btn');
var input = document.getElementById("inp");
btn.addEventListener("click",function(){
  var value = input.value;
  if(!value)
	{
	   alert("No Value Entered.");
		 return;
	}
  getUser(value);
});
function getUser(val){
  console.log(val);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/rahulgoyal911");
  xhr.onload = function(){
    console.log(xhr.responseText);
  };
  xhr.send();

}