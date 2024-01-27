/**
 * Usa un bucle para recorrer el array de peliculas (`movies`)
 * y añade al array `goodProducts` los que tengan más de 20 ventas (`sellCount`)
 * y al array `badProducts` los que tengan menos.
 */

const goodProducts = [];
const badProducts = [];
const products = [
    { name: 'Gorra de rodilla', sellCount: 10 },
    { name: 'Pantalón de pana', sellCount: 302 },
    { name: 'Reloj de papel albal', sellCount: 23 },
    { name: 'Inpar de zapatos', sellCount: 6 },
];
const value = 20; // Lo pongo en constante por si lo cambio en el futuro

// Solucion 1. Easy

for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.sellCount > value) {
        goodProducts.push(product.name);
    } else {
        badProducts.push(product.name);
    }
}

console.log(goodProducts, badProducts);

// solucion 2. Me complico la vida

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const arrayAInsertar = (product.sellCount > value) ? goodProducts : badProducts;

    arrayAInsertar.push(product.name);
}

console.log(goodProducts, badProducts);