/**
 * Try/catch
 * 
 * Se usa para controlar errores que surgan en el código
 */

/**
 * Lanzar errores
 * 
 * Para lanzar un error se lanza de la siguiente manera:
 */

throw new Error(/** Mensaje de error personalizado */ 'Este es un mensaje de error');

/**
 * Controlar errores
 * 
 * Estos errores que lanzamos, si no se controlan, javascript los controla automáticamente y
 * muestra el error en la consola.
 */
try {
    throw new Error('ALERTA ROJA!');
} catch (/** variable que tiene el mensaje de erorr */ error) {
    console.log(error);
}

/**
 * Cuando se lanza el error, se para la ejecución del código hasta que no se maneje el error.
 * En el ejemplo siguiente, mostrará los siguientes mensajes:
 *    Antes del error
 *    <Error>
 */

try {
    console.log('Antes del error');
    throw new Error('Error');
    console.log('Después del error'); // Este código no se va a ejecutar
} catch (error) {
    console.log('error', error);
}

/**
 * No hay que controlar absolutamente todos los errores porque se llenará el código de try..catch.
 * Hay que usarlos en casos muy específicos.
 */