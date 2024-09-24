// src/routes/auth.ts
import type { FastifyInstance } from 'fastify';

export default async function authRoutes(app: FastifyInstance) {
  // Rota de login
  app.post('/login', async (request, reply) => {
    const { username, password } = request.body as { username: string; password: string };

    // Verifica se o usuário e senha estão corretos
    const USERNAME = 'admin';
    const PASSWORD = 'password123';
    
    if (username === USERNAME && password === PASSWORD) {
      // Gera o token JWT
      const token = app.jwt.sign({ username }, { expiresIn: '1h' });
      return reply.send({ token });
    }

    // Credenciais inválidas
    return reply.status(401).send({ message: 'Usuário ou senha incorretos' });
  });
}
