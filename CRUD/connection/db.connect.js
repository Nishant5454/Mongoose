import mongoose from "mongoose"; 
const CONNECTION=async(URL)=>{ 
    try{ 
        const DB_OPTION={ 
            dbname:"Employee",
        }; 
        await mongoose.connect(URL,DB_OPTION);
        console.log("Database Connected to Server");
    }
    catch(err){ 
        console.log(err);
    }
}; 
export default CONNECTION; 
