import mongoose from "mongoose"; 
const userSchmea=new mongoose.Schema({
    username:{ 
        type:String, 
        unique:true,
        required:true, 

    },
    email:{ 
        type:String, 
        unique:true,
        required:true, 
        
    }

}, 



    {timestamps:true}) 
    export const UserData=mongoose.model("UserDatat",userSchmea)