import Fastify from 'fastify';
import { 
  serializerCompiler, 
  validatorCompiler, 
  type ZodTypeProvider 
} from "fastify-type-provider-zod";
import z from 'zod';
import { createEquipament } from './routes/create-equipament';
import fastifyCors from '@fastify/cors';
import fastifyJwt from '@fastify/jwt';
import fastifyFormBody from '@fastify/formbody';

const app = Fastify();

// Definir usuário e senha fixos
const USERNAME = 'admin';
const PASSWORD = 'password123';

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, { origin: '*' });
app.register(fastifyFormBody);

// Configuração do JWT
app.register(fastifyJwt, {
  secret: 'minha_chave_secreta_super_segura', // manter seguro em produção!
});

// Middleware para autenticação JWT
app.decorate("authenticate", async (request, reply) => {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.send(err);
  }
});

// Rota de login
app.post('/login', async (request, reply) => {
  const { username, password } = request.body as { username: string; password: string };

  // Verifica se o usuário e senha estão corretos
  if (username === USERNAME && password === PASSWORD) {
    // Se estiver correto, gera o token JWT
    const token = app.jwt.sign({ username });
    return reply.send({ token });
  }

  // Se as credenciais forem inválidas, retorna status 401
  return reply.status(401).send({ message: 'Usuário ou senha incorretos' });
});

// Rota protegida, apenas acessível com o JWT
app.get('/protected', { preHandler: [app.authenticate] }, async (request, reply) => {
  return reply.send({ message: 'Você acessou uma rota protegida!' });
});

// Rota para pegar todos os setores com equipamentos e componentes
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

// Inicializando o servidor
app
  .listen({
  port: 3001,
  })
  .then(() => {
  console.log('HTTP server is running!')
  })
