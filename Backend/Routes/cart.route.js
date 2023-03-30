

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

cartRoute.patch("/update/:id",Auth, async(req,res)=>{


 const {id}=req.params

 if(id){
    const data= await CartModel.findByIdAndUpdate({_id:id},req.body)
    res.status(200).send({"msg":"Successfull"})
 }else{
    res.status(400).send({"msg":"Pass Id Please"})
 }

    


})

cartRoute.delete("/delete/:id",Auth,async(req,res)=>{

    const {id}=req.params;

    if(id){

    }else{
        
    }

    const data= await CartModel.find({_id:id})

    res.status(200).send({"msg":"Successfully deleted"})
})




module.exports={
    cartRoute
}
