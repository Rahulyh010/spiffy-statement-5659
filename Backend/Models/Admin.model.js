

const mongoose=require("mongoose")


const adminSchema= mongoose.Schema({
    name:String,
    category:String,
    gender:String,
    image_url:String,
    rating:String,
    price:Number


})


const AdminModel=mongoose.model("admin",adminSchema)


module.exports={
    AdminModel
}