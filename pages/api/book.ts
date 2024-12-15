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
  if(req.method == 'GET') {
    const data = await sql`SELECT * from book`;
    res.status(200).json(data.rows as any);
  }
}