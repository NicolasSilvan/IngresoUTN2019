function Mostrar() {

    var sexo = prompt("ingrese f ó m .").toLowerCase();

    while (sexo != "f" && sexo != "m") {
        
        sexo = prompt("Error. Reingrese f o m.");

    }

    document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN