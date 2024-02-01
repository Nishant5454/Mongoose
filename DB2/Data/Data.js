import mongoose from "mongoose";
const connectDB=async(URL)=>{
    try{
        const DB_OPTIONS={
            dbname:'Nishant',
        }
        await mongoose.connect(URL,DB_OPTIONS);
        console.log("Connection Setup Sucseefully");
    }
    catch(err){
        console.log(err);
    }
}
export default connectDB 
