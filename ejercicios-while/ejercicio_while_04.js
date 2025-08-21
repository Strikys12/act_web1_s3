//Crea un programa que use un ciclo `while` para generar números aleatorios entre 1 y 100 hasta que salga un número mayor a 95. Muestra cada número generado y al final indica cuántos números se generaron.


let numeroAleatorio = 0;
let contador = 0;

while(numeroAleatorio < 95){
    numeroAleatorio = Math.floor(Math.random()*100)
    console.log(numeroAleatorio);
    contador++;
}
console.log("");
console.log(`Cantidad de numeros generados: ${contador}`)