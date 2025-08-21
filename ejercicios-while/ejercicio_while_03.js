//Implementa un sistema que use un ciclo `while` para solicitar una 
// contraseña al usuario hasta que ingrese "admin123". Debe mostrar cuántos intentos fallidos hubo antes del acceso correcto.



let intentos = 0;
let contrasena;

while(contrasena !== "admin123"){
    contrasena  = prompt("Por favor ingrese la contrasena");
    if(contrasena !== "admin123"){
        alert("Ha ingresado incorrectamente la contrasena")
    intentos++;
    }
   
}

alert("Contraseña correcta.")
alert(`Cantidad de intentos fallidos: ${intentos}`);
