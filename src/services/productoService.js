const Producto = require('../models/Producto');

// Listar productos por tenant
async function listarProductosPorTenant(tenantId) {
  return Producto.find({ tenantId });
}

// Crear producto
async function crearProducto(data) {
  const producto = new Producto(data);
  return producto.save();
}

module.exports = {
  listarProductosPorTenant,
  crearProducto,
}; 