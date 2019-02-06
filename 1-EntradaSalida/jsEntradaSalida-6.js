/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var uno
    var dos
    var resultado
    document.getElementById("numeroUno").value = uno;
    document.getElementById("numeroDos").value = dos;
    uno = parseInt(uno);
    dos = parseInt(dos);
    resultado = dos + uno;
    alert(resultado);
}

