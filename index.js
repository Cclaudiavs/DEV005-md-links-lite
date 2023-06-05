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
            if (options.validate) {
              validateLinks(links)
                .then((validatedLinks) => resolve(validatedLinks))
                .catch((error) => reject(error));
            } else {
              // resolve(links);
            }
          })
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  });
}

module.exports = {
  mdLinks,
};
