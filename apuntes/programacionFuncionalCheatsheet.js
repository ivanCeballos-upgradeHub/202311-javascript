const a = [1, 2, 3, 4];

console.groupCollapsed('map'); // Aplica una función a cada elemento y devuelve el resultado transformado
function multiplicaPor2(valor) {
    return valor * 2;
}

const aMulPor2 = a.map(multiplicaPor2);

console.log('original', a);
console.log('aMulPor2', aMulPor2);
console.groupEnd();

console.groupCollapsed('forEach'); // Bucle
function muestraValorPorConsola(valor) {
    console.log(valor);
}

a.forEach(muestraValorPorConsola);

console.groupEnd();

console.groupCollapsed('reduce'); // Obtener un valor final dependiente de los valores de la lista
function sumaAcumulada(total, valor) {
    return total + valor;
}

console.log('El valor de la suma', a.reduce(sumaAcumulada, 0));

console.groupEnd();

console.groupCollapsed('find & findIndex'); // Encontrar elementos
function esValorUn4(valor) {
    return valor === 4;
}

console.log(a.find(esValorUn4));
console.log(a.findIndex(esValorUn4));

console.groupEnd();

console.groupCollapsed('some, every'); // Comprobar una condición a todos los elementos

function esValorPositivo(valor) {
    return valor > 0;
}

console.log('Algun número es positivo?', a.some(esValorPositivo));
console.log('Todos los números son positivos?', a.every(esValorPositivo));

console.groupEnd();

console.group('Filter'); // Filtrar elementos de una lista

function esMayorQue2(valor) {
    return valor > 2;
}

console.log('Valores mayores que 2', a.filter(esMayorQue2));

console.groupEnd();