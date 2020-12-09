const db = require("../data/dbConfig");

module.exports = {
  getAll() {
    return db("cars");
  },
  getById(id) {
    return db("cars").where("id", id);
  },
  addCar(car) {
    return db("cars").insert(car);
  },
};
