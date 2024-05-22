const { Pool } = require('pg');

// Database connection URL
const connectionString = process.env.POSTGRES_URL;

// Create a new pool instance with the connection string
const pool = new Pool({
  connectionString: connectionString
});

async function createCartTable() {
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
// async function seedData() {
//   // Sample data to be seeded
//   const books = [
//     { name: 'Book A', author: 'Author A' },
//     { name: 'Book B', author: 'Author B' },
//     { name: 'Book C', author: 'Author C' },
//     // Add more sample data as needed
//   ];

//   try {
//     // Create the cart table first
//     await createCartTable();
//     // Iterate through each book and insert it into the cart table
//     for (const book of books) {
//       const queryText = 'INSERT INTO cart(name, author) VALUES($1, $2)';
//       const values = [book.name, book.author];
//       await pool.query(queryText, values);
//     }
//     console.log('Data seeded successfully.');
//   } catch (error) {
//     console.error('Error seeding data:', error);
//   } finally {
//     // Close database connection
//     await pool.end();
//   }
// }

createCartTable();
