exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    //key id
    table.increments();
    //vin
    table.text("vin", 128).unique().notNullable();
    //make
    table.text("make", 128).notNullable();
    //model
    table.text("model", 128).notNullable();
    //mileage
    table.integer("mileage").notNullable();
    //transmisson not required
    table.text("transmission", 15);
    //titleStatus not required
    table.text("titleStatus", 10);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
