import express from 'express';
import Cars from '../models/Model';
const route = express.Router();

route.get('/get_all', async (req, res) => {
  try {
    const cars = await Cars.find();
    res.json(cars);
  } catch (err) {
    res.status(400).send('error happened');
  }
});

route.post('/addNew', async (req, res) => {
  const { model, picture, blurb, engine } = req.body;

  try {
    // Check if required fields are present
    if (!model || !picture || !blurb || !engine) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    // Create a new car instance
    const newCar = new Cars({
      model,
      picture,
      blurb,
      engine,
    });

    // Save the new car to the database
    const savedCar = await newCar.save();

    res.status(201).json({ message: 'Car added successfully!', car: savedCar });
  } catch (err) {
    console.error('Error while adding car:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});
export default route;
