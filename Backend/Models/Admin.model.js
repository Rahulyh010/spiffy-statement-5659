

const mongoose=require("mongoose")


const adminSchema= mongoose.Schema({
    title:String,
    price:String,
    reviews:Object,
    image:String,
    discount:Number,
    description:String,
    rating:String,
    price:Number,
    adminId:String


})


const AdminModel=mongoose.model("admin",adminSchema)


module.exports={
    AdminModel
}