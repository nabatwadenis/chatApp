const  userModel= require("../Models/UserModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
//generate jwt token
const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY

    return jwt.sign({_id}, jwtkey, {expiresIn: "3d"})
}

//register user

const registerUsers = async(req, res) =>{
    try{
        const {name, email, password } = req.body

        let user = await userModel.findOne({email});
    
        if( user) return res.status(400).json("User with given email already exists........");
        if(!name || !email || !password) return res.status(400).json("All fields are required");
        if(!validator.isEmail(email)) return res.status(400).json("invalid email");
        if(!validator.isStrongPassword(password)) return res.status(400).json("Password is week");
    
        user = new userModel({name, email, password});
    
        //hash the password
        const salt = await bcrypt.genSalt(10) //random string of 10 characters
        user.password = await bcrypt.hash(user.password, salt) //hash the password
        await user.save() //save in database
    
        const token = createToken(user._id)
    
        res.status(200).json({_id: user._id, name, email, token})
    } catch(err){
        console.log(error);
        res.status(500).json(error);
    }

}

//login users

const loginUsers = async(req, res) =>{
    const { email, password } = req.body;
    try{
        //validate email
        let user = await userModel.findOne({email});
        if(!user) return res.status(400).json("Invalid email or password...");

        //validate password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) return res.status(400).json("Invalid email or password....")
        const token = createToken(user._id);
        res.status(200).json({_id: user._id, name: user.name, email, token}); //to include name since not declared
    

    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

const findUser = async(req, res) =>{
    const userId = req.params.userId; //to get user from database
    try{
        const user = await userModel.findById(userId);
        res.status(200).json(user)

    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}
const findAllUsers = async(req, res) =>{
    try{
        const users = await userModel.find();
        res.status(200).json(users)

    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = { registerUsers, loginUsers, findUser, findAllUsers };