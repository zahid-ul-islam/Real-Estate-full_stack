const User = require('../models/User');
const { hashPassword } = require('../common/managePassword')

const signUp = async (req,res, next)=>{
    try {
        const { name, email, password }= req.body;
        const hash = await hashPassword(password);
        const userObj = {
            name,
            email,
            password: hash,
        }
        const newUser = new User(userObj);
        await newUser.
        save();
        res.status(200).json(newUser);
    } catch (error) {
        next(error);
    }

}

module.exports = {
    signUp,
}