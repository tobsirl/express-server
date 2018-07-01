import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quanity: {
    type: Number,
    required: true
  }
});

export default mongoose.model('item', ItemSchema);
