/**
 * Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
 */

const firstDiv = document.querySelector('div:nth-child(1)');
const p = document.createElement('p');
p.textContent = 'Voy en medio!';

firstDiv.after(p);
