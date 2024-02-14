const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true, minlength: 6},
    email: {type: String, required: true, unique: true}
})

const UserModel = mongoose.Model("User", userSchema);

module.exports = UserModel;