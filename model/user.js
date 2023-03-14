import { Schema,model,models } from 'mongoose'
import mongoose from 'mongoose';
  
const UserSchema = new mongoose.Schema({
    phonenumber: {
      type: String,
      required: [true, "Please provide a Phone Number"],
      unique:true,
    },
    username: {
        type: String,
        required:[true,"Please provide a Username"]
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      min: [8, "Must be greater then 8 and less then 20 characters long"],
      max: [20, "Must be greater then 8 and less then 20 characters long"],
    },
    cpassword: {
        type: String,
        required: [true, "Please provide a password"]
    }
});
  
export default mongoose.models.User || mongoose.model("User", UserSchema);
  
