const mongoose = require("mongoose");

const wishListSchema = new mongoose.Schema({
     hotelId : {type: String, require: true},
})


const WishList = mongoose.model("wishList", wishListSchema)
module.exports = WishList;