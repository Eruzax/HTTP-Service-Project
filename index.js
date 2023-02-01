//Kaden Kwan Period 7-8 Even 1/31/2023
/*Tools: code editor, browser, command line utility, 
application and server utility, API platform
*/
const express = require('express');
const app = express();
app.use(express.json());

let genres = [
  { id: 1, name: 'Pop', year: 1990 },
  { id: 2, name: 'Hip Hop', year: 2000 },
  { id: 3, name: 'Rap', year: 1990 },
  { id: 4, name: 'Classical', year: 1700 },
  { id: 5, name: 'Rock', year: 1960 },
  { id: 6, name: 'Jazz', year: 1920 },
  { id: 7, name: 'Blues', year: 1910 },
  { id: 8, name: 'Electronic', year: 1980 },
];
//=========== ROUTES FOR HTTP GET REQUESTS ==========
// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Music App! <br> Kaden Kwan');
});
  
  // Get all genres
  app.get('/genres', (req, res) => {
    res.json(genres);
});
  
  // Get genre by id
  app.get('/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) 
    {
        return res.status(404).send('Genre not found');
    }
    res.send(genre);
});
  
  // Filter genres by year and month
  app.get('/genres/filter', (req, res) => {
    const year = req.query.year;
    const month = req.query.month;
    if (!year || !month) 
    {
        return res.status(400).send('Year and month are required');
    }
    const filteredGenres = genres.filter(g => g.year === parseInt(year) && g.month === month);
    res.send(filteredGenres);
});


//=========== ROUTES FOR HTTP POST REQUESTS ==========
// Add a new genre
app.post('/genres', (req, res) => {
    const { name, year } = req.body;
    if (!name || name.length < 3)
    {
        return res.status(400).send('Name is required and should have at least 3 characters');
    }
    const genre = { id: genres.length + 1, name, year };
    genres.push(genre);
    res.send(genre);
});


//=========== ROUTES FOR HTTP PUT REQUESTS ==========
// Update a genre
app.put('/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) {
        return res.status(404).send('Genre not found');
    }
    const { name, year } = req.body;
    if (!name || name.length < 3) 
    {
        return res.status(400).send('Name is required and should have at least 3 characters');
    }
    genre.name = name;
    genre.year = year;
    res.send(genre);
});


//=========== ROUTES FOR HTTP DELETE REQUESTS ==========
// Delete a genre
app.delete('/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) 
    {
        return res.status(400).send("Genre not found.");
    }
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});  

app.listen(3000, () => {
    console.log('Listening on port 3000 ....');
});

//(1) How programs communicate in what order to each other for a given purpose.
//When a specific request is made from the user, the program respond with the corressponding request that outputs what the user triggered.

//(2) what you learned in this project.
// I learned the use of the different requests and how to apply them.

//(3) how can this project be further extended.
// This project can be further extended by add more features like adding actual songs to the category that can be played.