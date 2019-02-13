function Mostrar()
{
//tomo la edad  

var años = parseInt(document.getElementById("edad").value);


if (años < 1 || años > 18) {
    alert("Esta persona no es adolescente");

}

}//FIN DE LA FUNCIÓN