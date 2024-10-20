import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg'
const { Pool } = pg
import { setoresTable } from "./schema";
// import { faker } from "@faker-js/faker";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });


if (!("DATABASE_URL" in process.env))
	throw new Error("DATABASE_URL not found on .env.development");

const main = async () => {
	const client = new Pool({
		connectionString: process.env.DATABASE_URL,
	});
	const db = drizzle(client);
	const data: (typeof setoresTable.$inferInsert)[] = [];

	const setores = [
		"Utilidades e Caldeira",
		"Operacional",
		"Preparação",
		"Extração",
		"Refinaria",
		"Envase",
	];

	for (const setor of setores) {
		data.push({
			name: setor,
		});
	}

	console.log("Seed start");
	await db.insert(setoresTable).values(data);
	console.log("Seed done");
};

main();

