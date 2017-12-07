# Organizando código y cacheando resultados 

** `unsplashApi.js` **
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

** `getAndCache.js` **
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

## Recursos

- http://expressjs.com/en/guide/routing.html
- http://asanzdiego.blogspot.com.es/2013/02/el-principio-de-responsabilidad-unica.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
