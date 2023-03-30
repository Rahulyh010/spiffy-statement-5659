

const express=require("express")
const { AdminModel } = require("../Models/Admin.model")
const adminRoute=express.Router()


adminRoute.get("/",(req,res)=>{

    res.status(200).send({"msg":"Successfull"})
})

adminRoute.post("/addProduct",async(req,res)=>{

    const payload= req.body

    const data= AdminModel(payload)
    await data.save()


    res.status(200).send(data)

})

adminRoute.patch("/editproduct",async(req,res)=>{
    const payload=req.body;

    const {_id}=req.body

    const data= AdminModel.findByIdAndUpdate({_id:_id},payload)

    res.send({"msg":"successs"})
})

module.exports={
    adminRoute
}