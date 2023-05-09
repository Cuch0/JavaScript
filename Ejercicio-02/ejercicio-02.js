let vec_Uno = [false, "rojo", 2, 3, "amarillo", true]
let vec_Dos = ["celeste", true, "rojo", 3, false]

conciden(vec_Uno, vec_Dos)

function conciden (vector1 = [], vector2 = []) {
    let resultado = []

    console.log("Vector 1:", vector1);
    console.log("Vector 2:", vector2);
    
    for(i = 0 ; i < vector1.length ; i++){
        for(j = 0 ; j < vector2.length ; j++){
            if(vector1[i] == vector2[j]){
                resultado.push(vector1[i])
            }
        }
    }

    console.log("Resultado:", resultado);

}
