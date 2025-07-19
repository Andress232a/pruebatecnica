const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  productos: [
    {
      producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
      cantidad: { type: Number, required: true },
      precio: { type: Number, required: true },
    }
  ],
  estado: { type: String, enum: ['En Curso', 'Cerrado'], default: 'En Curso' },
  total: { type: Number, required: true },
  cliente: { type: String },
  horaInicio: { type: Date, default: Date.now },
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
});

module.exports = mongoose.model('Pedido', PedidoSchema); 