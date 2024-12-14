const { Pool } = require('pg');

// Database connection URL
const connectionString = process.env.POSTGRES_URL;

async function createCartTable() {
  // Create a new pool instance with the connection string
  const pool = new Pool({
    connectionString: connectionString
  });
  try {
    const queryText = `
      DROP TABLE IF EXISTS cart;
      CREATE TABLE cart (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        cover VARCHAR(255) NOT NULL,
        price VARCHAR(255) NOT NULL,
        quantity VARCHAR(255) NOT NULL
      )
    `;
    await pool.query(queryText);
    console.log('Cart table created successfully.');
  } catch (error) {
    console.error('Error creating cart table:', error);
  } finally {
    // Close database connection
    await pool.end();
  }
}
// Function to seed data into the cart table
async function createBookTable() {
  // Sample data to be seeded
  const books = [
    { name: 'Book A', author: 'Author A', cover: "https://picsum.photos/id/1/200/300", price: "$1", categories: ["Sci-Fi"]},
    { name: 'Book B', author: 'Author B', cover: "https://picsum.photos/id/2/200/300", price: "$2", categories: ["Fictional"] },
    { name: 'Book C', author: 'Author C', cover: "https://picsum.photos/id/3/200/300", price: "$3", categories: ["Drama", "Romance"] },
  ];
  // Create a new pool instance with the connection string
  const pool = new Pool({
    connectionString: connectionString
  });

  try {
    const queryText = `
      DROP TABLE IF EXISTS book;
      CREATE TABLE book (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        cover VARCHAR(255) NOT NULL,
        price VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        categories TEXT[]
      )
    `;
    await pool.query(queryText);
    console.log('Book table created successfully.');
    // Iterate through each book and insert it into the cart table
    for (const book of books) {
      const queryText = 'INSERT INTO book(name, author, cover, price, categories) VALUES($1, $2, $3, $4, $5)';
      const values = [book.name, book.author, book.cover, book.price, book.categories];
      await pool.query(queryText, values);
    }
    console.log('Data seeded successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Close database connection
    await pool.end();
  }
}
createBookTable();
createCartTable();
