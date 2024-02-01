import express from "express";  
import connectDB from "./Data/Data.js"; 
import './models/cluseter.js'

const app=express();
const port=3000;  
const URL="mongodb://localhost:27017"  
connectDB(URL)



app.listen(port,()=>{ 
    console.log(`Server is Listning at http://localhost:${port}`);
})
