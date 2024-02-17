# Documentación
El código de Javascript se puede documentar para aportar información extra al usuario que lo vaya a leer o para facilitar el trabajo de los completadores de código.

Los formatos de comentarios que tenemos en Javascript son 3: \
1. Comentario en línea: \
    Este comentario se usa para descripciones concretas sobre una línea o indicaciones generales. Se usa la notación \\\\ seguido del texto del comentario.

    Si está en línea con un código, referencia al código de la izquierda:
    ```js
    const a = 10; // Esta variable es constante
    ```

    Si está encima de un código, referencia al código que está debajo:
    ```js
    // Esta variable es constante
    const a = 10;
    ```

    Si está aislado (no hay nada inmediatamente encima o debajo) es un comentario general.
    ```js
    const a = 10;

    // Hay que comprar lechugas

    const b = 20;
    ```
2. Comentario de múltiples líneas: \
    Este comentario sirve para dar descripciones largas. Se suele posicionar al principio de los ficheros para indicar características de dichos ficheros. Se usa la notación '/* */'. Por ejemplo:
    ```js
    // user.js
    /*
    Este fichero almacena los datos de los usuarios.
    También almacena funciones para recuperar y manipular esos datos.
    */
    ```
3. Comentarios de JSDoc:\
    Este comentario sirve para documentar las funciones, objetos, etc. Funciona igual que la multilínea excepto que se usa para documentar las funciones. La notación es "/** */". Por ejemplo:
    ```js
    // user.js

    /**
     * Get user data by userId
     *
     * @param {number} userId
     * @return {object}
     */
    async function getUser(userId) {
        const response = await fetch(`https://www.appBackend.com/user/${userId}`);
        const user = await response.json();

        return user;
    }
    ```

## JSDoc comentarios especiales
En este caso, el JSDoc no se usa para documentar cosas sino para indicar notas especiales. Se necesitan ciertos plugin para colorearlos, pero son estándar en la industria:
* TODO: Se indica cuando dejas algo por hacer en el futuro:
    ```js
    /**
     * @TODO: Hay que refactorizar esto.
     */
    ```

## Fuentes:
[Documentación oficial de JSDoc](https://jsdoc.app/)
