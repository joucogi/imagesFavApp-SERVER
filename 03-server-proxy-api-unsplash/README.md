# Create GET Search API Unsplash

**`package.json`**

```
{
  "name": "03-server-proxy-api-unsplash",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-eslint": "^8.0.2",
    "eslint-config-standard": "^10.2.1",
    "eslint-plugin-import": "^2.8.0",
    "eslint-plugin-node": "^5.2.1",
    "eslint-plugin-promise": "^3.6.0",
    "eslint-plugin-standard": "^3.0.1",
    "prettier-eslint": "^8.2.1"
  }
}
```

**`.eslintrc`**

```
{
  "parser": "babel-eslint",
  "extends": [
    "standard"
  ]
}
```

## Get API Client credentials

- Go to https://unsplash.com/oauth/applications and register a new app
- Get an `Application ID` and a `Secret` Word for accesing this API
- Add them as environment variables and load them into your app using `dotenv`

## Get API Client credentials

`https://api.unsplash.com//search/photos/?query=${query}&client_id=${UNSPLASH_CLIENT_ID}&page=${page}&per_page=100`

## Create environment variables for this data & install npm modules

`npm i -S express`
`npm i -D nodemon`
`npm i -S dotenv`
`npm i -S request request-promise`

## Test w/ postman




