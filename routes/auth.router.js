const express = require("express");
const User = require("../model/user.model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.route("/register").post(async(req, res)=> {
    try {
        const newUser = new User({
            userName : req.body.userName,
            number: req.body.number ,   
            email : req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRETKEY).toString()
        });
        const savedUser =await newUser.save();
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json({message: "Error while creating user"});
    }
})


router.route("/login").post(async(req, res)=> {
    try {
        const user = await User.findOne({number: req.body.number});
        if (!user) {
            return res.status(401).json({ message: "incorrect mobile number" });
        }
        // !user && res.status(401).json({message: "incorrect mobile number"});

        const decodedPassword = CryptoJS.AES.decrypt( user.password, process.env.PASSWORD_SECRETKEY).toString(CryptoJS.enc.Utf8);
        
        (decodedPassword !== req.body.password) && res.status(401).json({message: "Incorrect Password"});

        const {password, ...rest} = user._doc;
        const accessToken = jwt.sign({userName: user.userName}, process.env.ACCESS_TOKEN)
        res.json({...rest, accessToken});
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;


  
   
