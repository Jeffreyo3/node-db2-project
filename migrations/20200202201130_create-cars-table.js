
exports.up = function (knex) {
    // the cahnge we want to make to our schema
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.text('VIN')
            .unique()
            .notNullable();
        tbl.text('make')
            .notNullable();
        tbl.text('model')
            .notNullable();
        tbl.text('mileage')
            .notNullable();
        tbl.text('transmissionType');
        tbl.text('titleStatus');
    })
};

exports.down = function (knex) {
    // undoing that change
    return knex.schema.dropTableIfExists('cars');
};