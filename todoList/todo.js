var btna = document.getElementById("add_button");
var n1 = document.getElementById("item");
var parent = document.getElementById("parent");   
btna.onclick = function()
{
    console.log(event);
    var code = event.keyCode;
                if (n1.value=="")
            alert("Enter value");
            else
            {
                
            var node = document.createElement("li");
            var node1 = document.createElement("button"); 
            node.setAttribute("style","background:green;color:black;font-weight:bold;border-radius: 20px;width:100px;padding-left: 16px;width: 200px;height: 23px;margin:10px;"); 
            node1.setAttribute("style","margin-left: 30px;")
            node.innerHTML=n1.value;
            
            var bn = document.getElementById("li"); 
            node.appendChild(node1);
            node1.innerHTML="Delete";
            parent.appendChild(node);
            node1.onclick = function(){
                parent.removeChild(node);
            }
            n1.value="";
            
            bn.appendChild(node1);
            
            n1.value="";
    }
    }
    
n1.onkeyup = function(event) {
    console.log(event);
    var code = event.keyCode;
    if(code==13){
                if (n1.value=="")
            alert("Enter value");
            else
            {
                
            var node = document.createElement("li");
            var node1 = document.createElement("button"); 
            node.setAttribute("style","background:green;color:black;font-weight:bold;border-radius: 20px;width:100px;padding-left: 16px;width: 200px;height: 23px;margin:10px;"); 
            node1.setAttribute("style","margin-left: 30px;")
            node.innerHTML=n1.value;
            
            var bn = document.getElementById("li"); 
            node.appendChild(node1);
            node1.innerHTML="Delete";
            parent.appendChild(node);
            node1.onclick = function(){
                parent.removeChild(node);
            }
            n1.value="";
            
            bn.appendChild(node1);
            
            n1.value="";
    }
    }
}

