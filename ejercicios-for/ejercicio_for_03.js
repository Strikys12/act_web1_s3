//Dado un array de 20 números aleatorios, 
// usa un ciclo `for` para encontrar: el número mayor, 
// el menor, la suma total, el promedio, 
// y cuántos números son pares e impares.



let array = []
let suma = 0;
let mayor = 0;
let pares = 0;
let impares = 0;


for(let i = 0; i < 20; i++){
    array.push(Math.floor(Math.random()*100))
    suma += array[i];
    if(array[i] % 2 == 0){
        pares++;
    }else{
        impares++;
    }
    
}

let menor = array[0];

console.log(array)

for(let i = 0; i < array.length;i++){
    if(mayor < array[i]){
        mayor = array[i];
    }else if(menor >= array[i]){
        menor = array[i];
    }
}


console.log("")
console.log(`Suma total del array: ${suma}`)
console.log(`Numero mayor del array: ${mayor}`)
console.log(`Numero mayor del array: ${menor}`)
console.log(`Cantidad de numeros pares: ${pares}`)
console.log(`Cantidad de numeros impares: ${impares}`)
