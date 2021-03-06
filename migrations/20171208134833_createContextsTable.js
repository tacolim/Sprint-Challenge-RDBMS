exports.up = function(knex, Promise) {
    return knex.schema.createTable('contexts', function(tbl) {
        tbl.increments('id'); // primary key
        tbl.string('context', 128).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('contexts');
};
