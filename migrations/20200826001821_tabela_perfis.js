exports.up = function (knex, Promisse) {
    return knex.schema.createTable('perfis', table =>{
        table.increments('id').primary();
        table.string('nome').notNull().unique()
        table.string('rotulo').notNull()
    }).then(() => knex('perfis').insert([
        {nome: "comum" , rotulo: "Comun" },
        {nome: "admin" , rotulo: "Administrador" },
        {nome: "master" , rotulo: "Master" }
    ]))
};

exports.down = function (knex, Promisse) {
    return knex.schema.dropTable('perfis')
};
