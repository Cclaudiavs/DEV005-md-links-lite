const fs = require('fs');

const mdLinks = (path, option) => new Promise((resolve, reject) => {
  // identificar si existe la ruta

  if (fs.existsSync(path)) {
    // verificar si la ruta es absoluta o convertirla absoluta?
  
  } else {
    reject('la ruta es invalida');// si no existe rechaza la promesa
  }
});
module.exports = {
  mdLinks
  // ...
};
