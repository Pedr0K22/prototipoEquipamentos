import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';


export const setoresTable = pgTable('setores', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
});




