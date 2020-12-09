const express = require("express");
const carsHelper = require("./cars-model");
const router = express.Router();

router.get("/", async (req, res) => {
  const cars = await carsHelper.getAll();
  try {
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.messge });
  }
});

router.post("/", async (req, res) => {
  const car = req.body;
  if (car.name < 0) {
    res.status(500).json({ message: "Error, must include a name" });
  } else {
    try {
      const newCar = await carsHelper.addCar(car);
      res.status(201).json(newCar);
    } catch (error) {
      res.status(500).json({ message: error.messge });
    }
  }
});

module.exports = router;
