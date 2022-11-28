/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
    return knex.schema.createTable('payments', table => {
        table.increments('id').primary()
        table.string('typePayment').notNull()
        table.double('valuePayment').notNull()
        table.string('cpf', 14)
        table.datetime('datePayment', 2).notNull()
        table.integer('projectId').references('id')
            .inTable('projects').notNull()
        table.integer('userId').references('id')
            .inTable('users').notNull()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('payments')

};
