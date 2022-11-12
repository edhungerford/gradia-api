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

    const ten = {
        "title": "Session 10: High Tide",
        "act": "2",
        "story": "Having received word of Guido's distress signal, the party and Silt commandeer a vehicle into the desert. They arrive at a huge cave, once well-known amongst daredevils for being haunted. Once inside, they notice a shallow layer of water on the ground, and rooms which seem to display a tableaux of a child being raised. Gal determines that the water here is of the same kind as the water in Nadir's phials (by drinking it).\nThe party soon finds they are trapped inside the cave, their entrance having been blocked by magical means. Electing to split up, Piper and Gal go north, while the Mariner and Silt go west. When Piper and Gal are accosted by a water elemental, Silt immediately notices and warns the Mariner, but in trying to circumnavigate to where they are, the Mariner runs into another elemental! The Mariner's group manage to take down their foe with minimal damage suffered, but the other group is not so lucky. By the time the Mariner makes it back to the other group, their unconscious forms are nowhere to be found.\nSilt and the Mariner continue to explore the cave, with Silt reasoning that Piper and Gal must be further inside the cave. Although they find the odd treasure, clues are sparse. They finally enter into a wide room, which contains none other than Methuselah, the head of the Mariners...",
        "stinger": "A puppet is an object, often resembling a human, animal or mythical figure, that is animated or manipulated by a person called a puppeteer."
    }

    const tenAppearances = [
        {
            "character":"1",
            "session":"16",
            "died": ""
        },
        {
            "character":"2",
            "session":"16",
            "died":""
        },
        {
            "character":"3",
            "session":"16",
            "died":""
        },
        {
            "character":"15",
            "session":"16",
            "died":""
        }
    ]
    
    let appearancesStmt = db.prepare("INSERT INTO appearances (character, session, died) VALUES (?,?,?)");
    let recapStmt = db.prepare("INSERT INTO recap (title, act, story, stinger) VALUES (?,?,?,?)");

    const insertRecap = db.transaction((recap, appear) => {
        console.log(recap.title)
        recapStmt.run(recap.title, recap.act, recap.story, recap.stinger);
        for(const appearance of appear) appearancesStmt.run(appearance.character, appearance.session, appearance.died);
    })

    insertRecap(ten, tenAppearances);

    //comment
    

db.close();

