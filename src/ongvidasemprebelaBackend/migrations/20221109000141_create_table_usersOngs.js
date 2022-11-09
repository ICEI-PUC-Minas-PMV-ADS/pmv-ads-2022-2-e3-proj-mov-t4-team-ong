/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
    return knex.schema.createTable('usersOngs', table => {
        table.increments('id').primary()
        table.integer('userId').references('id')
            .inTable('users').notNull()
        table.integer('ongId').references('id')
            .inTable('ongs').notNull()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('usersOngs')

};