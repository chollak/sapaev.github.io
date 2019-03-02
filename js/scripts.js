var toggle = document.getElementById("menuTo");
var menu = document.getElementById("menu");
var bool=true;
toggle.addEventListener("click",function(){
	if(bool==false){
		menu.style.display="none";
		setTimeout(function(){bool=true;},10);
	}
	if(bool==true){
		menu.style.display="flex";
		setTimeout(function(){bool=false;},10);
	}
});