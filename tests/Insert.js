const db = require('../config/db')

// const novoPerfil = {
//     nome: "visitante",
//     rotulo: "Visitante"
// }


// db('perfis').insert(novoPerfil)
//     .then(resp => console.log(resp))
//     .catch(error => console.log(error.sqlMessage))
//     .finally(_ => db.destroy())

const perfilSU ={
    nome : 'root'+Math.random(),
    rotulo : 'Super Usuario'
}

db.insert(perfilSU).into('perfis')
     .then(resp => console.log(resp))
     .catch(error => console.log(error.sqlMessage))
     .finally(_ => db.destroy())