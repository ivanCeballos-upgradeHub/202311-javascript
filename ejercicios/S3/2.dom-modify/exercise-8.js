/**
 * Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
 */

// Segundo div v1
/*
const p = document.createElement('p');
p.textContent = 'Voy en medio!';

const divs = document.querySelectorAll('div');
const div = divs[1];

document.body.insertBefore(p, div);
*/

// Segundo div v2
/*
const p = document.createElement('p');
p.textContent = 'Voy en medio!';

const div = document.querySelector('div:nth-child(2)');

document.body.insertBefore(p, div);
*/

// Segundo div v3
/*const p = document.createElement('p');
p.textContent = 'Voy en medio!';

const div = document.querySelector('div:nth-child(2)');

div.before(p);
*/

// Primero
/*
const p = document.createElement('p');
p.textContent = 'Voy en medio!';

const div = document.querySelector('div');

div.after(p);
*/
