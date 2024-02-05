/**
 * PETICIONES
 * 
 * Las peticiones son comunicaciones que realizamos con recursos o servidores externos (APIs).
 * Resultan fundamentales en las webs modernas dónde hay una separación entre backend (soporte de datos)
 * y frontend (mostrar los datos).
 * 
 * Las peticiones antes se realizaban con jquery y ajax. Después se sacaron librerías como axios
 * que facilitaban estas comunicaciones, pero todo esto eran librerías externas que complementaban
 * a Javascript.
 * Javascript sacó su propia librería de comunicación, Fetch API, que es interna y llevan todas las
 * aplicaciones Javascript.
 */

/**
 * Para hacer una petición al back la haremos de la siguiente manera:
 */

fetch(
    /** URL */ 'https://pokeapi.co/api/v2/pokemon/ditto',
    /** Opciones de configuración (opcional) */ {
        cache: 'no-cache',
        method: 'POST',
        headers: {}
    }
);

/**
 * Esta función fetch devuelve una promesa Response,
 * que tendremos que controlar como vimos en el apartado de las promesas
 */

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
        console.log(response);
    });

/**
 * Las peticiones HTTP se pueden pasar con unos métodos HTTP, estos son
 * las operaciones que se realizan sobre una URL:
 * - GET -> la más común, recuperar datos de un servidor. Por defecto en fetch.
 * - POST -> Enviar datos a un servidor, generalmente, crear datos en la base de datos.
 * - PUT -> Modifica un recurso (dato de la base de datos) por completo
 * - PATCH -> Modifica parcialmente un recurso de la base de datos 
 * - DELETE -> Borrar un recurso de la base de datos
 * 
 * La aceptación o no de estos métodos cae en manos del desarrollador de back.
 * Una URL podría tener sólo GET porque fuera un recurso de sólo lectura, por ejemplo.
 */

/**
 * Las peticiones HTTP tienen unos códigos de respuesta, estos indican el estado
 * de los mismos.
 * 
 * 1xx -> Respuestas informativas (casi no se usan)
 * 2xx -> Respuestas satisfactorias (OK)
 *      200 -> Todo OK
 *      201 -> Recurso creado
 *      204 -> No tiene contenido pero OK
 * 3xx -> Redirecciones (La página se ha cerrado, se ha mudado de dominio, etc)
 * 4xx -> Errores del cliente (Se ha equivocado el front)
 *      400 -> Bad request (Los datos están mal)
 *      401 -> No está logueado y no tiene permiso
 *      403 -> No se puede acceder 
 *      404 -> No se ha encontrado
 *      405 -> El método usado no es correcto
 *      409 -> Conflicto. Has mandado crear algo que ya está creado
 * 5xx -> Errores del servidor (el back se cayó)
 *      500 -> Error interno del servidor (el del back la cagó)
 */

/**
 * Este response entra en el then cuando la respuesta de la petición es un HTTP !== 5xx
 * 
 * Para distinguir entre 1xx, 2xx, 3xx y 4xx tenemos la propiedad 'ok' del response que
 * nos indica si todo ha ido bien.
 */

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
        if (response.ok) {
            /** Códigos HTTP 1xx, 2xx */
        } else {
            /** Códigos HTTP 3xx, 4xx */
        }
    });

/**
 * En caso de que sea un error 5xx, pasará por el catch
 */
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
        if (response.ok) {
            /** Códigos HTTP 1xx, 2xx */
        } else {
            /** Códigos HTTP 3xx, 4xx */
        }
    })
    .catch((error) => {
        /** Ha habido un error 5xx */
    });

/**
 * Para recuperar los datos, se usa el método 'json()' del response.
 * Este método nos devuelve una nueva promesa que devolverá un string
 */
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
        if (response.ok) {
            response.json()
                .then((json) => {
                    console.log('JSON con los datos', json);
                })
        } else {
            /** Códigos HTTP 3xx, 4xx */
        }
    })
    .catch((error) => {
        /** Ha habido un error 5xx */
    });

/**
 * Esta manera está fea, porque hay varios anidamientos, así que lo que se hace es lo siguiente:
 */
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
        if (response.ok) {
            return response.json();
            /** Salta a (1) */
        } else {
            /** Códigos HTTP 3xx, 4xx */
        }
    })
    .then((json) => {
        /** (1) */
        console.log('JSON con los datos', json);
    })
    .catch((error) => {
        /** Ha habido un error 5xx */
    });

/**
 * También se puede hacer dentro de una función asíncrona con async-await como vimos
 */
async function getDitto() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');

        if (!response.ok) {
            throw new Error('No tenemos info');
            /** Esto iría al catch que tenemos abajo */
        }

        const dittoInfo = await response.json();

        return dittoInfo;
    } catch (error /** Error 5xx */) {
        console.error(error);
    }
}