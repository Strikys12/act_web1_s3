//Usa un ciclo `for` anidado para crear las tablas de multiplicar del 1 al 10. Cada tabla debe mostrarse claramente separada y formateada.


for(let i = 1; i <= 10; i++){
   
    for(let g = 1; g <= 10; g++){
        let resultado = i * g;
        console.log(`${i} x ${g} = ${resultado}`);
    }   

    console.log("");
   
    
}