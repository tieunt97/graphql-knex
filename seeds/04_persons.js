
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('persons').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        { id: 1, name: 'John Doe', age: "24", gender: "male", role_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 2, name: 'Adam Smith', age: "33", gender: "male", role_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() },
        { id: 3, name: 'Marry', age: "28", gender: "female", role_id: 1, created_at: knex.fn.now(), updated_at: knex.fn.now() }
      ]);
    });
};
