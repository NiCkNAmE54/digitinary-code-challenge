import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
dotenv.config();

export const AppDataSource = new DataSource({
   type: 'mysql',
   host: process.env.MYSQL_DB_HOST,
   port: Number(process.env.MYSQL_DB_PORT),
   username: process.env.MYSQL_USER,
   password: process.env.MYSQL_PASSWORD,
   database: process.env.MYSQL_DB,
   synchronize: true,
   logging: true,
   entities: [
      'src/database/entities/*.ts',
   ],
   migrations: [
      'src/database/migrations/*.ts',
   ],
   subscribers: [
      'src/database/subscriber/**/*.ts',
   ],
   // cli: {
   //    entitiesDir: 'src/app/models',
   //    migrationsDir: 'src/database/migration',
   //    subscribersDir: 'src/subscriber',
   // },
})