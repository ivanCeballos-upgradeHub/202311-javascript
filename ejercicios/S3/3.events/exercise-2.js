/**
 * Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.
 */

document.querySelector('input').addEventListener('focus', (event) => {
    console.log(event.target.value);
});