const fs = require('fs');
const path = require('path');

const paths = (route) => {
  // verifica si existe ruta
  if (fs.existsSync(route) === true) {
    if (path.isAbsolute(route)) {
      console.log('Ruta encontrada:', route);
      return route;
    }
    const absolutePath = path.resolve(route);
    console.log('Ruta Absoluta:', absolutePath);
    return absolutePath;
  }
  return undefined;
};
//const ruta = paths('README.md');
 //console.log(ruta);
module.exports = {
  paths,
};
