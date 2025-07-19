const express = require('express');
const connectDB = require('../config/db');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Importar rutas
const pedidoRoutes = require('./routes/pedidoRoutes');
const productoRoutes = require('./routes/productoRoutes');

// Usar rutas
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/productos', productoRoutes);

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
