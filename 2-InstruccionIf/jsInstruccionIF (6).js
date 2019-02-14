function Mostrar()
{
//tomo la edad  

var edad = parseInt(document.getElementById("edad").value);

if (edad < 13) {
    alert("Es un niño")
    
} else if (edad <= 17) {
    alert("Es un adolescente")
    
} else if (edad >= 18) {
    alert("Es un adulto")
    
}


}//FIN DE LA FUNCIÓN
