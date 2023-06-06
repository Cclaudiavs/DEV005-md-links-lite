const axios = require('axios');
const { extractLinks } = require('./extractLinks');

const validateLinks = (links) => {
  const linksPromise = links.map((link) => axios
    .head(link.href)
    .then((response) => ({
      ...link,
      status: response.status,
      ok: response.status >= 200 && response.status < 400,
    }))
    .catch(() => ({
      ...link,
      status: 404,
      ok: false,
    })));
  // console.log(linksPromise, 'soy la validacion pendiente');
  return Promise.all(linksPromise);
};

const ruta = './README.md';

extractLinks(ruta)
  .then((links) => {
    if (Array.isArray(links) && links.length > 0) {
      return validateLinks(links);
    }
    console.log('No se encontraron enlaces en el archivo.');
    return [];
  })
  .then((validatedLinks) => {
    console.log('Enlaces validados:', validatedLinks);
    return validatedLinks;
  })
  .catch((error) => {
    console.log('Error al extraer o validar los enlaces:', error);
  });
module.exports = {
  validateLinks,
};
