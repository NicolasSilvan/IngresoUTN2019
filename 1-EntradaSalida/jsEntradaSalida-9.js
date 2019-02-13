/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo = parseFloat(document.getElementById("sueldo").value);
    var nuevosueldo = parseFloat(document.getElementById("resultado").value);
    var aumento;

    aumento = sueldo * 10 / 100;
    nuevosueldo = sueldo + aumento;

    alert(aumento);
    document.getElementById("resultado").value = nuevosueldo;
}
