$(document).ready(function() {

  	$("#btn_calcular_edad").click(function() {

  		var texto = $("#name").val();
  		var estilo = $("#fecha_nacimiento").val();

	  	var obj = new mostrarResultados("mensaje privado", "mensaje público");
		obj.metodoPublico();

	});

});


function mostrarResultados(msjPrivado, msjPublico) {
 
    var propiedadPrivada = msjPrivado;
    var propiedadPublica = msjPublico;

    var metodoPrivado = function () {
        alert(propiedadPrivada);
        alert(propiedadPublica);
    };

    this.metodoPublico = function () {
        metodoPrivado();
    };
}


