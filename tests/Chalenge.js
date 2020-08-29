const db = require("../config/db");

const salvarUsuario = async (nome, email, senha) => {
  let usuario = await await db("usuarios").where({ email }).first();

  if (!usuario) {
    const [id] = await db("usuarios").insert({ nome, email, senha });
    usuario = await db("usuarios").select("*").where({ id }).first();
  } else {
    await db("usuarios")
      .where({ id: usuario.id })
      .update({ nome, email, senha });
    usuario = { ...usuario, nome, email, senha };
  }
  return usuario;
};

const salvarPerfil = async (nome, rotulo) => {
  let perfil = await db("perfis").where({ nome }).first();

  if (!perfil) {
    const [id] = await db("perfis").insert({ nome, rotulo });
    perfil = await db("perfis").where({ id }).first();
  } else {
    db("perfis").where({ nome: perfil.nome }).update({ nome, rotulo });
    perfil = { ...perfil, nome, rotulo };
  }
  return perfil;
};

const addPerfis = async (usuario, ...perfis) => {
    let resp = []
    for(perfil of perfis){
        let usuarioPerfil = await db('usuarios_perfis')
        .where({
            usuario_id: usuario.id,
            perfil_id: perfil.id
        }).first()

        if(!usuarioPerfil){
            const [id] = await db('usuarios_perfis')
                .insert({
                    usuario_id: usuario.id,
                    perfil_id: perfil.id
                })
            }
            usuarioPerfil = await db('usuarios_perfis')
                                .select('usuarios.nome as nome_funcionario', 'perfis.nome as nome_perfil')
                                .innerJoin('usuarios', 'usuarios.id' , 'usuarios_perfis.usuario_id')
                                .innerJoin('perfis', 'perfis.id' , 'usuarios_perfis.perfil_id')
                                .where({
                                    usuario_id: usuario.id,
                                    perfil_id: perfil.id
                                }).first()
            resp.push(usuarioPerfil)
    }
    return resp
};

const executar = async () => {
  const usuario = await salvarUsuario(
    "Rafael Silverio",
    "Rafael.silverio@empresa.com.br",
    "4321"
  );
  //console.log(usuario)
  const perfilA = await salvarPerfil("TI", "Tecnologia da informação");
  const perfilB = await salvarPerfil("fin", "Financeiro");  
  const usuarioPerfil = await addPerfis(usuario , perfilA, perfilB)
  console.log(usuarioPerfil)
};

executar()
  .catch((error) => console.log(error))
  .finally((_) => db.destroy());
