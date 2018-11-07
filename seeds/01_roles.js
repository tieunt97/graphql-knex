
exports.seed = function (knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0').then(function () {
    return knex('roles').truncate().then(function () {
      return knex.raw('SET foreign_key_checks = 1').then(function () {
        return knex('roles').insert([
          { name: 'Admin', created_at: knex.fn.now(), updated_at: knex.fn.now() },
          { name: 'User', created_at: knex.fn.now(), updated_at: knex.fn.now() },
        ]);
      })
    });
  });
};
