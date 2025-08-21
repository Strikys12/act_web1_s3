//Dado un array de nombres, usa un ciclo `while`
//  para buscar un nombre específico. El programa 
// debe mostrar en qué posición se encontró el nombre o indicar si no existe.


let array = ["alba", "david", "victoria", "alejandro", "paul"];

let i = 0;
let nombreEspecifico = "victoria";
let encontrado = false;

while(i <= array.length){
    if(array[i] === nombreEspecifico){
        console.log(`El usuario se encuentra en la posición: ${i + 1}`);
        encontrado = true;
        break;
    }
    i++;          
}

if(!encontrado){
    console.log("El usuario no se encuentra");
}

