var ip = document.getElementById('inp')
var interval = setInterval(change_width,1000);
function change_width(){
    var width = ip.offsetWidth;
    ip.style.width=width+1+"px";
    console.log(width);
    if(width+1 ==105){
        clearInterval(interval);
    }
}
