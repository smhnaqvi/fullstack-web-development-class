const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const saltRounds = 10;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.pre("save", async function(next) {
    // 1. Check if password changed
    if (!this.isModified("password")) return;
    
    // 2. Hash password
    this.password = await bcrypt.hash(this.password, saltRounds);
});


var userModel = mongoose.model("Users", userSchema);    
module.exports = userModel;