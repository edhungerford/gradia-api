const express       = require('express');
const router        = express.Router();
const recap         = require('../../services/story');

router.get('/', function(req, res, next) {
    try {
        res.json(recap.getAll());
    } catch(err) {
        console.error('Error while getting recap: ', err.message);
        next(err);
    }
});

router.get('/:id', function(req, res, next) {
    try {
        res.json(recap.getOne(req.params.id))
    } catch(err) {
        console.error('Error while getting recap: ', err.message);
        next(err);
    }
})

module.exports = router;