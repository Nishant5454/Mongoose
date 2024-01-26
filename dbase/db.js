import mongoose from 'mongoose'; 
const connect=(DATABASE_URL)=>{ 
    return mongoose.connect(DATABASE_URL).then(()=>{
        console.log("Database Setup");
    }) 
    .catch((err)=>{ 
        console.log("Error is in the system");
    })
} 
export default connect