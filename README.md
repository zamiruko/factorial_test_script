# Proyecto que testea la funcionalidad básica del app(llamadas y ejecución).

Los test se encuentran en la carpeta test y en el fichero testChaiHTTP.js

Para la realización de los test se utilizo Mocha, Chai y Chai HTTP

## Instalación
Instalamos las dependencias del sistema

```
$ npm install
$ npm i chai
$ npm i mocha

```
## Configuración package.json
Revisamos en el pachage.json si los datos están correctos.

```
    "test": "mocha test/*.js --timeout 15000"
```
## Ejecucion de los test

Para lanzar la ejecucion de los test utilizamos el comando

```
$ npm test
```