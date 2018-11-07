import { knex } from '../connectors';

var bookshelf = require('bookshelf')(knex);
var Person = bookshelf.Model.extend({
    tableName: 'persons',
    role: function () {
        return this.belongsTo(Role);
    }
});

var Role = bookshelf.Model.extend({
    tableName: 'roles'
});

class PersonM {
    getAllPersons() {
        return Person.fetchAll({ withRelated: ['role'] }).then(function (models) {
            return models.serialize();
        });
    }

    findPerson(id: number) {
        return Person.where({ id: id }).fetch({ withRelated: ['role'] }).then(function (model) {
            return model.toJSON();
        });
    }

    createPerson(input: object) {
        if (input) {
            return knex.transaction(function (trx) {
                return knex.insert({ name: input["role_name"] }, 'id')
                    .into('roles')
                    .transacting(trx)
                    .then(function (ids) {
                        delete input["role_name"];
                        input["role_id"] = ids[0];
                        return knex('persons').insert(input).transacting(trx).then(function (result) {
                            return knex('persons').where('id', result[0]).first().transacting(trx);
                        });
                    })
                    .then(trx.commit)
                    .catch(trx.rollback);
            })
        }
        return false;
    }

    updatePerson(id: number, input: object) {
        if (id) {
            return Person.where({ id: id }).set(input).save(null, { method: 'update' }).then(function (model) {
                return Person.where({ id: id }).fetch({ withRelated: ['role'] }).then(function (model) {
                    return model.toJSON();
                });
            });
        }
        return false;
    }
}

export const PersonModel = new PersonM();