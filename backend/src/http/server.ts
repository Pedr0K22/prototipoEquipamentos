import Fastify from 'fastify';
import cors from '@fastify/cors';

const app = Fastify();
const port = process.env.PORT || 3001;

// Middleware
app.register(cors);
app.register(async (fastify) => {
  fastify.addHook('preHandler', async (request, reply) => {
    // Isso adiciona middleware JSON automaticamente para Fastify
  });
});

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
app.get('/api/setores', async (request, reply) => {
  reply.send(data);
});

// Inicializando o servidor
app.listen({ port: Number(port), host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando na porta ${address}`);
});
