import mongoose  from "mongoose"; 
const subSchema=mongoose.Schema({ 
    subTodo:[{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    ]

},{timestamps:true}) 
 export const Subtodo=mongoose.model("Sutodo",subSchema); 
 