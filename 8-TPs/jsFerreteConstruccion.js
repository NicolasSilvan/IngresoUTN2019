/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);
    var perimetro;
    var alambre;
    perimetro = (largo + ancho) * 2;
    alambre = perimetro * 3;
    alert("Se necesitan comprar " + alambre + " metros de alambre");
}
function Circulo () 
{
	var radio = parseInt(document.getElementById("Radio").value);
    var alambre;
    var perimetro;
    perimetro = radio * 2 * Math.PI;
    alambre = perimetro * 3;
    alert("Se necesitan comprar " + alambre.toFixed(2) + " metros de alambre");

}
function Materiales () 
{
	var largo = parseFloat(document.getElementById("Largo").value);
    var ancho = parseFloat(document.getElementById("Ancho").value);
    var superficie;
    var cal;
    var cemento;
    superficie = largo * ancho;
    cal = superficie * 3;
    cemento = superficie * 2;

    alert("Para una superficie de " + superficie + " m2 se necesitan " + cal + " bolsas de cal y " + cemento + " bolsas de cemento");
    
}