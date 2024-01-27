import mongoose from "mongoose";
const connectDB=async(DATABASE_URL)=>{
    try{
        const DB_OPTION={
            dbname:'cluster',
        }
        await mongoose.connect(DATABASE_URL,DB_OPTION);
        console.log("Connection Setup Sucseefully");
    }
    catch(err){
        console.log(err);
    }
}
export default connectDB