function Mostrar() {

	var numero = prompt("ingrese un número entre 0 y 10.");
    numero = parseInt(document.getElementById("Numero").value);

	while (numero >= 0 || numero <= 10) {
		prompt("Error. Reingrese un numero entre 0 y 10");
	}

	alert(numero);
	document.getElementById("Numero").value = numero;

}