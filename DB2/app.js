import express from "express"; 
import connectDB from "./Data/Data.js"; 
import userdata from "./models/cluseter.js" 
import web from './router/web.js' 
const URL="mongodb://localhost:27017"  
connectDB(URL);
const app=express(); 
app.set('view engine','ejs')  
app.use(express.urlencoded({extended: true}))

const port=3000; 



userdata();  
app.use('/',web) 



app.listen(port,()=>{ 
    console.log(`Server is Listning at http://localhost:${port}`);
})
