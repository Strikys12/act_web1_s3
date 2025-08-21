// Ejercicio For 5: Invertir Cadenas de Texto
// Crea un programa que use un ciclo for para invertir una cadena de texto carácter por carácter. 
// Muestra tanto la cadena original como la invertida.

let cadena = "Cadena";
let cantidadNumeros = cadena.length - 1;
let mostrar = "";


for(let i = cantidadNumeros; i >= 0; i-- ){
    mostrar += cadena[i];
    
}

console.log(mostrar);