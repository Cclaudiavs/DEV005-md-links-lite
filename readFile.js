const fs = require('fs');
const { paths } = require('./paths');
/* es una promesa que:
lee el archivo devuelve el contenido
 */

const readFile = (route) => new Promise((resolve, reject) => {
  fs.readFile(route, 'utf8', (error, data) => {
    if (error) {
      console.log(error);
      reject(error);
    } else {
      resolve(data);
      //console.log(data)
    }
  });
});
// consume la promesa, si hay error en la lectura retorna catch
// si la promesa se cumple devuelve .then
const ruta = paths('./README.md');
readFile(ruta)
  .then((fileContent) => {
    console.log('Contenido del archivo:', fileContent);
  })
  .catch((error) => {
    console.log('Error al leer el archivo', error);
  });

module.exports = {
  readFile,
};
