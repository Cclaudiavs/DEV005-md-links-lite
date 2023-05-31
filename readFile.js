const fs = require('fs');

/* es una promesa que:
lee el archivo devuelve el contenido
 */

const readFile = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.log(error);
      reject(error);
    } else {
      resolve(data);
    }
  });
});
// consume la promesa, si hay error en la lectura retorna catch
// si la promesa se cumple la promesa devuelve .then

const filePath = './README.md';

readFile(filePath)
  .then((fileContent) => {
    console.log('Contenido del archivo:', fileContent);
  })
  .catch((error) => {
    console.log('Error al leer el archivo', error);
  });

module.exports = {
  readFile,
};
