const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001 || process.env.PORT;
const charRouter    = require('./routes/characters/characters');
const storyRouter   = require('./routes/story/story');

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        characters: 'https://gradia.edsite.black/characters',
        story: "httpss://gradia.edsite.black/story"});
});

app.use('/characters', charRouter);
app.use('/story', storyRouter);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})