import express from 'express'
const app=express(); 
const port=3000;
import mongoose from "mongoose"; 
const URL="mongodb://localhost:27017/cluster"
import connection from './Data/Data.js'; 
connection(URL) 
app.listen(port)