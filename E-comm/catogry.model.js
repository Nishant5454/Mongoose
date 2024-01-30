import mongoose from "mongoose"; 
const productcatogry=new mongoose.Schema({ 
    description:{ 
        type:String, 
        required:true,  
        unique:true

    }, 
    name:{ 
        type:String, 
        unique:true,
        lowercase:false,
        avilable:Boolean
    },
    image:{ 
        type:String, 
        unique:true, 
        avilable:Boolean
    }
},{timestamps:true}) 
export const productdata=mongoose.model("productdata",productcatogry)