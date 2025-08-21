//Implementa un programa que use un ciclo `while` 
// para contar cuántos dígitos tiene 
// un número entero positivo. Por ejemplo,123 45 tiene 5 dígitos.


let numero = 123456541544;
let resultado = numero;
let contador = 0;


while(resultado > 0){
        resultado = Math.floor(resultado/10)
        contador++; 
 
}

console.log(`El número entero ${numero} tiene ${contador} digitos`)