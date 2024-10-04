// src/routes/setores.ts
import type { FastifyInstance } from 'fastify';
import {resultSetores} from '../../db/index'

export default async function setoresRoutes(app: FastifyInstance) {
  // Rota pública para pegar todos os setores com equipamentos e componentes
  app.get('/api/setores', async (request, reply) => {


    const setor = await resultSetores

    reply.send(setor);
  });
}
