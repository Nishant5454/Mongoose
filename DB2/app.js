import express from "express";  
import connectDB from "./Data/Data.js"; 
import userdata from "./models/cluseter.js"

const app=express();
const port=3000;  
const URL="mongodb://localhost:27017"  
connectDB(URL)
userdata();


app.listen(port,()=>{ 
    console.log(`Server is Listning at http://localhost:${port}`);
})
