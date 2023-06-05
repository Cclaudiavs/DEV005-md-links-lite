const fs = require('fs');
const path = require('path');

const ruta = './README.md';
const extractLinks = (pathFile) => new Promise((resolve, reject) => {
  fs.readFile(pathFile, 'utf8', (error, fileContent) => {
    if (error) {
      reject(error);
    } else {
      // expresion regular que captura enlaces
      const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gm;
      // array nuevo que guarda las coincidencias de regex
      const links = Array.from(fileContent.matchAll(regex), (match) => ({
        href: match[2],
        text: match[1],
        file: path.resolve(pathFile),
      }));
      // console.log('Array de enlaces:', links);
      resolve(links);
    }
  });
});

extractLinks(ruta)
  .then((links) => {
    if (Array.isArray(links) && links.length > 0) {
      // console.log('Contenido de links:', links);
    } else {
      console.log('No se encontraron enlaces en el archivo.');
    }
  })
  .catch((error) => {
    console.log('Error al extraer los links:', error);
  });

module.exports = {
  extractLinks,
};

/* ejemplo coach
 extractLinks('Readme.md').then((response)=>
 {console.log(response)}).catch((err)=>{console.log(errr)}) */
