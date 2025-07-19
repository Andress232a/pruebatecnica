const productoService = require('../services/productoService');

// Listar productos por tenant
async function getProductos(req, res) {
  try {
    const { tenantId } = req.query;
    const productos = await productoService.listarProductosPorTenant(tenantId);
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Crear producto
async function crearProducto(req, res) {
  try {
    const data = req.body;
    const producto = await productoService.crearProducto(data);
    res.status(201).json(producto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getProductos,
  crearProducto,
}; 