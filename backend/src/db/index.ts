import {db} from './db';


export const resultSetores = db.query.setoresTable.findMany()