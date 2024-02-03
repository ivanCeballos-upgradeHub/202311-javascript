/**
 * Dado el siguiente html usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
 */

const testMeElements = document.querySelectorAll('*[data-function="testMe"]');

for (let testMe of testMeElements) {
    console.log(testMe);
}