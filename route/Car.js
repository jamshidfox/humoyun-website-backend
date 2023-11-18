import express from 'express';
import Cars from '../models/Model';
const route = express.Router();

route.get('/get_all', async (req, res) => {
  try {
    const cars = await Cars.find();
    res.send(cars);
  } catch (err) {
    res.status(400).send('error happened');
  }
});

route.post('/addNew', async (req, res) => {
  const { model, picture, blurb, engine } = req.body;

  res.send('working');
});
export default route;
