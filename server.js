const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares globales
app.use(express.json());
app.use(cors());
app.use(express.static('public')); // Sirve automáticamente los archivos estáticos del frontend

// NUEVA RUTA: Redirige la raíz al login automáticamente
app.get('/', (req, res) => {
    res.redirect('/login.html');
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado exitosamente a MongoDB'))
  .catch(err => console.error('❌ Error de conexión a MongoDB:', err));

// Rutas de la API
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/items', require('./routes/itemRoutes'));

// Middleware personalizado para manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Ocurrió un error interno en el servidor.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
