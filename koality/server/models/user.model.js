const mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

const userSchema =  new mongoose.Schema({
    username: { type: String, lowercase: true, required: [true, "required username"]},
    email: { type: String, lowercase: true, required: [true, "required email"], match: [/\S+@\S+\.\S+/, "invalid email"]},
    password: String
}, 
{
    timestamps: true
});

const User = mongoose.model("User", userSchema);

userSchema.plugin(passportLocalMongoose);
 
module.exports = User;
