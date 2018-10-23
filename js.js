function openNav() {
    document.getElementById("slider-menu").style.width = "15%";
}

function closeNav() {
    document.getElementById("slider-menu").style.width = "0";
}

window.addEventListener ('mouseup',function(event){
var menu = document.getElementById("slider-menu");
if(event.target != menu) {
menu.style.width ="0";
}
});