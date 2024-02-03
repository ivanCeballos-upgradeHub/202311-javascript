/**
 * Dado el siguiente html usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
 */

const pokemons = document.querySelectorAll('.pokemon');

for (let pokemon of pokemons) {
    console.log(pokemon);
}