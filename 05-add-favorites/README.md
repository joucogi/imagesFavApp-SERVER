# [POST] → Add Favorite

## Mongoose Connection to DB & Model

`npm i -S mongoose`

Create mongoLab DB and ...

**`.env`** 

```
DB_URI=mongodb://admin:admin@dsXXXXXX.mlab.com:XXXXX/db-name
```

**`models/User.js`** 

```
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  favorites: [String]
})

module.exports = mongoose.model('User', UserSchema)
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

## `body-parser` → `req.body` on POST data

`npm i -S body-parser`

```
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
```

### Try it!

```
curl -X POST \
  http://localhost:3000/favorites/7891234 \  
  -d user_id=twitter%7C61481865
```