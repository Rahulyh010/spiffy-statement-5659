
const express=require("express")
const bcrypt=require("bcrypt")
const { UserModel } = require("../Models/user.model")
const jwt=require("jsonwebtoken")

const userRouter=express.Router()


userRouter.get("/",async(req,res)=>{

    const data=await UserModel.find()
    res.send(data)
})


userRouter.post("/register",(req,res)=>{

    const {name,password,email,city}=req.body;

    bcrypt.hash(password,5,async(err,hash)=>{
        
        if(hash){

            const data= UserModel({name,password,email,password:hash,city})
            await data.save()
            res.status(200).send({"msg":"SucessFully Registered"})
        }else{
            res.status(400).send({"err":err.message})
        }

        
    })


})


userRouter.post("/login",async(req,res)=>{

    const {email,password}=req.body;

    const data= await UserModel.find({email})

    if(data.length>0){
        bcrypt.compare(password,data[0].password,async(err,result)=>{
            if(result){
                res.send({"msg":"Logged in successfully","token":jwt.sign({"userId":data[0]._id},"masai")})
                
            }else{
                res.status(200).send({"err":err.message})
            }
        })
    }else{
        res.status(400).send({"error":"Email Not Found In the Data Base Please register First"})
    }

   

})


module.exports={
    userRouter
}

