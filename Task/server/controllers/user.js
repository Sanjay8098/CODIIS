import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const getAll=async(req,res)=>{
    try {
        const get=await User.find()
        res.status(200).json(get)
    } catch (error) {
        res.status(400).json({message:err.message});
    }
}

export const register=async (req,res)=>{
const saltRounds=10
    let email=req.body.email
    let exUser=await User.findOne({email:email})
    if(exUser){
        res.send("email exists please login")
    }
    else{
            bcrypt.hash(req.body.password,saltRounds,async(err,hash)=>{
                let register=new User({
                    name:req.body.name,
                    phone:req.body.phone,
                    email:email,
                    password:hash
                })
                try {
                    let result =await register.save()
                    res.json(result)
                    console.log(regNo);
                } catch (error) {
                    res.send(error.message);
                }
            })
            
    }    
}

export const login=async(req,res)=>{
    let email=req.body.email
    let password=req.body.password
    let foundUser=await User.findOne({email:email})
    if(foundUser){
        bcrypt.compare(password,foundUser.password,(err,result)=>{
            if(result){
                let data=foundUser.toObject()
                const token=jwt.sign({_id:data._id,isAdmin:data.isAdmin},process.env.JWT)
                res.header("token",token).send({token,isAdmin:data.isAdmin})
            }else{
                res.send("password wrong")
            }
        })
        
    }else{
        res.send("email is not please register")
    }
}

export const userlog=async(req,res)=>{
    let email=req.body.email
    let password=req.body.password
    let foundUser=await User.findOne({email:email})
    if(foundUser){
        bcrypt.compare(password,foundUser.password,(err,result)=>{
            if(result){
                let data=foundUser.toObject()
                const token=jwt.sign({_id:data._id,isCuster:data.isCuster},process.env.JWT)
                res.header("token",token).send("login")
            }else{
                res.send("password wrong")
            }
        })
        
    }else{
        res.send("email is not please register")
    }
}

