const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        Fname: {type: String, required: true},
        Lname: {type: String, required: true},
        email: {type: String, required: true,unique: true},
        password: {type: String, required: true},
        confirmPassword: {type: String},
        role: { type: String, enum: ['admin', 'owner', 'partner', 'user'], default: 'user' },
        phone: { type: String, required: true},
        access_token: {type: String},
        refresh_token: {type: String},
        avatar: {type: String},
        passwordResetCode: { type: String },
        isRightCode: {type: String},
    },
    {
        timestamps: true
    }
)
const User = mongoose.model("User", userSchema);
module.exports = User;