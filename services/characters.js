const Database   = require('better-sqlite3');
const db        = new Database('gradia');
// const config    = require('../config');

function getAll() {
    const results = db.prepare("SELECT characters.id, name, pronouns, affiliations.affiliation, description, url FROM characters JOIN pronouns ON characters.pronounSet=pronouns.id JOIN affiliations on characters.affiliation = affiliations.id").all()
    results.forEach(row => {
        const appearances = db.prepare(`SELECT recap.id AS session_id, appearances.id AS appearance_id, title FROM appearances JOIN recap ON appearances.session=recap.id WHERE character=${row.id}`).all()
        results[row.id - 1].appearances = appearances
        appearances.forEach(row => {
            row.link = `http://gradia.edsite.black/api/story/${row.session_id}`
        })
        results[row.id - 1].permalink = `http://gradia.edsite.black/api/characters/${results[row.id - 1].id}`
    })
    return results;
}

function getOne(id) {
    const results = db.prepare(`SELECT characters.id, name, pronouns, affiliations.affiliation, description, url FROM characters JOIN pronouns ON characters.pronounSet=pronouns.id JOIN affiliations on characters.affiliation = affiliations.id WHERE characters.id=${id}`).get()
    const appearances = db.prepare(`SELECT recap.id AS session_id, appearances.id AS appearance_id, title FROM appearances JOIN recap ON appearances.session=recap.id WHERE character=${id}`).all()
    results.appearances = appearances
    appearances.forEach(row => {
        row.link = `http://gradia.edsite.black/api/story/${row.session_id}`
    })
    results.permalink = "http://gradia.edsite.black/api/characters" + `/${results.id}`
    return results;
}

module.exports = {
    getAll,
    getOne
}