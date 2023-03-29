const express= require("express");
const { db } = require("./db");
const { userRouter } = require("./Routes/user.route");

const app=express();


app.use(express.json())

app.use("/users",userRouter)

app.listen(8080,db)
