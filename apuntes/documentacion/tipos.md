# Documentación de tipos
Javascript es un lenguaje no tipado, eso quiere decir que las variables no tienen restricción de tipos. Una variable puede ser number y en el futuro cambiar a un booleano.

Para controlar esta casuística, podemos documentar los tipos de las variables para saber que en esa variable tiene un tipo determinado.

> :warning: La documentación no altera en forma alguna el funcionamiento normal de Javascript.
>
> Que una variable tenga un tipo no implica que Javascript se queje cuando le asignes un valor que no es del tipo indicado.
>
> El JSDoc hay que verlo como un pacto entre caballeros de cuando la época mediaval. Yo pongo que esta variable sólo son números y tú asumes que esa variable sólo contendrá números. Cuando yo ponga que una variable es un boolean, tú respetarás esa declaración.

La estructura para documentar el tipo de una variable (en adelante, tipar una variable) es el siguiente:
```js
/**
 * @type {<tipo de la variable>}
 */
let variable = 1;
```

> :grey_exclamation: No tiene mucho sentido tipar las constantes porque no cambiarán nunca su valor.

## Tipado de variables simples
Así podemos declarar de forma simple lo que contienen las variables.

```js
/** 
 * @type {number}
 */
let numero = 1;

/**
 * @type {boolean}
 */
let booleano = true;

/**
 * @type {string}
 */
let texto = 'Hola mundo!';

/**
 * @type {object}
 */
let user = {
    name: 'Juan',
    surname: 'González',
    age: 12,
};

/**
 * @type {object}
 */
let user = {
    name: 'Juan',
    surname: 'González',
    age: 12,
};

/**
 * @type {array}
 */
let data = [1, true, 'Hola'];
```

Cuando una variable puede tener múltiples tipos podemos tiparla con la notación de barra vertical "|":
```js
/**
 * @type {number | string}
 */
let numeroOString = 1;

/**
 * @type {boolean | number}
 */
let booleanoONumero = true;
```

En el caso de que una variable pueda ser undefined, se indica de la siguiente manera:
```js
/**
 * @type {number | undefined}
 */
let datoOpcional; // Ahora tiene undefined, pero en el futuro será número o undefined.
```

En el caso de que una variable sea nullable, podemos indicarla de dos maneras:
```js
/**
 * Manera larga
 * 
 * @type {number | null}
 */
let numeroNullable = null;

/**
 * Manera corta
 * 
 * @type {?number}
 */
let numeroNullable = null;
```

Si una variable no tiene tipo específico tenemos dos opciones: dejarla sin tipar o indicarle que tiene cualquier tipo con la siguiente notación:
```js
/**
 * @type {*}
 */
let variable;
```

## Tipado de variables complejas
Así podemos hacer tipados más complejos. Vamos a ver dos casos, el de objetos y el de arrays.

### Tipado de objetos
Cuando tipamos un objeto, indicamos las propiedades **mínimas** de ese objeto.

Tenemos dos maneras de tipar objetos:
* Directa: Pondremos sus propiedades de forma directa abriendo una doble llave ( {{  }} ):
    ```js
    /**
     * @type {{
     *    name: string,
     *    surname: string,
     *    age: number,
     * }}
     */
    let user = {
        name: 'Juan',
        surname: 'González',
        age: 12,
    };
    ```
* Mediante tipos definidos: Veremos los tipos definidos, pero vamos a ver cómo se podría hacer rápidamente:
    ```js
    /**
     * @typedef {object} User
     * @prop {string} name
     * @prop {string} surname
     * @prop {number} age
     */
    /**
     * @type {User}
     */
    let user = {
        name: 'Juan',
        surname: 'González',
        age: 12,
    };
    ```
Cuando queremos indicar que una propiedad es opcional, es decir, que podría estar pero no es obligatorio, podemos indicarlo con la el nombre de la propiedad entre corchetes:
```js
/**
 * @typedef {object} User
 * @prop {string} name
 * @prop {string} surname
 * @prop {number} [age]
 */
```

###  Tipado de arrays
Los arrays pueden contener varios elementos. Vamos a ver los arrays de un tipo, los arrays multitipos y los arrays específicos:
#### Arrays unitipo
Son los arrays que sólo contienen un tipo, todos los elementos de ese array serán de ese tipo específico. Se indica de la siguiente manera:
```js
/**
 * Forma corta y recomendada
 * 
 * @type {number[]}
 */
let numeros = [1, 2, 3, 4];

/**
 * Forma larga
 * 
 * @type {Array<number>}
 */
let numeros = [1, 2, 3, 4];
```
#### Arrays multitipo
Son aquellos arrays que pueden contener un número reducido de tipos. 
```js
/**
 * Más legible.
 * 
 * @type {Array<number|boolean>}
 */
let lista = [1, true, false, 0];

/**
 * @type {(number | boolean)[]}
 */
let lista = [1, true, false, 0];
```

#### Arrays específicos
Son aquellos en los que detallamos específicamente el tipo de cada elemento del array.
```js
/**
 * @type {[number, boolean, string, null]}
 */
let lista = [1, true, 'Hola', null];
```
No se suele ver mucho este caso, pero sirve para indicar que en ciertas posiciones encontraremos unos tipos definidos y no otros.

## Definición de tipos.
Podemos definir nuestros propios tipos a partir de los tipos que vienen en Javascript. Esto es útil para poder definir lenguaje de negocio en nuestras aplicaciones.

Esta declaración de tipos sólo existirá a nivel de documentación (JSDoc) y no es necesario que esté colocado específicamente en un sitio.

Cada definición de tipo debe ir en su propio bloque de JSDoc y el nombre del nuevo tipo debe ir capitalizado para indicar que es un tipo y evitar confusiones con nombres de variables.

### Creación simple de tipos
Podemos crear tipos a partir de otros, para ello usamos la siguiente estructura:
```js
/**
 * @typedef {<tipo base>} <Nombre del nuevo tipo> <Descripción del tipo>
 */
```
Ejemplos:
```js
/**
 * @typedef {number} Numero 
 */

/**
 * @typedef {boolean} Cierto
 */

/**
 * @typedef {string} Texto
 */

/**
 * @typedef {array} Listado
 */

/**
 * @typedef {object} Objeto
 */
```
La declaración de un tipo puede tener múltiples tipos originales, por ejemplo:
```js
/**
 * @typedef {number|boolean} NumeroOBooleano
 */
```
### Creación compleja de tipos
Podemos crear tipos muy complejos a partir de arrays y de objetos.
#### Arrays
Podemos crear:
* Array tipado:
    ```js
    /**
     * @typedef {number[]} ArrayDeNumeros
     */
    ```
* Array multitipado:
    ```js
    /**
     * @typedef {Array<number|boolean>} ArrayDeNumerosOBooleanos
     */
    ```
* Array específico:
    ```js
    /**
     * @typedef {[number, boolean, string]} ArrayEspecifico
     */
    ```
#### Objetos
Podemos crear objetos complejos, tenemos dos maneras:
* Nuevo tipo declarado directamente:
    ```js
    /**
     * @typdef {{
     *  name: string,
     *  surname: string,
     *  age: number
     * }} User
     */
    ```
* Nuevo tipo creado mediante propiedades. En este caso se usa la instrucción `@prop` p `@property` para indicar que ese tipo tiene una propiedad:
    ```js
    /**
     * @typedef {object} User
     * @prop {string} name
     * @prop {string} surname
     * @prop {number} age
     */
    ```
Recomiendo la segunda forma porque, aunque es más larga, es más completa dado que podemos determinar más datos de las propiedades como una descripción o si son propiedades opcionales.