function Mostrar()
{
//tomo la edad  

	var edad = parseInt(document.getElementById("edad").value);
    var estadoCivil = document.getElementById("estadoCivil").value;
        
    if (estadoCivil == "Soltero" && edad >= 18 ) {
        alert("Es soltero y no es menor")
        
    }



}//FIN DE LA FUNCIÓN