/* global describe, it, expect */
/* eslint no-undef: "error" */
/* eslint-env node */
const { extractLinks } = require('../extractLinks');

describe('extractLinks', () => {
  test('debería extraer los enlaces de un archivo', () => {
    const pathFile = './README.md';

    return extractLinks(pathFile).then((links) => {
      expect(Array.isArray(links)).toBe(true);
      expect(links.length).toBeGreaterThan(0);
    });
  });

  test('debería rechazar la promesa cuando ocurre un error', () => {
    const pathFile = './JAJJAJA.md';
    return expect(extractLinks(pathFile)).rejects.toThrow();// verifica que sea rechazado
  });
});
