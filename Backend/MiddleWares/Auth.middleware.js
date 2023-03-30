


const Auth=(req,res,next)=>{
      
    const token= req.headers.authorization;

    if(token){
        next()
    }else{
        res.status(400).send({"err":"Login First"})
    }
}


module.exports={
    Auth
}