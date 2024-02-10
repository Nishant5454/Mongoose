import mongoose from "mongoose"; 
const EmployeeSchema=new mongoose.Schema({
    name:{ 
        type:String,
        require:true,
        Boolean:true,
    },
    code:{ 
        type:Number, 
        require:true,
        Boolean:true, 
        
    },
    Salary:{
        type:Number,
        require:true,
        min:5000,
        max:50000,

    },
    City:{ 
        type:Number,
        require:true,

    },

})
const employeemodel=mongoose.model("employee",EmployeeSchema); 
export default employeemodel;
