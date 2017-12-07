# Organizando código y cacheando resultados 

En esta lección organizaremos un poco mejor nuestro servidor express utilizando un [router](https://expressjs.com/en/guide/routing.html) y añadiremos un sistema de caché para optimizar nuestras peticiones a la API de unsplash

![cache](./md_img/cache.png)

## Modularizando nuestros endpoints con routers

Nos creamos una carpeta `routes` donde vamos a crear nuestro router 

**`routes/index.js`**
```
const express = require('express')
const router = express.Router()

const getSearchResults = require('./handlers/getSearchResults')

router.get('/search/:query', getSearchResults)

module.exports = router
```

En la carpeta `handlers` iremos creando los _route handlers_ (las funciones encargadas de gestionar las peticiones a esas rutas)

**`getSearchResults`**
```
const { getSearchResultsUnsplash } = require('../../services/unsplashApi')

function getSearchResults (req, res) {
  const { query } = req.params
  const { page = 1 } = req.query
  getSearchResultsUnsplash(query, page)
    .then(data => res.json(data))
    .catch(error => res.json({error}))
}

module.exports = getSearchResults
```


Para separar conceptos aún más en nuestro código creamos un servicio donde centralizaremos las peticiones a la API (asi descargamos al router de este trabajo)

**`unsplashApi.js`**
```
const getAndCache = require('../utils/getAndCache')
const { UNSPLASH_BASE_URL, UNSPLASH_CLIENT_ID } = process.env

function getSearchResultsUnsplash (query, page) {
  const urlBase = `${UNSPLASH_BASE_URL}/search/photos/`
  const queryParams = `?query=${query}&client_id=${UNSPLASH_CLIENT_ID}&page=${page}&per_page=100`
  return getAndCache(urlBase + queryParams)
}

module.exports = { getSearchResultsUnsplash }
```

## Cacheando resultados

Creamos la función `getAndCache` que utiliza un closure para ir guardando en el objeto `cache` el resultado de cada nueva petición que se va realizando. Así si la petición se ha realizado anteriormente la devolvemos directamente de nuestra copia interna (mucho más rapida)

**`getAndCache.js`**
```
const rp = require('request-promise')

const getAndCache = (function () {
  const cache = {}
  return url => {
    if (cache[url]) {
      console.log(`💾 from cache → ${url}`)
      return Promise.resolve(cache[url])
    } else {
      return rp(url, { json: true }).then(data => {
        console.log(`🔎 fresh request → ${url}`)
        cache[url] = data
        return data
      })
    }
  }
})()

module.exports = getAndCache
```

## Recursos

- http://expressjs.com/en/guide/routing.html
- http://asanzdiego.blogspot.com.es/2013/02/el-principio-de-responsabilidad-unica.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
