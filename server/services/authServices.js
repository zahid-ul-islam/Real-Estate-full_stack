const User = require("../models/User");
const { hashPassword } = require("../common/managePassword");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hash = await hashPassword(password);
    const userObj = {
      name,
      email,
      password: hash,
    };
    const newUser = new User(userObj);
    await newUser.save();
    const user = await User.findOne({ email });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const signIn = async (req,res,next)=>{
    const { email, password } = req.body
    try {
        const user= await User.findOne({email})
        if(!user) return res.status(404).json('invalid email')
        const validPass = bcrypt.compare(password, user.password)
        if(!validPass) return res.status(401).json('wrong password')
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        res.cookie('accessToken', token, {httpOnly:true}).status(200).json(user)    
    } catch (error) {
        next(error)
    }
}

module.exports = {
  signUp, signIn
};
