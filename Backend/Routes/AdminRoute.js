

const express=require("express")
const { adminAuth } = require("../MiddleWares/AdminAuth")
const { AdminModel } = require("../Models/Admin.model")
const adminRoute=express.Router()


adminRoute.get("/",adminAuth, async(req,res)=>{
    console.log(req)
    const data= await AdminModel.find()

    res.status(200).send(data)
})

adminRoute.get("/:id",adminAuth, async(req,res)=>{
    const {id} = req.params
    const data= await AdminModel.findOne({_id:id})

    res.status(200).send(data)
})

adminRoute.post("/addProduct",adminAuth, async(req,res)=>{

    const payload= req.body

    const data= AdminModel(payload)
    await data.save()


    res.status(200).send(data)

})


adminRoute.post("/addProducts",adminAuth, async(req,res)=>{
    const payload=req.body;

    const data= await AdminModel.insertMany(payload)
    res.send({"msg":"Successfully Added Sir"})
})

adminRoute.patch("/editproduct/:id",adminAuth, async(req,res)=>{
    const {id}=req.params;
    const payload=req.body

    const data= await AdminModel.findByIdAndUpdate({_id:id},payload)


   // const data= AdminModel.findByIdAndUpdate({_id:_id},payload)

    res.send({"msg":"successs"})
})


adminRoute.delete("/deletProduct/:id", adminAuth, async(req,res)=>{
    const {id}=req.params;
    const data= await AdminModel.findByIdAndDelete({_id:id})

    res.status(200).send({"msg":"Deleted"})
})

module.exports={
    adminRoute
}