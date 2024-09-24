import Fastify from 'fastify';
import { 
  serializerCompiler, 
  validatorCompiler 
} from "fastify-type-provider-zod";
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
    reply.status(401).send({ message: 'Token inválido ou ausente.' });
  }
});

// Rota de login
app.post('/login', async (request, reply) => {
  const { username, password } = request.body as { username: string; password: string };

  // Verifica se o usuário e senha estão corretos
  if (username === USERNAME && password === PASSWORD) {
    // Se estiver correto, gera o token JWT
    const token = app.jwt.sign({ username }, { expiresIn: '1m' }); // Token expira em 1 hora
    return reply.send({ token });
  }

  // Se as credenciais forem inválidas, retorna status 401
  return reply.status(401).send({ message: 'Usuário ou senha incorretos' });
});

// Rota protegida do dashboard, acessível apenas com o JWT
app.get('/dashboard', { preHandler: [app.authenticate] }, async (request, reply) => {
  const dashboardData = {
    message: "Bem-vindo ao dashboard protegido!",
    // Outros dados relevantes do dashboard...
  };
  
  reply.send(dashboardData);
});

// Rota para pegar todos os setores com equipamentos e componentes (pública)
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
