import Fastify from 'fastify';
import { 
  serializerCompiler, 
  validatorCompiler, 
  type ZodTypeProvider 
} from "fastify-type-provider-zod";
import z from 'zod';
import { createEquipament } from './routes/create-equipament';
import fastifyCors from '@fastify/cors';

const app = Fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEquipament)

// Inicializando o servidor
app
  .listen({
  port: 3001,
  })
  .then(() => {
  console.log('HTTP server is running!')
  })

// Middleware
app.register(fastifyCors, {
  origin: '*',
});

app.register(async (fastify) => {
  fastify.addHook('preHandler', async (request, reply) => {
    // Isso adiciona middleware JSON automaticamente para Fastify
  });
});

// Simulação de dados para os setores, equipamentos e componentes
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
  },
  {
    setor: 'Batata',
    equipamentos: [
      { nome: 'frita', componentes: ['Óleo'] },
      { nome: 'Martelo', componentes: ['Cabeça'] }
    ]
  }

];


// Rota para pegar todos os setores com equipamentos e componentes
app.get('/api/setores', async (request, reply) => {
  reply.send(data);
});

