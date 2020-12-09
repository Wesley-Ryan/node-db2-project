exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "m6aofPwqKxMVx7",
          make: "Honda",
          model: "Civic",
          mileage: 36000,
          transmission: "5 Speed",
          titleStatus: "Clean",
        },
        {
          vin: "qSHX9PEMPk3PGz",
          make: "Acura",
          model: "Integra Type R",
          mileage: 89965,
          transmission: "5 Speed",
          titleStatus: "Clean",
        },
        {
          vin: "Jw3h3oUfLC8ekj",
          make: "Honda",
          model: "Integra Type R",
          mileage: 126883,
          transmission: "6 Speed",
          titleStatus: "Clean",
        },
        {
          vin: "n3PijnAAeSQ4QW",
          make: "Nissan",
          model: "240sx",
          mileage: 246372,
          transmission: "5 Speed",
          titleStatus: "SALVAGE",
        },
        {
          vin: "rnDqtZ6RFGgxbQ",
          make: "Toyota",
          model: "Scion",
          mileage: 420000,
          transmission: "Auto",
          titleStatus: "Clean",
        },
      ]);
    });
};
