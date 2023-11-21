import express from 'express';
import Employees from '../models/Employees';
const route = express.Router();

// Login route

route.get('/get_all', async (req, res) => {
  const employees = await Employees.find();
  res.status(200).json(employees);
});

export default route;
