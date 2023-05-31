/* global describe, it, expect */
/* eslint no-undef: "error" */
/* eslint-env node */
const { paths } = require('../paths');

describe('paths', () => {
  it('Debería devolver la ruta absoluta si existe ruta', () => {
    const ruta = paths('README.md');
    expect(ruta).toBeTruthy(); // Verifica si se devuelve una ruta válida
  });

  it('Debería devolver undefined si no existe la ruta', () => {
    const ruta = paths('rutaInexistente');
    expect(ruta).toBeUndefined(); // Verifica si se devuelve undefined
  });
});

it('should...', () => {
  console.log('FIX ME!');
});
