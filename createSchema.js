const Database = require('better-sqlite3')
const db = new Database('gradia', { verbose: console.log })

try{
db.prepare(`DROP TABLE IF EXISTS pronouns`).run();
} catch(err) { console.log(err.message) }
db.prepare(`DROP TABLE IF EXISTS acts`).run();
db.prepare(`DROP TABLE IF EXISTS affiliations`).run();
db.prepare(`DROP TABLE IF EXISTS characters`).run();
db.prepare(`DROP TABLE IF EXISTS recap`).run();
db.prepare(`DROP TABLE IF EXISTS appearances`).run();

db.prepare(`CREATE TABLE IF NOT EXISTS characters ( 
id INTEGER PRIMARY KEY,
name TEXT NOT NULL UNIQUE,
pronounSet INT NOT NULL,
description TEXT NOT NULL,
affiliation TEXT,
url TEXT,
FOREIGN KEY(pronounSet) REFERENCES pronouns(id) ON DELETE CASCADE,
FOREIGN KEY(affiliation) REFERENCES affiliations(id) ON DELETE CASCADE)`).run();

db.prepare(`CREATE TABLE IF NOT EXISTS recap (
id INTEGER PRIMARY KEY,
title TEXT NOT NULL,
act TEXT,
story TEXT NOT NULL,
stinger TEXT,
FOREIGN KEY(act) REFERENCES acts(id) ON DELETE CASCADE)`).run();

db.prepare(`CREATE TABLE IF NOT EXISTS pronouns ( 
id INTEGER PRIMARY KEY,
pronouns TEXT NOT NULL)`).run();

db.prepare(`CREATE TABLE IF NOT EXISTS affiliations (
id INTEGER PRIMARY KEY,
affiliation TEXT NOT NULL)`).run();

db.prepare(`CREATE TABLE IF NOT EXISTS appearances (
id INTEGER PRIMARY KEY,
character TEXT NOT NULL,
session TEXT NOT NULL,
died TEXT,
FOREIGN KEY(character) REFERENCES characters(id) ON DELETE CASCADE,
FOREIGN KEY(session) REFERENCES recap(id) ON DELETE CASCADE)`).run();

db.prepare(`CREATE TABLE IF NOT EXISTS acts (
id INTEGER PRIMARY KEY,
act TEXT NOT NULL)`).run();

db.close();