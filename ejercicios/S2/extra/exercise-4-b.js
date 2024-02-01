/**
 * Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
 * `removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
 * llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
 * javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.
 * 
 * De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
 */

const notFoundElement = -1;

function findArrayIndex(array, text) {
    for (let i in array) {
        if (array[i] === text) {
            return i;
        }
    }

    return notFoundElement;
}

function removeItem(array, text) {
    const position = findArrayIndex(array, text);

    if (notFoundElement !== position) {
        array.splice(position, 1);
    }

    return array;
}
