const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001; // Permitir configuração da porta via variável de ambiente

// Middleware
app.use(cors());
app.use(express.json());

// Simulação de dados para os setores, equipamentos e componentes
const data = [
  {
    setor: 'Limpeza',
    equipamentos: [
      { nome: 'Aspirador', componentes: ['Motor', 'Filtro', 'Mangueira'] },
      { nome: 'Lavadora', componentes: ['Bomba de água', 'Escova', 'Reservatório de sabão'] }
    ]
  },
  {
    setor: 'Manutenção',
    equipamentos: [
      { nome: 'Chave de Fenda', componentes: ['Ponta', 'Cabo'] },
      { nome: 'Martelo', componentes: ['Cabeça', 'Cabo'] }
    ]
  }
];

// Rota para pegar todos os setores com equipamentos e componentes
app.get('/api/setores', (req, res) => {
  res.json(data);
});

// Servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}); 