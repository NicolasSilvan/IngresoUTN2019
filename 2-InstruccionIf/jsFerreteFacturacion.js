/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var uno = parseInt(document.getElementById("PrecioUno").value);
    var dos = parseInt(document.getElementById("PrecioDos").value);
    var tres = parseInt(document.getElementById("PrecioTres").value);
    var resultado;
    resultado = uno + dos + tres;
    alert("El resultado de la suma es $ " + resultado);
}
function Promedio () 
{
	var uno = parseFloat(document.getElementById("PrecioUno").value);
    var dos = parseFloat(document.getElementById("PrecioDos").value);
    var tres = parseFloat(document.getElementById("PrecioTres").value);
    var promedio;
    promedio = (uno + dos + tres) / 3;
    alert("El promedio es $ " + promedio);
}
function PrecioFinal () 
{
	var uno = parseFloat(document.getElementById("PrecioUno").value);
    var dos = parseFloat(document.getElementById("PrecioDos").value);
    var tres = parseFloat(document.getElementById("PrecioTres").value);
    var preciofinal;
    var iva;
    preciofinal = uno + dos + tres;
    iva = preciofinal * 21 / 100;
    alert("El precio final es $ " + iva);
}