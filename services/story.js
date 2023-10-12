const Database  = require('better-sqlite3');
const db        = new Database('gradia');

function getAll(database) {
    let db = new Database(database);
    const results = db.prepare('SELECT recap.id, title, story, stinger, acts.act FROM recap JOIN acts ON recap.act=acts.id').all();
    results.forEach(row => {
        let features = db.prepare(`SELECT characters.id AS character_id, appearances.id AS appearance_id, name FROM appearances JOIN characters ON appearances.character=characters.id WHERE appearances.session=${row.id}`).all()
        results[row.id - 1].features = features
        features.forEach(row => {
            row.link = `https://gradia.edsite.black/api/${database}/characters/${row.character_id}`
        })
        results[row.id - 1].permalink = `https://gradia.edsite.black/api/${database}/story/${results[row.id - 1].id}`
    })
    return results;
}

function getOne(id, database) {
    let db = new Database(database);
    const results = db.prepare(`SELECT recap.id, title, story, stinger, acts.act FROM recap JOIN acts ON recap.act=acts.id WHERE recap.id='${id}'`).get();
    const features = db.prepare(`SELECT characters.id AS character_id, appearances.id AS appearance_id, name FROM appearances JOIN characters ON appearances.character=characters.id WHERE appearances.session=${id}`).all();
    results.features = features
    features.forEach(row => {
        row.link = `https://gradia.edsite.black/api/${database}/characters/${row.character_id}`
    })
    return results;
}

module.exports = {
    getAll,
    getOne
}