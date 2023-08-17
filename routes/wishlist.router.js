const express = require("express");
const router = express.Router();
const WishList = require("../model/wishlist.model");
const verifyUser = require("../middleware/verify.user");
//Post request
router.route("/").post(verifyUser, async(req, res)=> {
    const newWishList = new WishList(req.body);
    try {
        const savedWishList = await newWishList.save();
        res.status(201).json(savedWishList);
    } catch (error) {
        res.status(500).json({message: "Failed to create wishlist"});
    }
})

//Delete request
router.route("/:id").delete(verifyUser, async(req, res)=> {
 try {
    await WishList.findByIdAndDelete(req.params.id);
    res.json({
        message: "Hotel Deleted from Wishlist"
    })
 } catch (error) {
    res.json("could not delete from wishlist");
 }
})

//Get request
router.route("/").get(async(req, res)=> {
    try {
        const wishList = await WishList.find({});
        wishList ? res.json(wishList) : res.json({message: "no items found in the wishlist"})
    } catch (error) {
        
    }
})
module.exports = router
