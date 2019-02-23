var button = document.getElementById("add_button");
var a = 1;
var array = [];
var input = document.getElementById("item");
var parent = document.getElementById("parent");
input.onkeyup = function(event) {
  var ele = document.createElement("tr");
  ele.setAttribute("id",a);
  var child1 = document.createElement("td");
  var child2 = document.createElement("td");
  var child3 = document.createElement("td");
  var child4 = document.createElement("td");
  if(event.keyCode==13) {
    if(input.value=="")
    alert("Write Something");
    else {
      array.push(input.value);
      ele.setAttribute("class","tr");
      var value = input.value;
      child1.innerHTML= a++;
      child2.innerHTML=value;
      var child3 = document.createElement("button");
      child3.setAttribute("id","delbutton");
      child3.onclick = function() {
        array.splice(event.target.parentNode.parentNode.id,1);
        console.log(array);
        parent.removeChild(ele);
        a--;
      }
      child3.innerHTML="X";
      var d = new Date().toString();
      child4.innerHTML=d;
      ele.append(child1);
      ele.append(child2);
      ele.append(child3);
      ele.appendChild(child4);
      parent.appendChild(ele);
      input.value="";
    
    }
  }
}

// var btna = document.getElementById("add_button");
// var n1 = document.getElementById("item");
// var parent = document.getElementById("parent"); 
// var array = [];  
// var num=0;
// btna.onclick = function()
// {
//     console.log(event);
//     var code = event.keyCode;
//                 if (n1.value=="")
//             alert("Enter value");
//                 else{
//                 var val = n1.value;
//                 array.push(val);
//                 num++;   
//                 var node = document.createElement("tr");
//                 var count = document.createElement("td");
//                 var data = document.createElement("td");
//                 var node1 = document.createElement("button"); 
    
//                 node.setAttribute("id",count);
//                 //node.setAttribute("style","background:green;color:black;font-weight:bold;border-radius: 20px;width:100px;padding-left: 16px;width: 200px;height: 23px;margin:10px;"); 
//                 count.innerHTML=num;
//                 data.innerHTML=val;
                
//                 parent.avar input = document.getElementById("item");

var tbody = document.getElementById("parent");ppendChild(node);
//                 node.appendChild(count);
//                 node.appendChild(data);
//                 node.appendChild(node1);
                
//                 node1.innerHTML="Delete";
//                 var bn = document.getElementById("li"); 
    
//                 node1.onclick = function(){
//                     console.log(array);
//                     array.splice(event.target.parentNode.parentNode.id,1);
                    
//                     //parent.removeChild(node);
//                     //num--;
                    
    
//                 }
//                 n1.value="";
              
//     }
//     }
    
// n1.onkeyup = function(event) {
//     console.log(event);
//     var code = event.keyCode;
//     if(code==13){
            
//     }
// }
