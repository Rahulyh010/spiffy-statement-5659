const { default: mongoose } = require("mongoose")



const db=async()=>{

    try {
       const connection = await mongoose.connect(`mongodb+srv://rahulyh63:india@cluster0.htt1a6s.mongodb.net/india-mart?retryWrites=true&w=majority`) 
    console.log("Connected to mongosh")
    } catch (error) {
      console.log(error)   
    }
    
}


module.exports={
    db
}