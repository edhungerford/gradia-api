const Database = require('better-sqlite3')
const db = new Database('gradia', { verbose: console.log })
const characters = require('./services/characters');
const story = require('./services/story');
    
    // db.run("INSERT INTO characters (name, pronouns, description, affiliation, url) VALUES (?, ?, ?, ?, ?)", 
    // ['Enmides Brook', 
    // 'he/him', 
    // 'Dragonborn captain of the Raidyll Guard. Recently deputized our heroes.', 
    // 'Raidyll',
    // 'https://cdn.discordapp.com/attachments/916569335336677396/916736124481831022/Enmides.jpg']);

    // db.run("UPDATE characters SET id='1' WHERE name='Enmides Brook'")
    
    // Story.Story.forEach((element) => {
    //     element.sessions.forEach((element2) => {
    //         db.run("INSERT INTO recap (id, title, act, story, stinger) VALUES (?, ?, ?, ?, ?)",
    //         [
    //             count,
    //             element2.title,
    //             element.actName,
    //             element2.recap,
    //             element2.stinger
    //         ]);
    //         count++;
    //     })
    // })

    // db.each("SELECT * FROM recap WHERE act='Act 1: Wideseal'", (err, row) => { 
    //     console.log(row.id + ". " + row.title);
    // })
 
    // const getData = (name) => {
    //     return new Promise((resolve, reject) => {
    //         db.get(`SELECT * FROM characters WHERE name="${name}"`, (err, row) => {
    //             if(err) reject(err);
    //             resolve(row);
    //         })
    //     })
    // }

    // const results = characters.getOne('Enmides Brook')
    // console.table(results)

    // const allResults = characters.getAll();
    // console.table(allResults, ["name", "pronouns"])

    // const recap = story.getAll();
    // console.table(recap, ["title", "act"])

    // const results = db.prepare("SELECT characters.id, name, pronouns, affiliations.affiliation, description, url FROM characters JOIN pronouns ON characters.pronounSet=pronouns.id JOIN affiliations on characters.affiliation = affiliations.id").all()
    // results.forEach(row => {
    //     console.log(row.id)
    //     let appearances = db.prepare(`SELECT appearances.id, title FROM appearances JOIN recap ON appearances.session=recap.id WHERE character=${row.id}`).all()
    //     appearances = appearances.map(item => item.title)
    //     results[row.id - 1].appearances = appearances
    // })
    
    
    // console.table(results[1])

    


db.close();

