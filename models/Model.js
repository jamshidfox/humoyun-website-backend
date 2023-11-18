import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  model: String,
  picture: String,
  blurb: String,
  engine: String,
});

const Cars = mongoose.model('Cars', carSchema, 'all_cars');

export default Cars;
