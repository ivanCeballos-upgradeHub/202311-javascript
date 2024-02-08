/**
 * Inserta dinamicamente en un html un div que contenga una p con javascript.
 */

const div = document.createElement('div');
div.append(document.createElement('p'));

document.body.append(div);