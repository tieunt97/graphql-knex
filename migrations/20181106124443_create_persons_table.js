
exports.up = function (knex, Promise) {
    return knex.schema.createTable('persons', function (table) {
        table.increments('id');
        table.string('name');
        table.string('age');
        table.string('gender');
        table.integer('role_id').notNullable().references('id').inTable('roles').onDelete('CASCADE');
        table.timestamps();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('persons');
};
