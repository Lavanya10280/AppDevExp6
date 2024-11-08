const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Static JSON data about books
const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, price: "300", originalPrice: "450" },
    { id: 2, title: "1984", author: "George Orwell", year: 1949, price: "300", originalPrice: "570" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, price: "300", originalPrice: "500" }
];

// Root endpoint to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Endpoint to get all book data
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(books);
});
