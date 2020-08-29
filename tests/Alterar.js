const db = require("../config/db");

const novoUsuario = {
  nome: "Felipe",
  email: "felipe@hotmail.com",
  senha: "abc123",
};

const execeios = async () => {
  const { qtde } = await db("usuarios").count("* as qtde").first();
  console.log(qtde)

  if(qtde <=0){
      await db('usuarios').insert(novoUsuario)
  }

  let {id} = await db('usuarios')
    .select('id').limit(1).first()
  await db('usuarios').where({id})
    .update({nome:'Rafael Silverio'});

  return await db('usuarios').where({id}).first()
};

execeios()
  .then((resp) => console.log(resp))
  .finally((_) => db.destroy());
