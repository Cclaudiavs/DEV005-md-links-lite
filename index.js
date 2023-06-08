const { paths } = require('./paths');
const { readFile } = require('./readFile');
const { extractLinks } = require('./extractLinks');
const { validateLinks } = require('./validateLinks');

function mdLinks(filePath, options = {}) {
  return new Promise((resolve, reject) => {
    const absolutePath = paths(filePath);

    if (!absolutePath) {
      reject(new Error('La ruta no existe.'));
      return;
    }

    readFile(absolutePath)
      .then((fileContent) => {
        extractLinks(fileContent, absolutePath)
          .then((links) => {
            if (Array.isArray(links) && links.length > 0) {
              // console.log('Cont links:', links);
              if (options.validate) {
                validateLinks(links)
                  .then((validatedLinks) => resolve(validatedLinks));
              } else {
                resolve(links);
              }
            } else {
              resolve('No se encontraron enlaces en el archivo.');
            }
          })
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  });
}
// Llamar a la función mdLinks
mdLinks('./README.md', { validate: true })
  .then((links) => {
    console.log(links);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = {
  mdLinks,
};
