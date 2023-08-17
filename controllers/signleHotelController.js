const Hotel = require("../model/hotel.model");

const singleHotelHandler = async(req, res)=> {
    try {
        const {id} = req.params ;
        const hotel = await Hotel.findById(id);
       hotel ? res.json(hotel) : "not found"
    } catch (error) {
        res.status(404).json({message : "hotel not found"})
    }
}

module.exports = singleHotelHandler;