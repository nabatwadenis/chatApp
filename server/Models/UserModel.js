const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 30 },
    email: {type: String, required: true, minlength: 3, maxlength: 200, unique: true},
    password: {type: String, required: true, minlenght: 3, maxlength: 1024 }, //longer since it will be hashed

}, {
    timestamps: true,
});

//create a model to translate  the schema to the database;
 const userModel = mongoose.model("User", userSchema);

 module.exports = userModel;