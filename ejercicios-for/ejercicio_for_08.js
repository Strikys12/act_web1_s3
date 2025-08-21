//Desarrolla un programa que use un ciclo `for` para contar 
// cuántas vocales (a, e, i, o, u) hay en una frase dada. 
// Debe mostrar el conteo de cada vocal por separado.

let vocales = "aeiou"
let palabra = "XIomara"
let contador = 0;

for(let i = 0; i < palabra.length; i ++){
    let minusculas = palabra[i].toLocaleLowerCase();
    
    if(vocales.includes(minusculas)){
        console.log(minusculas);
        contador++;
    }
 
    }


console.log(`Total cantidad de vocales: ${contador}`)