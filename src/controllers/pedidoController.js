const pedidoService = require('../services/pedidoService');

// Listar pedidos en curso
async function getPedidosEnCurso(req, res) {
  try {
    const { tenantId } = req.query;
    const pedidos = await pedidoService.listarPedidosPorEstado(tenantId, 'En Curso');
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Listar últimos pedidos cerrados
async function getUltimosPedidosCerrados(req, res) {
  try {
    const { tenantId } = req.query;
    const pedidos = await pedidoService.listarUltimosCerrados(tenantId);
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Crear pedido
async function crearPedido(req, res) {
  try {
    const data = req.body;
    const pedido = await pedidoService.crearPedido(data);
    res.status(201).json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Cerrar pedido
async function cerrarPedido(req, res) {
  try {
    const { id } = req.params;
    const { tenantId } = req.body;
    const pedido = await pedidoService.cerrarPedido(id, tenantId);
    if (!pedido) return res.status(404).json({ error: 'Pedido no encontrado' });
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getPedidosEnCurso,
  getUltimosPedidosCerrados,
  crearPedido,
  cerrarPedido,
}; 