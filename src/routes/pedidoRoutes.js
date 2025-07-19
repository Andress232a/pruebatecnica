const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Listar pedidos en curso
router.get('/en-curso', pedidoController.getPedidosEnCurso);

// Listar últimos pedidos cerrados
router.get('/cerrados', pedidoController.getUltimosPedidosCerrados);

// Crear pedido
router.post('/', pedidoController.crearPedido);

// Cerrar pedido
router.put('/:id/cerrar', pedidoController.cerrarPedido);

module.exports = router; 