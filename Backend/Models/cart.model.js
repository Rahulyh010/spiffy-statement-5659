const { default: mongoose } = require("mongoose");


const cartSchema=mongoose.Schema({
    title:String,
    price:String,
    reviews:Object,
    image_url:String,
    discount:Number,
    discription:String,
    rating:String,
    price:Number,
    

}
)

const CartModel=mongoose.model("carts",cartSchema)


module.exports={CartModel}


