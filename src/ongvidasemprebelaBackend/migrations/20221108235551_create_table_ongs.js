/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
    return knex.schema.createTable('ongs', table => {
        table.increments('id').primary()
        table.string('nameExtended').notNull()
        table.string('name').notNull()
        table.datetime('createAt')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('ongs')

};
