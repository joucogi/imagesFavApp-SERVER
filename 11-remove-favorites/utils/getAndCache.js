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
