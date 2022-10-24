const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001 || process.env.PORT;
const charRouter    = require('./routes/characters/characters');
const storyRouter   = require('./routes/story/story');

app.use(cors());

app.get('/api', (req, res) => {
    res.json({
        characters: 'http://localhost:3001/characters',
        story: "http://localhost:3001/story"});
});

app.use('/api/characters', charRouter);
app.use('/api/story', storyRouter);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})