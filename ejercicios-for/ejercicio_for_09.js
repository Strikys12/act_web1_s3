//### ➰ Ejercicio For 9: Secuencia Matemática
//**📄 Archivo**: `ejercicio_for_09.js`

//Utiliza un ciclo `for` para generar la siguiente secuencia: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. Debe mostrar cada término y la suma total de la secuencia.


let numero = 1;
let resultado = 0;
let cadena = "";
suma = 0;
for (let i = 0; i < 10; i++) {
    resultado = numero * 2;
    numero = resultado;
    suma += resultado;
    if (i < 9) {
        cadena += `${resultado}, ` 

    }

}
cadena += `${resultado}`
console.log(cadena)
console.log(`Total Suma: ${suma}`)