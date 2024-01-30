import mongoose from "mongoose"; 
const productdelivery=new mongoose.Schema({
    location:{ 
        require:true, 
        address:String,  


    },
    pincode:{ 
        require:true 

    }
},{timestamps:true}) 
export const UserDel=mongoose.model("UserDel",productdelivery)  
console.log(UserDel);
