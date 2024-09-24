// src/routes/setores.ts
import type { FastifyInstance } from 'fastify';

export default async function setoresRoutes(app: FastifyInstance) {
  // Rota pública para pegar todos os setores com equipamentos e componentes
  app.get('/api/setores', async (request, reply) => {
    const data = [
      {
        setor: 'Laminador',
        equipamentos: [
          { nome: 'Rolamento', componentes: ['123456'] },
          { nome: 'Raspador', componentes: ['654321'] },
          { nome: 'Parafuso', componentes: ['678901'] },
          { nome: 'Parafuso de fixação', componentes: ['109876'] },
          { nome: 'Pistão hidráulico', componentes: ['109876'] },
        ]
      },
      {
        setor: 'Manutenção',
        equipamentos: [
          { nome: 'Chave de Fenda', componentes: ['Ponta'] },
          { nome: 'Martelo', componentes: ['Cabeça'] }
        ]
      }
    ];

    reply.send(data);
  });
}
