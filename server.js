const express = require('express');


const characters = require('./routes/api/characters');
const movies = require('./routes/api/movies');

const app = express();



app.get('/', (req, res) => res.send('Hello World'));

// Use Routes
app.use('/api/characters', characters);
app.use('/api/movies', movies);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
