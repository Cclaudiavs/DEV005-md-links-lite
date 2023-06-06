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
});
