/**
 * Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
 * intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
 * resultante.
 */

const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, positionA, positionB) {
    [array[positionA], array[positionB]] = [array[positionB], array[positionA]];

    return array;
}

console.log(swap(array, 1, 2));