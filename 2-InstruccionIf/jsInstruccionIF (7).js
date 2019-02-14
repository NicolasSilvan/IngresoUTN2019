function Mostrar()
{
//tomo la edad  

	var edad = parseInt(document.getElementById("edad").value);
    var estadoCivil = document.getElementById("estadoCivil").value;

    if (edad < 18 && estadoCivil == "Soltero") {

        
    } else if (edad < 18 && estadoCivil == "Casado") {
        alert("Es muy pequeño para NO ser soltero")


    } else if (edad < 18 && estadoCivil == "Divorciado") {
        alert("Es muy pequeño para NO ser soltero")

    }    

}//FIN DE LA FUNCIÓN