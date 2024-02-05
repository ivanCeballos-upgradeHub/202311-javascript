/**
 * Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
 */

for (let i = 0; i < 6; i++) {
    document.body.append(document.createElement('p'));
}