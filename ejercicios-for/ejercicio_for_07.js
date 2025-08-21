
//Usa ciclos `for` anidados para crear una matriz 
// 5x5 donde cada elemento sea la suma 
// de sus índices (fila + columna). Muestra la matriz formateada.



let matrix = [];
let sumasFilas = [];
let sumasColumnas = [0,0,0,0,0]
let contador = 1;




for(let i = 0; i < 5; i++){
    let sumasFilaActual = 0;
    let fila = [];
   
   
    
    for(let j = 0; j < 5; j++){
        
        fila.push = contador;
        sumasFilaActual += contador;
        sumasColumnas[j] += contador;
        contador++
    }
    matrix.push(fila);
    sumasFilas.push(sumasFilaActual);
     
}

console.log(matrix)
console.log(sumasColumnas);







