# Documentación de funciones
La documentación de funciones es indicar los tipos de los parámetros y el tipo de lo que retorna una función, esto sirve para:
1.  **Quitarte responsabilidad**. Al indicar que una función recibe un tipo y/o que es obligatorio estás indicando que no te responsabilizas si no funciona al meterle otros tipos.
2.  **Informar al usuario**. La persona que use tu función sabrá qué tipos recibe, si son obligatorios o incluso qué es cada parámetro de la función. También sabe qué debe esperar de la función si es que debe esperar algo.

Para documentar funciones, tenemos que usar las siguientes notaciones:
```js
/**
 * @param {<tipo del parámetro>} <nombre del parámetro> <descripción opcional del parámetro>
 * @return {<tipo de retorno>} <descripción opcional del retorno>
 */
```
> :warning: Si la función no tiene parámetros, simplemente no se indica.
Ejemplo
```js
/**
 * Suma dos números
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function suma(num1, num2) {
    return num1 + num2;
}
```
Cuando una función retorna 'void' es que no retorna nada (void = vacío). 
```js
/**
 * Manda los datos del usuario al backend
 * 
 * @param {string} nombre 
 * @param {string} apellido 
 * @returns {void}
 */
function guardarEnBackend(nombre, apellido) {
    fetch('mi-backend-favorito.com/user', { method: 'POST', data: { nombre, apellido } });
}
```
Para indicar que un parámetro es opcional se indica con corchetes:
```js
/**
 * Suma números, en principio 2, pero pueden ser 3
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} [c]
 * @returns {number}
 */
function suma(a, b, c) {
    let total = (a + b);

    if (c) {
        total += c;
    }

    return total;
}
```
Para indicar que un parámetro tiene un valor por defecto y su valor, se indica con corchetes e igual
```js
/**
 * Suma tres números
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} [c=10] 
 * @returns {number}
 */
function suma(a, b, c = 10) {
    return a + b + c;
}
```
Para indicar que un parámetro puede recibir más de un tipo, se indica con el símbolo "|"
```js
/**
 * Une tres elementos. Si es número los suma. Si es string los concatena.
 * 
 * @param {number|string} a 
 * @param {number|string} b 
 * @param {number|string} c 
 * @returns {number|string}
 */
function union(a, b, c) {
    return a + b + c;
}
```
Para indicar que un parámetro puede ser cualquier cosa, se usa "*" como tipo
```js
/**
 * Muestra algo por consola
 * 
 * @param {*} a Dato a mostrar
 * @returns {void}
 */
function muestraPorConsola(a) {
    console.log(a);
}
```
## Callbacks
Para tipar un callback podemos hacerlo de dos maneras:
* Tipado directo: Usaremos directamente la declaración de función para indicar que esa variable es una función que recibe tantos parámetros de estos tipos y devuelve otro tipo.
    ```js
    /**
     * @param {(a: number) => number} funcion 
     * @returns {number}
     */
    function ejecuta(funcion) {
        return funcion(1);
    }
    ```
* Tipado indirecto: Se puede crear el tipo del callback como una función normal:
    ```js
    /**
     * @callback <nombreDelTipoCallback>
     * @param {<tipo del parámetro>} <nombre del parámetro>
     * @returns {<tipo del valor de retorno>}
     */

    /**
     * Ejemplo
     * 
     * @callback ejecutaCallback
     * @param {number} a
     * @returns {number}
     */

    /**
     * @param {ejecutaCallback} funcion 
     * @returns {number}
     */
    function ejecuta(funcion) {
        return funcion(2);
    }
    ```

> :warning: Como estándar, se suele dar el nombre de la función y el sufijo 'Callback'.

## Promesas
Las promesas se documentan con el tipo Promise y se indica el tipo que devuelve la promesa cuando se cumple.
```js
/**
 * @returns {Promise<number>}
 */
function devuelvePromesa() {
    return new Promise((resolve) => resolve(1));
}

/**
 * Calcula la suma de dos números de forma asíncrona
 * 
 * @async (Opcionalmente puedes documentar que es asíncrona)
 * @param {number} a 
 * @param {number} b 
 * @returns {Promise<number>}
 */
async function sumAsync(a, b) {
    return a + b;
}
```
## Arrays
Los parámetros que son array, se indican como los tipos.
```js
/**
 * Suma un listado de números
 * 
 * @param {number[]} numeros 
 * @returns {number}
 */
function suma(numeros) {
    return suma.reduce((total, numero) => total + numero, 0);
}
```

## Objetos
Parámetros que son objetos simples, sin detallar:
```js
/**
 * @param {object} user 
 */
function showUser(user) {
    console.log(user.name, user.age);
}
```
Se puede indicar las propiedades mínimas de ese objeto de dos maneras:
1. Directamente dentro de la propiedad.
    ```js
    /**
     * @param {{
     *  name: string,
     *  age: number,
     * }} user 
     */
    function showUser(user) {
        console.log(user.name, user.age);
    }
    ```
2. En la propiedad desestructurado en varios parámetros.
    ```js
    /**
     * @param {object} user 
     * @param {string} user.name
     * @param {number} user.age
     */
    function showUser(user) {
        console.log(user.name, user.age);
    }
    ```
3. En un tipo aparte
    ```js
    /**
     * @typedef {object} User
     * @prop {string} name
     * @prop {number} age
     */

    /**
     * @param {User} user 
     */
    function showUser(user) {
        console.log(user.name, user.age);
    }
    ```