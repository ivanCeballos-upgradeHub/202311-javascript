/**
 * Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me
 */

const searchedNodes = document.querySelectorAll('.fn-remove-me');

for (let node of searchedNodes) {
    node.remove();
}