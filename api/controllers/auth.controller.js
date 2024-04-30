import User from "../models/user.model.js";
import bcrypt from 'bcrypt'

export const signup = async(req,res) =>{
    const {username, email, password} = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === ''){
        return res.status(400).json({message:"Fill all necessary fields"})
    }

    const hashpassword = bcrypt.hashSync(password, 10)

    const newUser = new User({
        username,email,password:hashpassword
    })

    try {
        await newUser.save();
        res.json({message:"signup successful"})    
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}