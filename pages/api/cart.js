import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
    const body = JSON.parse(req.body);
    if(req.method == 'POST') {
        await sql`INSERT INTO Cart (Name, Author) VALUES (${body.title},${body.title});`;
    }
    res.status(201).json(body);
}