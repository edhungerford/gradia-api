const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001 || process.env.PORT;
const charRouter    = require('./routes/characters/characters');
const storyRouter   = require('./routes/story/story');

app.use(cors());

app.get('/api', (req, res) => {
    res.json({
        gradia: "https://gradia.edsite.black/api/gradia",
        bsbs: "https://gradia.edsite.black/api/bsbs"
    })
})

//TAILS OF GRADIA
app.get('/api/gradia', (req, res) => {
    res.json({
        characters: 'https://gradia.edsite.black/api/gradia/characters',
        story: "https://gradia.edsite.black/api/gradia/story"});
});

app.use('/api/gradia/characters', charRouter);
app.use('/api/gradia/story', storyRouter);

//BLUE SKIES, BLACK SMOKE
app.get('/api/bsbs', (req, res) => {
    res.json({
        characters: 'https://gradia.edsite.black/api/bsbs/characters',
        story: "https://gradia.edsite.black/api/bsbs/story"});
});

app.use('/api/bsbs/characters', charRouter);
app.use('/api/bsbs/story', storyRouter);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})