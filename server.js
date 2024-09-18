//Importaciones y Configuración de Dependenciass
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

//Inicialización de la Aplicación Expresss
const app = express();
app.use(bodyParser.json());
app.use('/api', authRoutes);

//Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

//Iniciar el Servidorr
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
