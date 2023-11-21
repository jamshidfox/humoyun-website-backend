import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  model: String,
  picture: String,
  blurb: String,
  engine: String,
});

const Employees = mongoose.model('Employees', employeeSchema, 'employees');

export default Employees;
