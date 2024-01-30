import mongoose from "mongoose"; 
const Userdata=mongoose.Schema({
    userdata1:{ 
        chrome:String,
        stackoverflow:Boolean, 
        fireFox:Boolean, 
        github:true, 
        required:true
    }
}, 
    
    
    
    {timestamps:true}); 
    const subtodo=mongoose.model("SUbtodo",Userdata); 
    