import express from "express"; 
import mongoose from "mongoose";  
import CONNECTION from "./connection/db.connect.js";
const app=express();   
app.set('view engine','ejs')
import web from './Routes/web.js'
const PORT=3000; 
const URL="mongodb://localhost:27017" 
CONNECTION(URL); 
app.use('/',web)





app.listen(PORT,()=>{ 
    console.log(`Server is Listning at http://localhost:${PORT}`);
})