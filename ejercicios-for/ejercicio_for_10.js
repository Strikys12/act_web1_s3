//### ➰ Ejercicio For 10: Validador de Palíndromo
//*📄 Archivo**: `ejercicio_for_10.js`

//Implementa un programa que use un ciclo `for` para verificar si una palabra o frase es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda). Ignora espacios y mayúsculas.

//---


let palindromo = "a mi me mima"
let fraseLimpia = "";
let fraseInvertida = "";

for(let i = 0; i < palindromo.length; i++){
    let letra = palindromo[i].toLowerCase();
    if(letra !== " "){
        fraseLimpia += letra;
        
    }
}

for(let i = fraseLimpia.length - 1; i >= 0; i--){
    fraseInvertida += fraseLimpia[i];
}


if(fraseLimpia === fraseInvertida){
    console.log(`La frase ${palindromo}, si es un palíndromo`)
}else{
    console.log(`La frase ${palindromo}, no es un palindromo`)
}