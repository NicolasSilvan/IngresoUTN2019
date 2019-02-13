/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var aumento;
    var uno = document.getElementById("sueldo").value;
    var aumento = parseInt(uno) * 1.10;
    total = uno + aumento;
    document.getElementById("resultado").value = total;
    alert(aumento);
}
