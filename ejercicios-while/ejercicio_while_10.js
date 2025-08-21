//Desarrolla un programa que use un ciclo `while` 
// para procesar calificaciones de estudiantes. 
// Debe continuar pidiendo calificaciones hasta que se ingrese -1, luego calcular y mostrar el promedio, la calificación más alta y más baja.

let calificaciones = []
let cancelar = -1;
let notaActual;
let suma = 0;
let i = 0;
let notaAlta = 0;
let notaBaja = 0;

while (notaActual !== cancelar) {

    notaActual = (parseInt(prompt(`Ingrese la calificación ${i + 1} o ingrese -1 para no ingresar más calificaciones`)))
    if (notaActual == cancelar) {
        break;
    }
    calificaciones[i] = notaActual;
    suma += calificaciones[i];
    i++;
    

    if(notaAlta < notaActual){
        notaAlta = notaActual;
        
    }   
    


}


notaBaja = calificaciones[0];

  i = 0;
while( i < calificaciones.length){
    if(notaBaja > calificaciones[i]){
        notaBaja = calificaciones[i];
    }
    i++;

}

alert(`Promedio: ${suma / calificaciones.length}
Nota Alta: ${notaAlta}
Nota Baja: ${notaBaja}`)

