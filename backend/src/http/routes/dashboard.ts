// src/routes/dashboard.ts
import type { FastifyInstance } from 'fastify';

export default async function dashboardRoutes(app: FastifyInstance) {
  // Rota protegida do dashboard, acessível apenas com o JWT
  app.get('/dashboard', { preHandler: [app.authenticate] }, async (request, reply) => {
    const dashboardData = {
      message: "Bem-vindo ao dashboard protegido!",
      // Outros dados do dashboard...
    };
  
    reply.send(dashboardData);
  });
}
