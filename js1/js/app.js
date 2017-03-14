
function alertas(){
	alert("Alerta de código");
}

var anonimo = function alertas(){
	alert("Alerta de código");
}

window.onload = function(){
	document.getElementById("discreto").onclick = anonimo;
}

/*(function () {
  	window.onload = function(){
		document.getElementById("discreto").onclick = alertas;
	}
}());*/