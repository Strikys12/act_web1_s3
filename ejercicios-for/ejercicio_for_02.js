//Implementa un programa que use ciclos `for` anidados para crear el siguiente patrón:
//*
//**
//***
//****
//*****
//****
//***
//**

let asterisco = "";

for(let i = 1;  i <= 5; i++){
    asterisco += "*";
    console.log(asterisco);
}

for (let g = 4; g >= 1; g++){
    asterisco = asterisco.slice(0,-1);
    console.log(asterisco) 
    
}
