var btn=document.getElementById('btn');
var input = document.getElementById("inp");
var data = document.getElementById("data");
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
  xhr.open("GET", "https://api.github.com/users/"+val);
  xhr.onload = function(){
    console.log(xhr.responseText);
    var d = xhr.responseText;  
    d = JSON.parse(xhr.responseText);
    var firstPost = d['login'];
    data.innerHTML = "username: " + firstPost;
    data.innerHTML += "<br>";
    firstPost = d['name'];
    data.innerHTML += "name: " +  firstPost;
    data.innerHTML += "<br>";
    firstPost = d['bio'];
    data.innerHTML += "bio: " + firstPost;
    data.innerHTML += "<br>";
};
  xhr.send();

}