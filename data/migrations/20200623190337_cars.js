exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();

    tbl.string('VIN').notNullable().unique();
    tbl.string('make', 255).notNullable();
    tbl.string('model', 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExist('cars');
};
