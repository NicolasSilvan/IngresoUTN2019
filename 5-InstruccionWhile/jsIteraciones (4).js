function Mostrar() {

	var numero = prompt("ingrese un número entre 0 y 10.");

	while (numero < 0 || numero > 10) {

		numero = parseInt(prompt("Error. Reingrese un numero entre 0 y 10"));
	}

	alert(numero);
	document.getElementById("Numero").value = numero;

}