

const express= require("express");
const { Auth } = require("../MiddleWares/Auth.middleware");
const { CartModel } = require("../Models/cart.model");
const jwt=require("jsonwebtoken")


const cartRoute=express.Router();


cartRoute.get("/",Auth,async(req,res)=>{

    const token= req.headers.authorization
const decoded=jwt.verify(token,"masai")    

     const id= decoded.userId;

    const data= await CartModel.find({userId:id});

    res.status(200).send(data)
})

cartRoute.post("/add",Auth,async(req,res)=>{

    const token=req.headers.authorization

    const decoded=jwt.verify(token,"masai")

    req.body.userId=decoded.userId;

    const data= CartModel(req.body)
    await data.save();
    res.status(400).send({"msg":"Succefully added to cart"})



})



module.exports={
    cartRoute
}

