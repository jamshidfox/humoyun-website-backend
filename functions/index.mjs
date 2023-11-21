import express from 'express';
import serverless from 'serverless-http';
import Cars from '../route/Car';
import Login from '../route/User';
import Employees from '../route/Employes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const configURL =
  'mongodb+srv://admin:Admin12345@cluster0.af3utjh.mongodb.net/Cars?retryWrites=true&w=majority';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(configURL, { useUnifiedTopology: true })
  .then((result) => {})
  .catch((err) => {
    console.log(err);
  });
app.use('/cars', Cars);
app.use('/admin', Login);
app.use('/employees', Employees);

const handler2 = serverless(app);

export const handler = async (event, context) => {
  const result = await handler2(event, context);
  return result;
};
