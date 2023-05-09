let cadena
let numero

numero = prompt("Ingrese un número:")

for(i = 0 ; i < numero ; i++){
    cadena = ""
    for(j = 0 ; j <= i ; j++){
            cadena += j + 1
    }    
    console.log(cadena);
}