const express= require("express");
const { db } = require("./db");

const app=express();


app.use(express.json())



app.listen(8080,db)
