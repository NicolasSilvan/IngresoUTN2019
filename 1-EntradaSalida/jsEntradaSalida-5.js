/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
	var nombre;
    var edad;
    nombre = prompt("Ingrese el nombre");
    document.getElementById("elNombre").value = nombre;
    edad = prompt("Ingrese la edad");
    document.getElementById("laEdad").value = edad;
    alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

