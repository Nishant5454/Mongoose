import mongoose from "mongoose"; 
const PaymentSchema=new mongoose.Schema({
    option:{ 
        type:String, 
        unique:true, 
        apps:true  

    }
},{timestamps:true}) 
export const userPayment=mongoose.model("userPayment",PaymentSchema)