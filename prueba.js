const axios = require('axios');
const { extractLinks } = require('./extractLinks');

const validateLinks = (links) => {
  const linksMap = links.map((link) => axios
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

  return Promise.all(linksMap);
};

const ruta = './README.md';

extractLinks(ruta)
  .then((links) => {
    if (Array.isArray(links) && links.length > 0) {
      return validateLinks(links);
    }
    throw new Error('No se encontraron enlaces en el archivo.');
  })
  .then((validatedLinks) => validatedLinks, // Devolver los enlaces validados como resultado
  )
  .catch((error) => {
    throw new Error(`Error al extraer o validar los enlaces: ${error.message}`);
  });

module.exports = {
  validateLinks,
};
