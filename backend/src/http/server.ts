import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyJwt from '@fastify/jwt';
import fastifyFormBody from '@fastify/formbody';

// Importar as rotas separadas
import authRoutes from './routes/auth';
import dashboardRoutes from './routes/dashboard';
import setoresRoutes from './routes/setores';

const app = Fastify();

// Configurações gerais
app.register(fastifyCors, { origin: '*' });
app.register(fastifyFormBody);
app.register(fastifyJwt, {
  secret: 'minha_chave_secreta_super_segura', // manter seguro em produção!
});

// Middleware para autenticação JWT
app.decorate("authenticate", async (request, reply) => {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.status(401).send({ message: 'Token inválido ou ausente.' });
  }
});

// Registrar as rotas separadas
app.register(authRoutes);       // Rotas de autenticação
app.register(dashboardRoutes);  // Rotas protegidas (ex: dashboard)
app.register(setoresRoutes);    // Rotas públicas

// Inicializando o servidor
app
  .listen({ port: 3001 })
  .then(() => {
    console.log('meu ovwdwdwdo')
  });
