function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var num = Math.floor(Math.random() * 10 + 1);

    alert(num);

    if (num > 4 && num < 9) {
		alert("APROBO")
		
	} else if (num >= 9 && num <= 10) {
		alert("EXCELENTE")
		
	} else if (num <= 4) {
		alert("Vamos, la proxima se puede")

	}

}//FIN DE LA FUNCIÓN