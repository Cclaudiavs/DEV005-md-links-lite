/* global describe, it, expect */
/* eslint no-undef: "error" */
/* eslint-env node */
const { readFile } = require('../readFile');

describe('readFile', () => {
  it('debe leer el archivo y mostrar su lectura', () => {
    const route = './README.md';

    return readFile(route).then((fileContent) => {
      expect(fileContent).toBeDefined();
    });
  });
  it('debe devolver error si no se cumple la promesa', () => {
    const ruta = './jajaj.md';

    return readFile(ruta).catch((error) => {
      expect(error).toBeDefined();
      console.log('Error al leer el archivo', error);
    });
  });
});
