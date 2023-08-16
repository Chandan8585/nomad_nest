const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // id: {type: String, require: true},
    userName: {type: String, require: true},
    number: {type: Number, require: true , unique: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
})

const User = mongoose.model("User", userSchema);
module.exports = User;