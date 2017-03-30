$(document).ready(function() {    

  	$("#btn_calcular_edad").click(function() {
        var obj = new usuario($("#name").val(), $("#fecha_nacimiento").val());
        obj.presentarse();
	});

    $("#btn_id_selector").click(function() {
        mostrarResultados($("#thing1").text(), "blue"); 
    });

    $("#btn_class_selector").click(function() {
        mostrarResultados($(".greetings .main-greeting").text(), "red"); 
    });

    $("#btn_tag_selector").click(function() {
        mostrarResultados($("a:nth-child(9)").text(), "green"); 
    });

    $("#btn_alter_selector").click(function() {
        var text = $("div:nth-child(21) > p:nth-child(3)").text() + " *** " + $("#thing1").text();
        $("div:nth-child(21) > p:nth-child(3)").text(text);

        mostrarResultados(text, "yellow"); 
    });

    $("#btn_child_descendant_selector").click(function() {

        var child = $("div:nth-child(25) p").text();
        var descendant = $("div:nth-child(25) > span").text();

        var text = "Child : " + child + "\nDescendant : " + descendant;

        mostrarResultados(text, "rosado"); 
    });

});

var mostrarResultados = function(texto, estilo) {    
    $("#mostrarResultado").val(texto); 
    $("#mostrarResultado").removeClass().addClass(estilo);    
}

function usuario(texto, fecha) {
 
    var calcularEdad = function () {
        var actual = new Date().getYear();
        var nacimiento = new Date(fecha).getYear();

        return (actual - nacimiento);
    };

    this.presentarse = function () {
        var frase = "Hola, mi nombre es " + texto + " y tengo " + calcularEdad() + " años."            
        mostrarResultados(frase, "black");   
    };

}

