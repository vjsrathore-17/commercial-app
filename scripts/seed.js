import { sql } from "@vercel/postgres";

sql`CREATE TABLE Cart ( Name varchar(255), Author varchar(255) );`;