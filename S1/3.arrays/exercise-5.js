//Elimina el último elemento del array y muestra el primero y el último por consola.

const rickAndMortyCharacters = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

rickAndMortyCharacters.pop();

console,
  log(
    "Primer elemento:",
    rickAndMortyCharacters[0],
    "Ultimo elemento:",
    rickAndMortyCharacters[-1]
  );
