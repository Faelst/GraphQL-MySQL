const db = require("../config/db");

// db("perfis")
//   .then(resp => resp.map(p => p.nome))
//   .then((nome) => console.log(nome))
//  .finally((_) => db.destroy());

// db("perfis")
//   .select("id", "nome")
//   .then((resp) => console.log(resp));
//  .finally((_) => db.destroy());

// db("perfis")
//   .select("id", "nome").limit(1)
//   .then((resp) => console.log(resp))
//   .finally((_) => db.destroy());

// db.select('id','nome')
//   .from('perfis')
//   .then(resp=> console.log(resp))
//   .finally((_) => db.destroy());

db("perfis")
  .select("id", "nome")
  //.where({ id: 2 })
  //.where('id','=',2)
  .whereIn('id',[1,2,3])
  //;where("nome", "like", "%comu%")
  .first()
  .then((resp) => console.log(resp))
  .finally((_) => db.destroy());

  