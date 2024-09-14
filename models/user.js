// Importaciones
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
//Definición del esquema de usuario
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});
//un hook de Mongoose que se ejecuta antes de que un usuario sea guardado en la base de datos
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 8);
  next();
});
//Método 
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};
// Exportación del modelo
module.exports = mongoose.model('User', userSchema); 
