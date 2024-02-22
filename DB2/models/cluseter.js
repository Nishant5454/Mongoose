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
   password:{ 
      type:String,
      required:true,
      lowercase:true,
   },
})

const UserModel=mongoose.model('LoginData',userSchema); 

export default UserModel