import mongoose from "mongoose"; 
const productdelivery=new mongoose.Schema({
    location:{ 
        require:true, 
        address:String,  


    },
    pincode:{ 
        require:true,
        state:true,
        district:true,
        landmark:true

     
    }, 
    status:{ 
        type:String, 
        enum:[PENDING,ORDERED,CANCELLED],
        default:PENDING
    }
},{timestamps:true}) 
export const UserDel=mongoose.model("UserDel",productdelivery)  
console.log(UserDel);
