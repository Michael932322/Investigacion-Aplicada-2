const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
app.use(bodyParser.json());
app.use('/api', authRoutes);

mongoose.connect(process.env.MONGO_URI);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
