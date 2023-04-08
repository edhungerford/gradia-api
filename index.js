const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001 || process.env.PORT;
const charRouter    = require('./routes/characters/characters');
const storyRouter   = require('./routes/story/story');

app.use(cors());

app.get('/api', (req, res) => {
    res.json({
        gradia: "http://localhost:3001/api/gradia",
        bsbs: "http://localhost:3001/api/bsbs"
    })
})

//TAILS OF GRADIA
app.get('/api/gradia', (req, res) => {
    res.json({
        characters: 'http://localhost:3001/api/gradia/characters',
        story: "http://localhost:3001/api/gradia/story"});
});

app.use('/api/gradia/characters', charRouter);
app.use('/api/gradia/story', storyRouter);

//BLUE SKIES, BLACK SMOKE
app.get('/api/bsbs', (req, res) => {
    res.json({
        characters: 'http://localhost:3001/api/bsbs/characters',
        story: "http://localhost:3001/api/bsbs/story"});
});

app.use('/api/bsbs/characters', charRouter);
app.use('/api/bsbs/story', storyRouter);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})