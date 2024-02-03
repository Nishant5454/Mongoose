import mongoose from 'mongoose'

// create an schema
var userSchema = new mongoose.Schema({
   name:{ 
      type:String,
      required:true, 
      lowercase:true,
   },
   email:{ 
      type:String, 
      required:true, 
      lowercase:true
   },
})

const userTable=mongoose.model('Student',userSchema); 
const userdata=async ()=>{ 
   try{
      const userdoc=new userTable({
         name:'Nishant',
         email:'mongoose@gmail.com'
      }) 
      const result=await userdoc.save();
      console.log(result); 
      
   }
   catch(error){
      console.log(error);
   }

} 
export default userdata