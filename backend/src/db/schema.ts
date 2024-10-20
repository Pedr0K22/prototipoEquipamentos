import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';


export const setores = pgTable('setores', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
});


