import { Schema,model,models, SchemaType } from 'mongoose'
import mongoose from 'mongoose';
  
const UserProduct = new mongoose.Schema({
    namaproduk: {
      type: String,
      required: [true, "Please provide a Name"],
    },
    harga: {
      type: Number,
      required: [true, "Please provide an Email"],
    },
    deskripsi: {
      type: String,
      required: [true, "Please provide a City"]
    },
    ownerid: {
      type: String
    }
});
  
export default mongoose.models.Product || mongoose.model('Product', UserProduct);
