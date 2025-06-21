const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const foodRoutes = require('./routes/foodRoutes');
const cors = require('cors');
const connectDB = require('./config/db');

connectDB();
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/foods', foodRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
  .catch(err => console.error(err));
