import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date }, 
  age: {type:Number,required:true,min:18,max:20}, 
  isActive: {type:Boolean}
}); 
const Authormodel=mongoose.model('AUTHOR',AuthorSchema)