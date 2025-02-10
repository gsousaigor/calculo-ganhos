const express = require('express');
const mongoose = require('mongoose');
const Ganho = require('./models/Ganho');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/calculo-ganhos', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/calcular', async (req, res) => {
  const { salario, inss, irpf, dependentes, deducoes } = req.body;
  // Lógica de cálculo aqui
  const ganhoLiquido = salario - (inss + irpf + deducoes);
  res.json({ ganhoLiquido });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
