const dataBase = require("db");

module.exports = {
  getAll() {
    return dataBase("cars");
  },
  getById(id) {
    return dataBase("cars").where("id", id);
  },
  addCar(car) {
    return dataBase("cars").insert(car);
  },
};
