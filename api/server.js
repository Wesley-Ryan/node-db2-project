const express = require("express");
const morgan = require("morgan");
const carsRouter = require("./cars-router");
const server = express();

server.use(express.json());
server.use(morgan("tiny"));
server.use("/cars", carsRouter);
server.get("/", (_, res) => {
  res.send("Were Up!!!!");
});
module.exports = server;
