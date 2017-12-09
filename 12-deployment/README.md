# 12- Deployment con `now`

En esta lección vamos a hacer el _deployment_ (subir a producción) nuestro proyecto, tanto la parte de cliente como la de servidor realizando antes algunos ajustes para que nuestra app maneje URL's diferentes según el entorno en el que esté

![now](./md-img/now.png)

## Instalamos `now`

Instalamos `now` como modulo global

```
sudo npm i -g --unsafe-perm now
```

Para evitar errores de permisos instalamos el módulo con el parámetro [`unsafe-perm`](https://docs.npmjs.com/misc/config#unsafe-perm)

## Deploy w/ now

Una vez que hemos instalado `now` globalmente, lo tendremos disponible como comando por la que ya podremos hacer...

```
now -e UNSPLASH_CLIENT_ID=<%TU_UNSPLASH_CLIENT_ID%> -e UNSPLASH_BASE_URL=https://api.unsplash.com/ -e DB_URI=mongodb://<%TU_DB_USERNAME%>:<%TU_DB_PASSWORD%>@<%TU_MONGOLAB_URL%> -e PORT=8080
```

donde tienes que sustituir...

- `<%TU_UNSPLASH_CLIENT_ID%>` → El client ID de tu unsplash app (el mismo que hemos usado en desarrollo)
- `<%TU_DB_USERNAME%>` → El nombre de usuario que creaste para tu BD en MongoLab
- `<%TU_DB_PASSWORD%>` → La password del usuario que creaste para tu BD en MongoLab
- `<%TU_MONGOLAB_URL%>` → La url de tu BD en MongoLab

Tu comando tendría que parecerse a algo asi (pero con tus propios datos)
```
now -e UNSPLASH_CLIENT_ID=98798798s7fd9f7sd98f7sd98f7ds9f8sd98f7ds98f7ds9f79s -e UNSPLASH_BASE_URL=https://api.unsplash.com/ -e DB_URI=mongodb://admin:admin@ds4543563.mlab.com:61745/my-super-db-favs -e PORT=8080
```

Fijate que con `-e` le vamos indicando las variables de entorno que en desarrollo manejamos con `dotenv`

## Prueba los endpoints con la url que te da `now`

```
GET https://server-proxy-api-unsplash-hyyqdbqqtv.now.sh/search/surf

POST https://server-proxy-api-unsplash-hyyqdbqqtv.now.sh/favorites
HEADER → {user_id:twitter|61481865}
```
