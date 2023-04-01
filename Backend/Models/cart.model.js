const { default: mongoose } = require("mongoose");


const cartSchema=mongoose.Schema({
    title:String,
    price:String,
    reviews:Object,
    image:String,
    discount:Number,
    description:String,
    rating:String,
    price:Number,
    userId:String,
    count:Number


}
)

const CartModel=mongoose.model("carts",cartSchema)


module.exports={CartModel}


