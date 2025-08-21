//Desarrolla una función que use un ciclo `while` para calcular el factorial de un número dado. Debe mostrar paso a paso cómo se va calculando el factorial.


function factorial(n){
    let resultado = 1
    let cadena = "";
    let i = n;
    while(i > 1){
        resultado *= i;
        cadena += `${i} X `
        i--;
        
    }

    cadena += `1 = ${resultado}`
    return cadena;
    

}

console.log(factorial(2))
