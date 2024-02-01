/**
 * Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados
 * y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.
 */

const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Abel Cabeza', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true },
];

for (let alumn of alumns) {
    /**
     * En este caso, al aplicar la suma de booleanos, tenemos que true se convierte en 1
     * y que false se convierte en 0, por lo que la suma nos dará el número de trimestres
     * aprobados.
     * Si dan 2 o más, significa que está aprobado y si no, está suspenso.
     */
    alumn.isApproved = (alumn.T1 + alumn.T2 + alumn.T3 >= 2);
}

console.log(alumns);