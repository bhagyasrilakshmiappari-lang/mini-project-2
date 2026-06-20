const User=require("../models/User");
const bcrypt=require("bcryptjs");

exports.register=async(req,res)=>{
const {name,email,password}=req.body;

let user=await User.findOne({email});
if(user)return res.json({message:"User exists"});

let hash=await bcrypt.hash(password,10);

user=await User.create({
name,
email,
password:hash
});

res.json(user);
}