const fs = require('fs');

/* es una promesa que:
 al leer
 extrae links
 resuelve un array de links */

const extractLinks = (file) => new Promise((resolve, rejet) => {
  // 3 argumentos  la ruta del archivo, la codificación y el callback
  fs.readFile(file, 'utf8', (error, content) => {
    if (error) {
      rejet(error);
    } else {
      // regular expression, que busca enlaces en la cadena de texto content
      const linksRegex = /http[s]?:\/\/\S+/g;
      // match = todas las coincidencias de una expresión regular en una cadena de texto
      const links = content.match(linksRegex);
      const linkObjects = links.map((link) => ({
        href: link,
        text: '',
        file,
      }));
      resolve(linkObjects);
    }
  });
});

// extrae los links, se llama a la funcion con el argumeneto, devuelve una promesa
extractLinks('README.md')
// si  la promesa se resuelve, devovera los links bajo la devolucion de llamada response
// response trae el array( es el resultado)
  .then((response) => {
    console.log('Contenido de links:', response);
  })
  // cuando la promesa es rechazada, si en la extraccion ocurre un error devuelve el error
  .catch((error) => {
    console.log('Error al extraer los links:', error);
  });
module.exports = {
  extractLinks,
};

/* ejemplo coach
 extractLinks('Readme.md').then((response)=>
 {console.log(response)}).catch((err)=>{console.log(errr)}) */
