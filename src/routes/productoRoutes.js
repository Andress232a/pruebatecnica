const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Listar productos por tenant
router.get('/', productoController.getProductos);

// Crear producto
router.post('/', productoController.crearProducto);

module.exports = router; 