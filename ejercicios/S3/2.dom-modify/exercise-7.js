/**
 * Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me
 */

const a = document.querySelectorAll('.fn-remove-me');

for (let ab of a) {
    ab.remove();
}