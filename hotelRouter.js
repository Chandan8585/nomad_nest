const express = require("express");
const hotels = require("./data/hotels");
const hotelRouter = express.Router();

hotelRouter.route("/")
.get((req, res) => {
      res.json(hotels.data)
})

module.exports = hotelRouter;