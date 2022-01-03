const mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: { type: String, lowercase: true, required: [true, "required username"]},
        email: { type: String, lowercase: true, required: [true, "required email"], match: [/\S+@\S+\.\S+/, "invalid email"]},
        password: String
    }, {
        timestamps: true
    })
);

User.prototype.Schema.plugin(passportLocalMongoose);
 
module.exports = User;
