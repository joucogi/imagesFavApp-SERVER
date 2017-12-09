# Eliminando Favoritos

En esta lección vamos a añadir la funcionalidad de eliminar favoritos:

- ​añadiendo el endpoint `[DELETE] /favorite/:idFavorite​` en el servidor
- añadiendo el botón _eliminar favorito_ y su funcionalidad a través de los componentes `grid` y `fav` que ya tenemos creados

[![eliminar favoritos](./md-img/remove-favorites.png)](https://pro.codely.tv/library/crea-una-app-mean-profesional-con-angularjs-y-webpack)

_Esta lección corresponde al curso [Crea una app MEAN profesional con AngularJS y Webpack](https://pro.codely.tv/library/crea-una-app-mean-profesional-con-angularjs-y-webpack) disponible a través de [CodelyTV](https://pro.codely.tv/)_

## Creando el endpoint `[DELETE] /favorite/:idFavorite`

Creamos un endpoint `/favorite/:idFavorite` con el método `DELETE` y le asignamos una función `_removeFavorite`

**`routes/handlers/removeFavorite.js`**
```
const { removeFavorite } = require('../../services/unsplashApi')

function _removeFavorite (req, res) {
  const { user_id } = req.headers
  const { favorite_id } = req.params

  removeFavorite(user_id, favorite_id)
    .then(() => res.json({ msg: `favorite removed from the user` }))
}

module.exports = _removeFavorite
```

Este _route handler_ utiliza un método del servicio llamado `removeFavorite`

**`routes/handlers/removeFavorite.js`**
```
function removeFavorite (user_id, favorite_id) {
  return User.findOneAndUpdate(
    { user_id },
    { $pull: { favorites: favorite_id } }
  )
}
```

Este método se encarga de quitar del array un id 