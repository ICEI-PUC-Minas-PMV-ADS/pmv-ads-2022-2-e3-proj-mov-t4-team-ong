/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
    return knex.schema.createTable('projects', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('desc', 200)
        table.double('meta', 2)
        table.integer('ongId').references('id')
            .inTable('ongs').notNull()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('projects')

};
