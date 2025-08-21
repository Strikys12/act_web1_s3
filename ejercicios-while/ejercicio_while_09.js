//Crea un juego que use un ciclo `while` donde el usuario 
// debe adivinar un número entre 1 y 50. Proporciona pistas
//  ("muy alto", "muy bajo", "cerca") y limita a 7 intentos máximo.

let numeroSecreto = 43;
let numeroAdivina;
let maxIntentos = 7;
let contador = 0;



while (numeroAdivina != numeroSecreto && contador < maxIntentos) {
    contador++
    numeroAdivina = parseInt(prompt("Adivina un número entre el 1 el 50"))

    if (numeroAdivina > 0 && numeroAdivina < 10) {
        alert("Estás muy abajo")



    } if (numeroAdivina > 10 && numeroAdivina < 20) {
        alert("Todavía estás un poco abajo.")


    }

    if (numeroAdivina > 20 && numeroAdivina < 30) {
        alert("Un poco más arriba, ya casi!")
    }
    if (numeroAdivina > 30 && numeroAdivina < 35) {
        alert("Estás, más cerca, solamente es un poco más arriba!")

    }
    if (numeroAdivina > 35 && numeroAdivina < 43) {
        alert("Ya casi!!, es un poco más arriba, solo un poco")

    }

    if (numeroAdivina > 43 && numeroAdivina < 50 && numeroAdivina != numeroSecreto) {
        alert("Es un poco más abajo, ya casi llegas!!")


    }

}

if (numeroAdivina === numeroSecreto) {
    alert(`Felicitaciones, adivinaste el numero en el intento ${contador}`)
} else {
    alert("Alcanzaste el máximo de intentos.")
}