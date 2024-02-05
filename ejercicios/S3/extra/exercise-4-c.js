/**
 * Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.
 */

const countries = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

for (let country of countries) {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = country.title;

    const img = document.createElement('img');
    img.src = country.imgUrl;

    const button = document.createElement('button');
    button.addEventListener('click', () => {
        div.remove();
    });

    div.append(h4, div);
    document.body.append(div);
}