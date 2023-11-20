import express from 'express';
import User from '../models/UserModel'; // Assuming the model is named AdminModel

const route = express.Router();

// Login route
route.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the admin by username
    const admin = await User.findOne({ username });
    if (admin) {
      if (admin.password == password) {
        res
          .status(200)
          .json({
            message: 'Logined successfully',
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
          });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(404).json({ message: 'Could not find' });
    }
    // If login is successful, send a success response
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

export default route;
