const mongoose = require('mongoose');

const TenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Puedes agregar más campos según necesidad
});

module.exports = mongoose.model('Tenant', TenantSchema); 