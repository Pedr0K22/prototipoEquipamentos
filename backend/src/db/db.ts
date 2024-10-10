import * as schema from './schema'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import {env} from '../env'

export const client = postgres(env.DATABASE_URL, {
    host                 : env.DATABASE_HOST,            
    port                 : Number.parseInt(env.DATABASE_PORT),         
    database             : env.DATABASE,            
    username             : env.DATABASE_USERNAME,            
    password             : env.DATABASE_PASSWORD,            
  });
  
export const db = drizzle(client, {schema});
