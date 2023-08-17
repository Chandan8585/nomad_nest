const express = require("express");
const singleHotelHandler = require("../controllers/signleHotelController");
const router = express.Router();


router.route("/:id").get(singleHotelHandler);

module.exports = router;