const { default: mongoose } = require("mongoose");


const cartSchema=mongoose.Schema({

    image:String,
    price:Number,
    description:String,
    name:String,
    category:String,
    userId:String

}
)

const CartModel=mongoose.model("carts",cartSchema)


module.exports={CartModel}


