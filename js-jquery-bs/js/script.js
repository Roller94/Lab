$(document).ready(function() {

  	$("#btn_calcular_edad").click(function() {

  		var texto = $("#name").val() + " " + $("#fecha_nacimiento").val();
  		var estilo = "classRed";

	  	var obj = new mostrarResultados(texto, estilo);
		obj.presentarse();

	});

});


function mostrarResultados(texto, estilo) {
 
    var propiedadPrivada = estilo;
    var propiedadPublica = texto;

    var calcularEdad = function () {
        alert(estilo);
        alert(texto);
    };

    this.presentarse = function () {
        calcularEdad();
    };
}


/*

link: http://www.variablenotfound.com/2011/12/funciones-constructoras-en-javascript.html

function Cliente(nombre, fecha, direccion) {
 
        //Propiedades privadas
        var edad;
 
        //Métodos privados
        var calcularEdad = function() {
            var actual = new Date().getYear();
            var nacimiento = fecha.getYear();
 
            if (actual <= nacimiento)
                edad = "Error: no se ha podido calcular";
            else
                edad = actual - nacimiento;
        };
 
        //Propiedades públicas
        this._nombre = nombre;
        this._fechaNacimiento = fecha;
        this._edad = edad;
        this._direccion = direccion;
 
        //Métodos públicos
        this._presentarse = function() {
            calcularEdad();
 
            document.write(
                "Hola, mi nombre es " + this._nombre + 
                " y tengo " + this._edad + " años."
            );
        };
    }

 */