import express from 'express' 
const app=express();   
const port=3000; 
import connectd from './dbase/db.js';
import mongoose from 'mongoose'; 
const DATABASE_URL="mongodb://localhost:27017/cluster"

//mongoose.connect("mongodb://localhost:27017/cluster").then(()=>{
    //console.log("Data Connection SetUp Sucseesfully");
//}) 
connectd(DATABASE_URL);
createDoc();

app.listen(port); 
