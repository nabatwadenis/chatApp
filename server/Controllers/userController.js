const  userModel= require("../Models/UserModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");


const registerUsers = async(req, res) =>{
    const {name, email, password } = req.body

    let user = await userModel.findOne({email});

    if( user) return res.status(400).json("User with given email already exists........");
    if(!name || !email || !password) return res.status(400).json("All fields are required");
    if(!validator.isEmail(email)) return res.status(400).json("invalid email");
    if(!validator.isStrongPassword(password)) return res.status(400).json("Password is week");
}

module.exports = { registerUsers };