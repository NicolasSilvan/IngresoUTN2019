function Mostrar()
{
//tomo la edad  

var edad = parseInt(document.getElementById("edad").value);

if (edad >= 18) {
    alert("Es mayor de edad")
    
}
if (edad < 13) {
    alert("Es un niño")
    
}
if (edad >= 13 && edad <= 17) {
    alert("Es un adolescente")
    
}


}//FIN DE LA FUNCIÓN
