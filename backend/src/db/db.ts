import * as schema from './schema'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

export const client = postgres("postgres://postgres:senha123@0.0.0.0:5431/equipamentos", {
    host                 : 'localhost',            
    port                 : 5431,          
    database             : 'equipamentos',            
    username             : 'postgres',            
    password             : 'senha123',            
  });
export const db = drizzle(client, {schema});