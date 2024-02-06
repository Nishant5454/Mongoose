import mongoose from "mongoose"; 
const userSchema=new mongoose.Schema({
    name:{ 
        type:String,
        require:true, 
        lowercase:true,
    },
    email:{
        type:String, 
        require:true,
        lowercase:true,
    }, 
    phone:{
        type:String, 
        require:true,
        lowercase:true,
    }, 
    created:{ 
      type:Date, 
      required:true,
      default:Date.now,
    }
});
module.exports=mongoose.model('users',userSchema)