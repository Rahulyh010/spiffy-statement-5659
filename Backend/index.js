const express= require("express");
const { db } = require("./db");
const { adminRoute } = require("./Routes/AdminRoute");
const { cartRoute } = require("./Routes/cart.route");
const { userRouter } = require("./Routes/user.route");
const cors=require("cors")

const app=express();


app.use(cors())

app.use(express.json())

app.use("/users",userRouter)

app.use("/cart",cartRoute)

app.use("/admin",adminRoute)

app.listen(8080,db)
