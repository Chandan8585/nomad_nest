const express = require("express");
const router = express.Router();
const verifyUser = require("../middleware/verify.user");
const wishListController = require("../controllers/wishList.Controller");

const {createWishList , deleteFromWishlist , getWishListHandler } = wishListController;
//Post request
router.route("/").post(verifyUser, createWishList)

//Delete request
router.route("/:id").delete(verifyUser, deleteFromWishlist)

//Get request
router.route("/").get(getWishListHandler);
module.exports = router
