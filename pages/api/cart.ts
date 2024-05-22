import type { NextApiRequest, NextApiResponse } from 'next'
import { createPool, sql } from '@vercel/postgres';

// Database connection configuration
const pool = createPool({
  connectionString: process.env.POSTGRES_URL // Use environment variable for database URL
});

type ResponseData = {
  title: string;
}
export default async function handler(  
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const { name, cover, price } = JSON.parse(req.body);
    const query = await sql`SELECT quantity FROM cart WHERE name = ${name}`;    
    const quantity = query.rowCount > 0 ? parseInt(query.rows[0].quantity) : null;
    if(quantity) {
      await sql`UPDATE cart
      SET quantity=${quantity+1}
      WHERE name = ${name}`;
    } else {
      await sql`INSERT INTO cart (name, cover, price, quantity)
      VALUES (${name}, ${cover}, ${price}, 1)`;
    }
    
    res.status(201).json("kJSDJ" as any);
  } else if (req.method === 'DELETE') {
    const { id } = JSON.parse(req.body);
    await sql`DELETE FROM cart WHERE id = ${id}`; 
    res.status(202).json("kJSDJ" as any);
  } else {
    const data = await sql`SELECT * from cart`;
    res.status(200).json(data.rows as any);
  }
}

