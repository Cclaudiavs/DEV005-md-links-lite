/* global describe, it, expect */
/* eslint no-undef: "error" */
/* eslint-env node */
const { readFile } = require('../readFile');

const mockData= 'data'; 

describe('readFile', () => {
  it('deberia leer el archivo', () => {
    const ruta = './README.md';
    const contenidoLeido = mockData;
    return new Promise((resolve, rejects)=> {
    readFile(ruta, 'utf8'(error, contenido)=> {
        if(error){
        rejects(error)
        return;
        }
    })
    expect(contenido).toBe(contenidoLeido);
    resolve()
  });
});
});