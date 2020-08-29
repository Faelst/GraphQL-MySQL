const db = require('../config/db')

db('usuarios')
    .delete()
    .then(resp => console.log(resp))
    .finally(() => db.destroy())
