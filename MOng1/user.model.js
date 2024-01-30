import mongoose from "mongoose"; 
const userSchema=mongoose.Schema({  
    username:{ 
      type:String, 
    required:true, 
    isActive:true
    }, 
    email:{ 
        type:String, 
        required:true, 
        password:true
    }, 
    phone:{ 
        type:String, 
        required:true, 
        necessary:Boolean,
    }
    
},{timestamps:true}) 
export const model=mongoose.model("TODO",userSchema)