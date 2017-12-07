# [POST] → Add Favorite

## Crear BD MonggoLab y conectarnos mediante mongoose

`npm i -S mongoose`

**`.env`** 

```
DB_URI=mongodb://admin:admin@dsXXXXXX.mlab.com:XXXXX/db-name
```

**DB Connection on `index.js`**

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

## Crear modelo mongoose

**`models/User.js`** 

```
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  favorites: [String]
})

module.exports = mongoose.model('User', UserSchema)
```


## `body-parser` para poder recibir datos en POST

`body-parser` → `req.body` on POST data

`npm i -S body-parser`

```
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
```

### Pruebalo!

```
curl -X POST \
  http://localhost:3000/favorites/cccccc \  
  -d user_id=12345
```