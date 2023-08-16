const express = require("express");
const router = express.Router();
const Hotel = require("./model/hotel.model")

router.route("/")
.get(async(req, res) => {
    const hotelCategory = req.query.category;
    try {
        let hotels;
        if(hotelCategory){
            hotels = await Hotel.find({category: hotelCategory})
        }else{
            hotels = await Hotel.find({});
        }
     
        hotels ? res.json(hotels) : res.status(404).res.json({message: "Data not found"})
       } catch (error) {
        console.log(error);
       }      
})

module.exports = router;


