const Sequelize = require('sequelize');

// Connect to the database
const sequelize = new Sequelize('employeedb', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define a random table "Book"
const Book = sequelize.define('book', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genre: {
    type: Sequelize.STRING
  }
});

// Define another random table "Author"
const Author = sequelize.define('author', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nationality: {
    type: Sequelize.STRING
  }
});

// Define an association between Book and Author
Book.belongsTo(Author, { foreignKey: 'authorId', as: 'BookAuthor' });
Author.hasMany(Book, { foreignKey: 'authorId', as: 'AuthorBooks' });

// Synchronize the models with the database
sequelize.sync({ force: true })
  .then(() => {
    // Insert sample data into the Author table
    return Author.bulkCreate([
      { name: 'John Doe', nationality: 'American' },
      { name: 'Jane Smith', nationality: 'British' },
      { name: 'Bob Johnson', nationality: 'Canadian' }
    ]);
  })
  .then(() => {
    // Insert sample data into the Book table
    return Book.bulkCreate([
      { title: 'The Mystery', authorId: 1, genre: 'Mystery' },
      { title: 'Adventure Awaits', authorId: 2, genre: 'Adventure' },
      { title: 'Romantic Moments', authorId: 3, genre: 'Romance' }
    ]);
  })
  .then(() => {
    // Retrieve and display all books with associated authors
    return Book.findAll({
      include: [{ model: Author, as: 'BookAuthor' }]
    });
  })
  .then((booksWithAuthors) => {
    const booksJson = booksWithAuthors.map((book) => ({
      title: book.title,
      author: {
        name: book.BookAuthor.name,
        nationality: book.BookAuthor.nationality
      },
      genre: book.genre
    }));

    console.log('Books with Authors (JSON format):');
    console.log(JSON.stringify(booksJson, null, 2));
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
