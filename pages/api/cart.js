import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
    const body = JSON.parse(req.body);
    if(req.method == 'POST') {
        await sql`INSERT INTO cart (Name, Author) VALUES (${body.name},${body.name});`;
    }
    res.status(201).json(body);
}