const WishList = require("../model/wishlist.model")

const createWishList = async(req, res)=> {
    const newWishList = new WishList(req.body);
    try {
        const savedWishList = await newWishList.save();
        res.status(201).json(savedWishList);
    } catch (error) {
        res.status(500).json({message: "Failed to create wishlist"});
    }
}

const deleteFromWishlist = async(req, res)=> {
    try {
       await WishList.findByIdAndDelete(req.params.id);
       res.json({
           message: "Hotel Deleted from Wishlist"
       })
    } catch (error) {
       res.json("could not delete from wishlist");
    }
   }

const getWishListHandler = async(req, res)=> {
    try {
        const wishList = await WishList.find({});
        wishList ? res.json(wishList) : res.json({message: "no items found in the wishlist"})
    } catch (error) {
        
    }
}

module.exports = {createWishList, deleteFromWishlist, getWishListHandler};