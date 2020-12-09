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

module.exports = router;
