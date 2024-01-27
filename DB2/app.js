import express from 'express' 
import connection from './Data/Data.js' 
import './models/cluseter.js'
const app=express(); 
const port=3000;
import mongoose from "mongoose"; 

const URL="mongodb://localhost:27017/cluster"

connection(URL) 
app.listen(port)