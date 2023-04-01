const jwt=require("jsonwebtoken")


const Auth=(req,res,next)=>{
      
    const token= req.headers.authorization;
console.log(token)
    if(token){
        next()
    }else{
        res.status(400).send({"err":"Login First"})
    }
}

const PostAuth=(req,res,next)=>{
    const token=req.headers.authorization;

    if(token){
        const decoded= jwt.verify(token,"masai")
        req.body.userId=decoded.userId
        next()
    }else{
        res.status(400).send({"Msg":"Authurization Required"})
    }
}


module.exports={
    Auth,
    PostAuth
}