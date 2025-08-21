//Utiliza un ciclo `while` para calcular la suma de todos los números pares entre 1 y 50.
//  Muestra el resultado final y cuántos números pares se sumaron.


let i = 1;
let suma = 0;
let cantidadPares = 0;

while(i < 50){
    i++;
    if(i % 2 == 0){
        suma += i;
        cantidadPares++;
        
    }
}


console.log(`Resultado Suma: ${suma}`);
console.log(`Cantidad de numeros pares sumados: ${cantidadPares}`);