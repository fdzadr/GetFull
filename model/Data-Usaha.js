import { Schema,model,models } from 'mongoose'
import mongoose from 'mongoose';
  
const UserUsaha = new mongoose.Schema({
    namaresto: {
      type: String,
      required: [true, "Please provide a Resto Name"],
    },
    alamat: {
      type: String,
      required: [true, "Please provide an Address"],
    },
    jenis: {
        type: String,
        required: [true, "Please provide a Resto Type"]
    },
    ownerid: {
      type:String
    }
});
  
export default mongoose.models.Usaha || mongoose.model("Usaha", UserUsaha);
  
