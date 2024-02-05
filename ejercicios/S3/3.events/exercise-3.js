/**
 * Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.
 */

document.querySelector('input').addEventListener('input', (event) => {
    console.log(event.target.value);
});