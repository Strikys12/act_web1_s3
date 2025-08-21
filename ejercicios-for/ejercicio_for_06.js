// Ejercicio For 6: Calculadora de Potencias
// Implementa una función que use un ciclo for para calcular la potencia de un número sin usar Math.pow(). 
// Debe mostrar el proceso paso a paso.

function calcularPotencia(base, exponente){
    let operacion = 1;
    let cadena = "";
    
    for(let i = 0; i < exponente; i++){
        operacion *= base
        cadena += `${base} `
        if(i < exponente - 1){
            cadena += `X `
        }  
    }

    cadena += `= ${operacion}`;
    return cadena

    
}

console.log(calcularPotencia(5,5))