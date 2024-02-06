import dotenv from 'dotenv' 
dotenv.config()
import express  from "express";
import mongoose from "mongoose"; 
import session from 'express-session';
import router from './Routes/Routes.js'

const app=express(); 
const port=process.env.port||2000; 
mongoose.connect(process.env.DB_URL,{useNewUrlParser: true}) 
const db=mongoose.connection; 
db.on('error',(error)=> console.log(error))
db.once('open',()=> console.log("Connection Sucssefull"));
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(session({
    secret:"my secret key",
    saveUninitialized:true,
    resave:false
})); 
app.use((req,res,next)=>{ 
    res.locals.message=req.session.message 
    delete req.session.message;
    next();
});
app.set('view engine','ejs') 
app.use(router)

app.get('/',(req,res)=>{ 
    res.send('<h1>Nishant kumar<h1>')
})



app.listen(port,()=>{
    console.log(`server is Listning at http://localhost:${port}`);
});