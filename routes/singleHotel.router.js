const express = require("express");
const router = express.Router();
const Hotel = require("../model/hotel.model");

router.route("/:id").get(async(req, res)=> {
    try {
        const {id} = req.params ;
        const hotel = await Hotel.findById(id);
       hotel ? res.json(hotel) : "not found"
    } catch (error) {
        res.status(404).json({message : "hotel not found"})
    }
})

module.exports = router;