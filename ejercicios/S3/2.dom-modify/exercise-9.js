/**
 * Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .
 */

const divs = document.querySelectorAll('.fn-insert-here');

for (let div of divs) {
    const p = document.createElement('p');
    p.textContent = 'Voy dentro!';

    div.append(p);
}
