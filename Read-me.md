
## 1. ¿Que es Md-Links?

Markdown Links es una librería de Node.js que nos permite buscar en un directorio todos los archivos en formato Markdown que en su interior contengan link y asi poder validar el estado actual de cada uno de ellos. (En este proyecto en particula se dedica a leer un archivo.)

## 2. Diagrama de Flujo :creately.com
https://drive.google.com/drive/recent


## 3. Instalación :

Para instalar la librería debes correr el siguiente comando:
#### `npm install --global <github-Cclaudiavs>/md-links`

## 4. Herramientas Utilizadas 	:

La librería contiene las siguientes dependencias:
* Node.js
* File System
* Node-fetch
* Axios

#### `mdLinks('path', {options});`

###### 5. Argumentos:
* `path`: El archivo .md
* `options`: Recibe un objeto con dos propiedades, "validate" y "stats". 

La librería te ofrece la siguiente información:

* Nombre del archivo .md
* Links encontrados en el archivo.
* URL encontrada, el texto asociado al link y la ruta o file donde se encuentra el link.
* Lista de links  VALIDADOS con su url, status, el texto y archivo .md donde se          encuentra.





