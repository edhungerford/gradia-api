const express       = require('express');
const router        = express.Router();
const characters    = require('../../services/characters');

router.get('/', function(req, res, next) {
    try {
        res.json(characters.getAll());
    } catch(err) {
        console.error('Error while geting characters: ', err.message);
        next(err);
    }
});

router.get('/:id', function(req, res, next) {
    try {
        res.json(characters.getOne(req.params.id))
    } catch(err) {
        console.error('Error while getting character: ', err.message);
        next(err);
    }
})

module.exports = router;