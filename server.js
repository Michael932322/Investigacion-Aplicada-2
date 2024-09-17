//Importaciones y configuración de dependencias
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

//Inicialización de la aplicación Express
const app = express();
app.use(bodyParser.json());
app.use('/api', authRoutes);

//Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

//Iniciar el servidor
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
