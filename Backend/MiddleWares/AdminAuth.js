



const adminAuth=(req,res,next)=>{

    const adminId=req.headers.authorization;

    if(adminId==="rahul1234" || adminId=="mehul1234" || adminId==="mustafa1234" || adminId=="deepak123"){
        next()
    }else{
        res.status(400).send({"msg":"NOT AUTHORIZIED FOR THIS ACTION"})
    }

}

module.exports={adminAuth}