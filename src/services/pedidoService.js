const Pedido = require('../models/Pedido');

// Listar pedidos por tenant y estado
async function listarPedidosPorEstado(tenantId, estado) {
  return Pedido.find({ tenantId, estado }).populate('productos.producto');
}

// Listar últimos pedidos cerrados (limit 5)
async function listarUltimosCerrados(tenantId) {
  return Pedido.find({ tenantId, estado: 'Cerrado' })
    .sort({ horaInicio: -1 })
    .limit(5)
    .populate('productos.producto');
}

// Crear un nuevo pedido
async function crearPedido(data) {
  const pedido = new Pedido(data);
  return pedido.save();
}

// Cerrar un pedido
async function cerrarPedido(pedidoId, tenantId) {
  return Pedido.findOneAndUpdate(
    { _id: pedidoId, tenantId },
    { estado: 'Cerrado' },
    { new: true }
  );
}

module.exports = {
  listarPedidosPorEstado,
  listarUltimosCerrados,
  crearPedido,
  cerrarPedido,
}; 