# Añadiendo datos a MongoDB a través de Mongoose

En esta lección crearemos nuestra BD MongoDB en [mLab](https://mlab.com/) y nos conectaremos a ella a través de un modelo mongoose. Prepararemos también nuestro servidor para que pueda recibir datos vía POST.

![mongoDB](./md_img/mongoDB.png)

## Creando la BD en mLab

Nos vamos a [mLab](https://mlab.com/), nos registramos y nos logeamos.

Una vez dentro creamos la BD y añadimos un usuario para esa BD. Con esto nos quedará una URL del tipo `mongodb://<%DB_USER%>:<%DB_PASSWORD%>@dsXXXXXX.mlab.com:XXXXX/<%DB_NAME%>`

Esta url la añadimos a nuestro `.env` para que nos quede disponible en nuestro código a traves de una variable de entorno

## Conexión a la BD mediante mongoose

Instalamos [mongoose](http://mongoosejs.com/index.html) haciendo `npm i -S mongoose`
Requerimos mongoose y nos conectamos a la URL de la BD (disponible en la variable de entorno) a través del metodo [`connect`](http://mongoosejs.com/docs/api.html#index_Mongoose-connect)

```
....
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

require('dotenv').load()
const { PORT, DB_URI } = process.env

...

mongoose
  .connect(DB_URI, { useMongoClient: true })
  .then(db => console.log(`Connected to DB ${db.name} on HOST ${db.host}...`))

...
```

## Creación del modelo mongoose

Definimos el modelo en `models/User.js` de la siguiente manera:

**`models/User.js`** 

```
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  user_id: String,
  favorites: [String]
})

module.exports = mongoose.model('User', UserSchema)
```

Tal y como está este modelo, por defecto mongoose va a asociar este modelo a la colección "users" (al no especificarla entiende que la colección es el plural del nombre del modelo "User")

Este modelo lo importaremos allá donde queramos interactuar con esta colección de mongoDB

## `body-parser` para poder recibir datos en POST

Para poder recibir datos via POST necesitamos el módulo `body-parser` que instalamos con `npm i -S body-parser`

Con este módulo creamos unos middlewares que nos van a dejar preparado en `req.body` cualquier datos que mandemos via POST

```
const bodyParser = require('body-parser')

...

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
```

## Utilizando el modelo para añadir el favorito recibido por POST

Nuestro _route handler_ se encarga de capturar los datos recibidos via POST y via "url" y añadir el favorito al documento de la colección utilizando el método [`findOneAndUpdate`](http://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate) del modelo...

```
const User = require('../../models/User')

function addFavorite (req, res) {
  const { user_id } = req.body
  const { favorite_id } = req.params

  User.findOneAndUpdate(
    { user_id },
    { $push: { favorites: favorite_id } }
  ).then(() => res.json({ msg: `favorite added to the user` }))
}

module.exports = addFavorite
```


### Pruebalo!

Podemos probar esta petición con Postman (tal y como hacemos en el video) o con cUrl así...

```
curl -X POST \
  http://localhost:3000/favorites/cccccc \  
  -d user_id=12345
```