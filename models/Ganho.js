const mongoose = require('mongoose');

const GanhoSchema = new mongoose.Schema({
  salario: Number,
  inss: Number,
  irpf: Number,
  dependentes: Number,
  deducoes: Number
});

module.exports = mongoose.model('Ganho', GanhoSchema);
