//Utiliza un ciclo `while` para generar los primeros 15 
// números de la secuencia de Fibonacci. Muestra cada número de la secuencia.

let a = 0;
let b = 1;
let c = 0;
let contador = 1;
console.log(a);
console.log(b);

while(contador < 14){
    contador++;
    c = b + a;
    a = b;
    b = c
    console.log(c);
    
    
}