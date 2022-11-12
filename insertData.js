const Database = require('better-sqlite3');
const { query } = require('express');
const db = new Database('gradia', { verbose: console.log })

let acts = [
    {
     "act": "Act 1: Wideseal"
    },
    {
     "act": "Act 2: Deputies"
    }
];


let affiliations = [
    {
     "affiliation": "Party"
    },
    {
     "affiliation": "Wideseal"
    },
    {
     "affiliation": "Mariners"
    },
    {
     "affiliation": "Others"
    }
];

let appearances = [
    {
     "character": "9",
     "session": "2",
     "died": ""
    },
    {
     "character": "2",
     "session": "2",
     "died": ""
    },
    {
     "character": "7",
     "session": "2",
     "died": ""
    },
    {
     "character": "3",
     "session": "2",
     "died": ""
    },
    {
     "character": "16",
     "session": "2",
     "died": ""
    },
    {
     "character": "1",
     "session": "2",
     "died": ""
    },
    {
     "character": "15",
     "session": "2",
     "died": ""
    },
    {
     "character": "1",
     "session": "3",
     "died": ""
    },
    {
     "character": "2",
     "session": "3",
     "died": ""
    },
    {
     "character": "3",
     "session": "3",
     "died": ""
    },
    {
     "character": "7",
     "session": "3",
     "died": ""
    },
    {
     "character": "9",
     "session": "3",
     "died": ""
    },
    {
     "character": "13",
     "session": "3",
     "died": ""
    },
    {
     "character": "1",
     "session": "4",
     "died": ""
    },
    {
     "character": "2",
     "session": "4",
     "died": ""
    },
    {
     "character": "3",
     "session": "4",
     "died": ""
    },
    {
     "character": "7",
     "session": "4",
     "died": ""
    },
    {
     "character": "13",
     "session": "4",
     "died": ""
    },
    {
     "character": "15",
     "session": "4",
     "died": ""
    },
    {
     "character": "1",
     "session": "5",
     "died": ""
    },
    {
     "character": "2",
     "session": "5",
     "died": ""
    },
    {
     "character": "3",
     "session": "5",
     "died": ""
    },
    {
     "character": "4",
     "session": "5",
     "died": ""
    },
    {
     "character": "5",
     "session": "5",
     "died": ""
    },
    {
     "character": "6",
     "session": "5",
     "died": ""
    },
    {
     "character": "7",
     "session": "5",
     "died": ""
    },
    {
     "character": "9",
     "session": "5",
     "died": ""
    },
    {
     "character": "18",
     "session": "5",
     "died": ""
    },
    {
     "character": "15",
     "session": "5",
     "died": ""
    },
    {
     "character": "1",
     "session": "6",
     "died": ""
    },
    {
     "character": "2",
     "session": "6",
     "died": ""
    },
    {
     "character": "14",
     "session": "6",
     "died": ""
    },
    {
     "character": "7",
     "session": "6",
     "died": ""
    },
    {
     "character": "1",
     "session": "7",
     "died": ""
    },
    {
     "character": "2",
     "session": "7",
     "died": ""
    },
    {
     "character": "3",
     "session": "7",
     "died": ""
    },
    {
     "character": "4",
     "session": "7",
     "died": ""
    },
    {
     "character": "5",
     "session": "7",
     "died": ""
    },
    {
     "character": "8",
     "session": "7",
     "died": ""
    },
    {
     "character": "12",
     "session": "7",
     "died": ""
    },
    {
     "character": "1",
     "session": "8",
     "died": ""
    },
    {
     "character": "3",
     "session": "8",
     "died": ""
    },
    {
     "character": "6",
     "session": "8",
     "died": ""
    },
    {
     "character": "9",
     "session": "8",
     "died": ""
    },
    {
     "character": "1",
     "session": "9",
     "died": ""
    },
    {
     "character": "2",
     "session": "9",
     "died": ""
    },
    {
     "character": "4",
     "session": "9",
     "died": ""
    },
    {
     "character": "5",
     "session": "9",
     "died": ""
    },
    {
     "character": "14",
     "session": "9",
     "died": ""
    },
    {
     "character": "10",
     "session": "9",
     "died": ""
    },
    {
     "character": "1",
     "session": "10",
     "died": ""
    },
    {
     "character": "2",
     "session": "10",
     "died": ""
    },
    {
     "character": "3",
     "session": "10",
     "died": ""
    },
    {
     "character": "4",
     "session": "10",
     "died": ""
    },
    {
     "character": "5",
     "session": "10",
     "died": ""
    },
    {
     "character": "8",
     "session": "10",
     "died": ""
    },
    {
     "character": "9",
     "session": "10",
     "died": ""
    },
    {
     "character": "12",
     "session": "10",
     "died": ""
    },
    {
     "character": "15",
     "session": "10",
     "died": ""
    },
    {
     "character": "16",
     "session": "10",
     "died": ""
    },
    {
     "character": "18",
     "session": "10",
     "died": ""
    },
    {
     "character": "1",
     "session": "11",
     "died": ""
    },
    {
     "character": "2",
     "session": "11",
     "died": ""
    },
    {
     "character": "3",
     "session": "11",
     "died": ""
    },
    {
     "character": "7",
     "session": "11",
     "died": ""
    },
    {
     "character": "11",
     "session": "11",
     "died": ""
    },
    {
     "character": "19",
     "session": "11",
     "died": ""
    },
    {
     "character": "1",
     "session": "12",
     "died": ""
    },
    {
     "character": "2",
     "session": "12",
     "died": ""
    },
    {
     "character": "3",
     "session": "12",
     "died": ""
    },
    {
     "character": "7",
     "session": "12",
     "died": ""
    },
    {
     "character": "9",
     "session": "12",
     "died": ""
    },
    {
     "character": "15",
     "session": "12",
     "died": ""
    },
    {
     "character": "18",
     "session": "12",
     "died": "died"
    },
    {
     "character": "19",
     "session": "12",
     "died": ""
    },
    {
     "character": "20",
     "session": "12",
     "died": ""
    },
    {
     "character": "1",
     "session": "13",
     "died": ""
    },
    {
     "character": "2",
     "session": "13",
     "died": ""
    },
    {
     "character": "7",
     "session": "13",
     "died": ""
    },
    {
     "character": "12",
     "session": "13",
     "died": ""
    },
    {
     "character": "21",
     "session": "13",
     "died": ""
    },
    {
     "character": "22",
     "session": "13",
     "died": ""
    },
    {
     "character": "3",
     "session": "14",
     "died": ""
    },
    {
     "character": "2",
     "session": "14",
     "died": ""
    },
    {
     "character": "12",
     "session": "14",
     "died": ""
    },
    {
     "character": "8",
     "session": "14",
     "died": ""
    },
    {
     "character": "1",
     "session": "15",
     "died": ""
    },
    {
     "character": "2",
     "session": "15",
     "died": ""
    },
    {
     "character": "3",
     "session": "15",
     "died": ""
    },
    {
     "character": "6",
     "session": "15",
     "died": ""
    },
    {
     "character": "15",
     "session": "15",
     "died": ""
    },
    {
     "character": "23",
     "session": "15",
     "died": ""
    }
];

let characters = [
    {
     "name": "Gal",
     "pronounSet": "2",
     "description": "The cheerful tiefling fighter. Ostensibly friends with Guido, and has recently taken on sheeplike qualities.",
     "affiliation": "1",
     "url": ""
    },
    {
     "name": "Piper Fenheim",
     "pronounSet": "2",
     "description": "The dragonborn warlock with a keen interest in new age paraphernalia. A member of the Mariners.",
     "affiliation": "1",
     "url": ""
    },
    {
     "name": "The Mariner",
     "pronounSet": "7",
     "description": "The nameless human fighter and designated vessel for Thalos. It's a big job, especially when you don't even remember who you are...",
     "affiliation": "1",
     "url": ""
    },
    {
     "name": "Arle Gyle",
     "pronounSet": "2",
     "description": "Kahmogi co-owner of the Gyle Well and Refinery. Manages the machinery.",
     "affiliation": "2",
     "url": "https://cdn.discordapp.com/attachments/837882618799849563/943860166758125578/20220212_023854.jpg"
    },
    {
     "name": "Lyster Gyle",
     "pronounSet": "3",
     "description": "Kahmogi co-owner of the Gyle Well and Refinery. Keeps the books.",
     "affiliation": "2",
     "url": "https://cdn.discordapp.com/attachments/837882618799849563/943860166758125578/20220212_023854.jpg"
    },
    {
     "name": "Aarthi Khatri",
     "pronounSet": "2",
     "description": "A smith's apprentice. Always seems to have some injury or another.",
     "affiliation": "2",
     "url": "https://cdn.discordapp.com/attachments/837882618799849563/943860167013969931/20220212_023940.jpg"
    },
    {
     "name": "Enmides Brook",
     "pronounSet": "3",
     "description": "Dragonborn captain of the Raidyll Guard. Recently deputized our heroes.",
     "affiliation": "2",
     "url": "https://cdn.discordapp.com/attachments/916569335336677396/916736124481831022/Enmides.jpg"
    },
    {
     "name": "Fortinbras",
     "pronounSet": "2",
     "description": "Earth genasi and proprietor of Fort's Porp-Up Shorp.",
     "affiliation": "2",
     "url": "https://cdn.discordapp.com/attachments/916569335336677396/962412381324071053/20220409_140141.jpg"
    },
    {
     "name": "Guido Pilter",
     "pronounSet": "3",
     "description": "The annoying ratfolk foreman.",
     "affiliation": "2",
     "url": "https://cdn.discordapp.com/attachments/916569335336677396/916729655158009937/Guido.jpg"
    },
    {
     "name": "Michael 'Mikey' Morgan",
     "pronounSet": "2",
     "description": "The noctern (nocturnal intern) of the Gyle Oil Well and Refinery, who works Thursday nights.",
     "affiliation": "2",
     "url": "https://cdn.discordapp.com/attachments/916569335336677396/981772594845990942/20220602_001258.jpg"
    },
    {
     "name": "Roke Brassfist",
     "pronounSet": "2",
     "description": "Dwarven sheriff of the Wideseal settlement, so named for her brass hand which replaced the one she lost in the Gradian catastrophe.",
     "affiliation": "2",
     "url": "https://cdn.discordapp.com/attachments/916569335336677396/929412291265458206/Roke.jpg"
    },
    {
     "name": "Skipo",
     "pronounSet": "3",
     "description": "Excitable young aliam bard. Idolizes anyone who claims or even appears to be an adventurer.",
     "affiliation": "2",
     "url": "https://cdn.discordapp.com/attachments/916569335336677396/962412381596688415/20220409_140144.jpg"
    },
    {
     "name": "The Gradian Gourd",
     "pronounSet": "4",
     "description": "An automaton, or perhaps suit of armor, created within the Wideseal Enigma for an unknown purpose.",
     "affiliation": "2",
     "url": "https://cdn.discordapp.com/attachments/837882618799849563/943860166380621844/20220212_024008.jpg"
    },
    {
     "name": "Zeereth Vrinn",
     "pronounSet": "2",
     "description": "This gung-ho drow is a mutual friend of Gal's and Piper's. Has a bit of an aromatherapy habit.",
     "affiliation": "2",
     "url": "https://cdn.discordapp.com/attachments/837882618799849563/943890980220850176/zeereth.JPG"
    },
    {
     "name": "Silt",
     "pronounSet": "5",
     "description": "The Mariners' \"inside man.\"\" Reports directly to Methuselah.\"",
     "affiliation": "3",
     "url": "https://cdn.discordapp.com/attachments/916569335336677396/916739090962075658/Silt.jpg"
    },
    {
     "name": "Nadir",
     "pronounSet": "2",
     "description": "A mid-ranking Mariner, and the Mariner's savior.",
     "affiliation": "3",
     "url": "https://cdn.discordapp.com/attachments/916569335336677396/916726816788602930/Nadir.jpg"
    },
    {
     "name": "Methuselah",
     "pronounSet": "3",
     "description": "The silent leader of the Mariners. In lieu of speaking, Silt interprets.",
     "affiliation": "3",
     "url": "https://cdn.discordapp.com/attachments/916569335336677396/916747294202814524/Nadir1.jpg"
    },
    {
     "name": "Puddle",
     "pronounSet": "3",
     "description": "The newest Mariner, and a big fan of the Mariner. Recently deceased!",
     "affiliation": "3",
     "url": "https://cdn.discordapp.com/attachments/837882618799849563/947158492731551785/20220226_104905.jpg"
    },
    {
     "name": "Dr. Merrow Bonejaw",
     "pronounSet": "3",
     "description": "A scientist from Numines. Used to work under Enmides, now works solely with his colleague Dr. Stonejaw. Allegedly does weird science.",
     "affiliation": "4",
     "url": "https://cdn.discordapp.com/attachments/916569335336677396/1005356692755726356/20220806_020748.jpg"
    },
    {
     "name": "Dr. Wrett Stonejaw",
     "pronounSet": "2",
     "description": "A scientist from Numines. A chemist by trade, and Dr. Bonejaw's colleague.",
     "affiliation": "4",
     "url": "https://cdn.discordapp.com/attachments/916569335336677396/1005356693019963543/20220806_020310.jpg"
    },
    {
     "name": "Velour Quickheel",
     "pronounSet": "3",
     "description": "A haughty soldier from Raidyll, under the command of Fresh Hunt.",
     "affiliation": "4",
     "url": "https://cdn.discordapp.com/attachments/916569335336677396/1013163185085362296/Velour.jpg"
    },
    {
     "name": "Fresh Hunt",
     "pronounSet": "6",
     "description": "A higher-up in the Raidyll guard. Her methods might seem harsh, but the results speak for themselves.",
     "affiliation": "4",
     "url": "https://cdn.discordapp.com/attachments/916569335336677396/1013163184733048872/Fresh_Hunt.jpg"
    },
    {
     "name": "Hot Dog Guy",
     "pronounSet": "3",
     "description": "The noble hot dog vendor. It's said his handsome face masks a deeply sad individual.",
     "affiliation": "2",
     "url": ""
    }
];

let pronouns = [
    {
     "pronouns": "any/all"
    },
    {
     "pronouns": "she/her"
    },
    {
     "pronouns": "he/him"
    },
    {
     "pronouns": "it/its"
    },
    {
     "pronouns": "he/they"
    },
    {
     "pronouns": "she/he"
    },
    {
     "pronouns": "they/them"
    }
];

let recap = [
    {
     "title": "Session 0: The Eternal Burning",
     "act": "1",
     "story": "Ten years ago, the world exploded. A cataclysmic firestorm called the Eternal Burning, or the Burning for short, razed most of civilization to the ground. The few cities that survived became authoritarian, walled-off settlements. You are refugees living in Wideseal, a recently-established safe haven. Wideseal provides safety from the dragons and other threats, but its nascency means most citizens are forced to work hard labor for long hours to keep the settlement running. While the dragons pose a constant threat, the city also suffers sabotage from within by the eschatological cults which have sprung up since the Burning began. Can you avoid the ire of the Wideseal lawmages, keep yourself out of the scuffles between the cults, and dodge deadly dragonfire - all while trying to make ends meet?",
     "stinger": ""
    },
    {
     "title": "Session 1: Aphids",
     "act": "1",
     "story": "Morning dawns on Wideseal as Gal is coaxed out of bed with the help of the egg of the Wideseal Ostrich. On her way out to work, she is stopped by the foreman Guido Pilter, who suspects her of sneaking out of camp the other night. Gal denies the allegations.\nMeanwhile, Piper is set to work in the farms, watching flurgroot grow. As she notices a flurgroot aphid lurking, she sets out to kill it, inadvertently zapping a number of flurgroots around it. She brings this to the attention of Enmides Brook, the captain of the guard in Raidyll, who has business with Guido. Piper follows Enmides a ways, until he and Guido disappear into the Wideseal Enigma.\nMeanwhile, the Mariner receives tell of a meeting tonight from Nadir, and also notices Enmides and Guido talking. Guido looks apprehensive.\nLater, Piper is informed of the Mariners meeting as Gal is approached by Enmides, who scouts her for an opportunity that he claims will make the people of Wideseal much safer. Gal is instructed to retrieve some supplies from the infirmary, and on her way back spots a tent peg askew. While Gal follows Enmides deeper into the Enigma, Piper and the Mariner are tasked with destroying the dossier the lawmages are putting together on the Mariners.",
     "stinger": "Gourds include the fruits of some flowering plant species in the family Cucurbitaceae, particularly Cucurbita and Lagenaria. The term refers to a number of species and subspecies, many with hard shells, and some without."
    },
    {
     "title": "Session 2: The Wideseal Enigma",
     "act": "1",
     "story": "As the sun sets and the night begins, Piper and the Mariner stake out the Enigma. They are eventually able to sneak in despite Guido's best efforts. Meanwhile, Enmides leads Gal down the right-hand path to reveal a suit of mechanical armor - the Gradian Gourd. Unbeknownst to Enmides, Gal hears a voice in her head calling for help.\nThe pair of Mariners make a short trip down the left-hand path before electing instead to also use the right-hand path. After a pitched battle against some harmless targets, they are discovered by Enmides and Gal. The Mariner hears a voice calling for help.\nPiper does some quick fibbing to convince Enmides that they were following someone else who snuck in without permission. The four of them agree that if anyone did sneak in, they would be in or near the records room. After opening the lock, Piper hears a voice calling for help outside of the Enigma.\nPiper heads outside and is just barely able to see the huge form of a pink dragon locked in battle with something on the other side of the Enigma. It crashes against the side of the building, and Gal, the Mariner, and Enmides watch as the power goes out...",
     "stinger": "Paleontology, also spelled palaeontology or palæontology, is the scientific study of life that existed prior to, and sometimes including, the start of the Holocene epoch."
    },
    {
     "title": "Session 3: Emergency Power",
     "act": "1",
     "story": "The emergency power within the Wideseal Enigma kicks in as Enmides, Gal, and the Mariner are confronted by a berserk Gradian Gourd. They are able to hold it off until it crashes through the wall and absconds.\nPiper, outside, scales the wall surrounding Wideseal and hops down, hurrying towards the fight outside the Enigma. Donning a quick magical disguise, Piper turns the dragon invisible, claiming to the Platoon to have stolen its soul. (Astonishingly, they believe her.)\nMeanwhile, Enmides storms out of the Enigma, as the Gourd charges into the horizon. Neither Enmides nor the rest of the Platoon can find Piper, and the emerging Mariner and Gal cannot catch up to the Gourd.\nA concerned Enmides elects to deputize our heroes, so as not to stretch the Platoon so thin, and promises to give them badges and a mission tomorrow at 8.Finally attending to the task at hand, the Mariner and Piper return to the records room and destroy the files relating to the Mariners. Silt chides them for getting so close to Enmides, but they assure him the situation remains advantageous.",
     "stinger": "Petroleum, also known as crude oil and oil, is a naturally occurring, yellowish-black liquid found in geological formations beneath the Earth's surface."
    },
    {
     "title": "Session 4: Marshals of the Minerals",
     "act": "2",
     "story": "Many of Wideseal spend the remainder of the day by cleaning up the mess left by the skirmish. As Gal clears up debris, she is approached by Guido (along with the smith's apprentice Aarthi Khatri). Guido makes an elaborate apology for suspecting Gal of treason, granting her his (extremely rusty) family wrench. Guido also mentions the disappearance of Zeereth Vrinn, Gal's and Piper's mutual friend.\nMeanwhile, the Mariner meets Puddle, a new Mariner. Puddle is a huge fan of the comparatively more seasoned Mariner, despite their best efforts to shake him off.\nOver at the farms, Silt and Piper discuss recent events. Silt still isn't so sure about deputization, but concedes that if the Mariner is going along with it, it must be fine.\nThe next morning, Enmides outlines our heroes' first job (and wakes Gal up courtesy of the egg of the Wideseal Ostrich). The Gyle Oil Well has been experiencing subtle acts of sabotage - the party is to find out who is responsible and to stop them. (They are also to retrieve one vial of Gyle Oil.) The kahmogi Gyle twins greet the party at the door, though they seem somewhat hostile to each other. Arle Gyle, the mechanic, hands the party off to her brother Lyster (the bookkeeper), who leads them on the tour. Along the way, a troubled Lyster explains the situation - each Gyle suspects the other of sabotage, and mysterious scorch marks have started to appear around the building.\nIn the gift shop, the party convinces Lyster to talk to his sister openly, but he returns as quickly as he went with terrible news: Arle has mysteriously fallen unconscious!",
     "stinger": "Because chameleons are ectothermic, another reason why they change colour is to regulate their body temperatures, either to a darker colour to absorb light and heat to raise their temperature, or to a lighter colour to reflect light and heat, thereby either stabilizing or lowering their body temperature."
    },
    {
     "title": "One-shot: The Missing Vrinn",
     "act": "2",
     "story": "On a sunny day in Wideseal, Piper and Gal are tasked by Enmides with locating Zeereth Vrinn, who has been missing for a few days. After receiving two containers of glorified rice, the Midwestern treat, the two deputies search Zeereth's room. They find a magical self-help book and a portal in her wardroThe world within the wardrobe is a dark cavern riddled with huge scratch marks. Our heroes are confronted by a shadowy Wideseal Ostrich, which will stop at nothing to egg them.\nAfter narrowly defeating the belligerent bird, the party notices a white rabbit. It allows itself to be picked up by Gal, and Piper deduces the rabbit is magical in some capacity. They take the rabbit into the next room, and defeat the aphids in a puzzle.\nThe rabbit then speaks up, warning the party about what's behind the next door. Zeereth, it explains, attempted to magically separate portions of her personality from each other, to rid herself of her anxiety. Her control, it explains, has been turned into a giant puppet, and the rabbit itself is Zeereth's feelings.\nInsisting on helping their friend, Piper and Gal go through the door anyway, reuniting Zeereth with her feelings. However, they are forced to confront Zeereth's Ego, which has taken the form of a gigantic puppet. Despite the party (plus Zeereth) sustaining heavy blows from the puppet, Zeereth is able to stop the onslaught with a well-placed Eldritch Blast.\nUpon exiting the portal, Piper and Gal encourage Zeereth to do some soul-searching, instead of taking the easy way out of dealing with her feelings. Zeereth agrees to do so, and decides it's time to get some rest.",
     "stinger": "This has been a semi-canon one-shot. Now back to your regular programming."
    },
    {
     "title": "Session 5: Good Grease",
     "act": "2",
     "story": "Following Lyster into the side room, the party is surprised to find Arle gone, and a trail of scorch marks found by the Mariner leading deeper into the refinery! From the vents appears a cohort of tiny fire elementals, which threaten the integrity of the well if left unchecked. After dispatching them, the group ventures further into the mine, solving a problem with the distillation on the way down.\nUpon entering the antechamber, they find something strange: a large rock. Piper deduces that it is magical in nature, and Gal hoists it clear off the ground, revealing an earth genasi (Fortinbras) sheltering an Aliam teenager (Skipo). Fortinbras is here after phasing through the earth while searching for a place to hoist her Porp-Up Shorp. Skipo has been traveling with her. Deciding that this has entirely nothing to do with them, the party plus Lyster dashes into the well proper, where they see a host of Sparklings scattered about, with a particularly big elemental attempting to use the drill to gain direct access to the oil! What's worse, Arle Gyle is unconscious directly beside it, having inhaled a critical mass of smoke.\nThe group (including a sneaky little Skipo) launches into action, battling for control of the well and its centerpiece, the drill. Will our heroes be able to save the well, or will Wideseal go up in smoke?",
     "stinger": "An oil well is a boring in the Earth that is designed to bring petroleum oil hydrocarbons to the surface. Usually some natural gas is released as associated petroleum gas along with the oil."
    },
    {
     "title": "One-shot: Puppy Patrol",
     "act": "2",
     "story": "We find Gal and the Mariner - along with Guido and Aarthi - cleaning out the target practice room within the Wideseal Enigma. Aarthi asks the group what the most dangerous thing they've ever done is, to which Gal says eating a peach with a pit in it, and the Mariner says jumping out of a burning building, while Guido makes up a tall tale about the time he fought off a dragon with only one arm and the Pilter family sword. While not having a story of her own (or perhaps one that she's willing to share, Gal notices), Aarthi suggests they'll be perfect for trying out an idea she has. She recounts a story from the other day, when she heard the sound of a dog barking outside the wall. If they can use Gal and the Mariner's deputy status, they should be able to leave Wideseal, investigate, and return before dawn.\nStriking out at dusk, the Mariner's keen eyes spot their quarry almost immediately. The dog in question is out of the ordinary, however - with brown scales instead of fur, and an awful strong jaw, this puppy appears to be part crocodile. Gal and Aarthi immediately begin to follow it as it sets off, while Guido asks the Mariner to make sure he looks cool in front of Aarthi.\nFairly soon, the puppy passes by a large rock, upon which sits a huge spider, crackling with electricity. The puppy passes by unharmed, and the Mariner has an intense staredown with it, causing the spider to back off and leave without causing significant damage to the party. However, the Mariner notices a second set of tracks in the sand�\nThe dog(odile?) leads the group into a ghost town about thirty minutes from Wideseal, ironically called Hope. The place is abandoned, but the dog continues to move with a purpose, soon taking them into the centerpiece of the town (along the way, revealing a third set of tracks, a heavy, flat boot): a withered-away power plant of some sort. The party is accosted by another giant spider, as well as the source of the second set of tracks: a giant scorpion. Although the party sustains heavy damage, and Aarthi subtly reveals her control over pyromancy, only Gal is downed, and the Mariner manages to stabilize her and impale both beasts through the cephalothoraxes. Guido helpfully carries Gal over his shoulder.\nThe party is led finally into the power plant proper, which opens up into a large chamber filled with other dogodiles. The mother, much bigger than the rest, is caught in a large amount of webbing against the wall. The Mariner and Aarthi get to work destroying the web, and free the mother, to the delight of all the puppies. After returning to Wideseal, the plaintive bark of the dogodile is no longer heard.",
     "stinger": "This has been a semi-canon one-shot. Now back to your regular programming."
    },
    {
     "title": "One-shot: Memory Holed",
     "act": "2",
     "story": "On a Friday some time after our heroes clean up the Gyle Well and Refinery (we hope), Zeereth and Piper are joined by Gal to help look after the farm. Zeereth is not a tough supervisor, and she treats the others to some mint tea. Gal notices it's not up to its usual snuff and requests some sugar. (Piper is plain not a fan and surreptitiously spits it out while Zeereth's back is turned.)\nWhen Zeereth returns with sugar, she reveals the real reason she requested both Piper and Gal's help (while Gal adds enough sugar to turn the tea into a sludge). Revealing a pair of minute evenly-spaced puncture wounds on her neck, just below her chin, Zeereth tells our heroes about her strange night. On Thursday night, she was waiting to meet someone, but fell asleep before the promised time. When she awoke from her impromptu nap, it was well past dark. Assuming she had been stood up, Zeereth groggily made it back to her bunk and fell asleep again. In the morning, she noticed the bite marks.\nWhen asked, Zeereth shows them to the field. There, they find an apple, totally dehydrated. Zeereth also tells them that the person she was supposed to meet was Michael �Mikey� Morgan, the tabaxi intern of the Gyle Well and Refinery. Our makeshift detectives decide to head to the well for clues, suspecting Mikey, with Zeereth some distance behind. Arle greets them at the door, and when the conversation turns to Mikey (and her alleged vampiric tendencies), Arle is able to tell them only that she keeps strange hours (7pm-11). Lyster, on the other hand, is able to provide her address (along with some Sparkling-themed cupcakes).\nAt Mikey's dormitory, Piper and Gal play good-cop-bad-cop to get information out of Mikey, but Mikey is either playing coy or doesn't seem to know much of anything. Piper snoops around her room, finding it to be quite humid, dank, and dirty, and spotting a large pair of segmented legs ducking out of view. Just as Mikey reveals identical bite marks on her neck, the wardrobe door creaks open�\nFrom every corner of the room, unreasonably large aphids begin to menace our heroes. With a very lucky wisdom save, Gal immediately senses that these aphids have the strange ability to cause its victims to forget its presence, and Mikey's dark, spacious, and dirty room has proven a veritable nest without Mikey even knowing. The deputized duo springs into action, utilizing eldritch blasts and macial smashes to solve Mikey's bug problem. Mikey, having been cleared of vampirism charges (...for now?), thanks our heroes, while Zeereth goes to talk to her�",
     "stinger": "This has been a semi-canon one-shot. Now back to your regular programming."
    },
    {
     "title": "Session 6: Fire in the Hole",
     "act": "2",
     "story": "With the drill turned off, our bedraggled heroes move to round up the fire elementals remaining in the well. Gal smashes some Sparklings. The Mariner hijacks a minecart. Piper mangles some machinery. When the smoke clears, the trio (plus their allies) are badly hurt, but still standing.\nThe Gyles thank the deputies for saving their lives, and even briefly consider paying Mikey. Fortinbras and Skipo abscond to who knows where. As they leave the well, Gal and the Mariner both notice some wet footprints leading inwards that quickly dry up.�\nThe next day, Piper is approached by Puddle, who informs her that there's a meeting tonight, and that it's his belief that gold will be useless in the post-apocalypse apocalypse. Meanwhile, Gal runs into Guido, who believes that Gal is being \"set up.\" He shows her a list of possible suspects: Flint, a kobold",
     "stinger": " Mortimer, a half-elf - and Piper herself.\nAt the Mariner meeting, Silt leads everyone in the Mariner's creed, and then notes that signs point to the arrival of \"the Phoenix.\" This, of course, necessitates that the Mariner begin training with Nadir to become an appropriate vessel for Thalos. As the meeting wraps, Piper expresses concerns about the Mariners' goals, which the Mariner echoes.\nA couple weeks go by, with minimal deputy activity, apart from managing the small fire elementals that seem to continue cropping up. The Mariner begins their training with Nadir, and Piper attempts to contact her patron. When asked about the mission of the Mariners, and whether or not it's in line with what her patron wishes, the reply comes back: \"It is...\"\n...But the voice belongs to Nadir."
    },
    {
     "title": "Session 7: Tooth and Jaw",
     "act": "2",
     "story": "As our heroes prepare to receive their next mission from Enmides, the sheriff of Wideseal, Roke Brassfist, storms through the Enigma past them. By way of explanation, Enmides thanks Gal, the Mariner, and Piper",
     "stinger": " but tells them that with no leads on the masked figure, he's burning through the last of his goodwill by managing Wideseal affairs. He plans to stay in Wideseal only a short while longer, but in the meantime, he would like for his deputies to take care of a short piece of housekeeping.\nA chemist named Dr. Merrow Bonejaw has found himself in Wideseal for the day, waiting on his colleague to arrive. As it happens, Enmides and Dr. Bonejaw used to work together, with Dr. Bonejaw serving under him as a chemist, but he left under mysterious circumstances. Enmides is suspicious of Dr. Bonejaw and wants the deputies to return to him with information on the nature of his work.\nArriving at Bonejaw's temporary residence, Piper searches his things while Gal and the Mariner stand outside. She finds potions and elixirs of all kinds, about 30% of which are potions that make the drinker sneeze. Meanwhile, Gal and the Mariner stall for time as the doctor himself approaches, having bought some mineral water while he was out. A quick misty step escape secures the deception, and the three deputies introduce themselves to Dr. Bonejaw.\nInside, Dr. Bonejaw explains his work while Gal pokes around some more. She locates a potion that turns her face into that of a sheep's, as well as a potion of explosions (20% of all potions are potions of explosions). After a shard of glass gives Gal a small cut on her hand, Dr. Bonejaw suddenly becomes nervous and begins to look for something. Not finding it, he explains that the sight of blood causes him to go out of control, and if they don't help him get to the desert in a few hours, he could seriously hurt people.\nAccompanying Dr. Bonejaw to a specific location east of Wideseal, our heroes watch as he transforms into a creature with the head and tail of a dinosaur before their eyes...and begins to attack! The battle is fierce, but Dr. Bonejaw is eventually knocked unconscious without harming anyone (too badly). After he wakes, the deputies suggest that Bonejaw be more transparent about his work to Enmides, but he doesn't seem convinced..."
    },
    {
     "title": "Session 8: Dig",
     "act": "2",
     "story": "With Dr. Bonejaw once again in possession of himself, our heroes return to Wideseal, where Dr. Stonejaw has just arrived in waiting. Dr. Bonejaw is reunited to both his colleague and his serum, and then goes to visit Enmides with party in tow.\nEnmides is apprised of the situation and seems to take it well. Also, Piper creates a pine marten buddy. As rain begins to fall in Wideseal for the first time in a long time (and as Gal goes outside with the express intention of getting sopping fucking wet), it seems like Wideseal might have earned itself a little peace�\nWrong, of course. When the morning arrives, the body of Puddle is found some ways out of Wideseal's walls, and next to it, Dr. Bonejaw, unconscious. It looks like Enmides will be remaining in Wideseal for just a bit longer as he sends our deputies out to find who, if not Dr. Bonejaw, is guilty of murder. If our heroes cannot find another suspect to pin the crime on, he will be exile Bonejaw.\nAt the lab, the party is first accosted by Guido, who loudly accuses Piper of having something to do with this, and swears he will find out what before storming off. Puddle's corpse has wounds consistent with that of a small dinosaur's jaws, and things are not looking up for our heroes when they elect to go find Silt. Silt leads them to the lookout tower, explaining that Guido was on lookout duty last night, and discovered the body with his binoculars. \nAfter being toxic to Dr. Stonejaw, the party gets the story from Bonejaw. According to the good doctor, none of Puddle's blood was found on his body. But aside from a mysterious lead about a phial of mineral water, he doesn't have much more in the way of clues.\nHaving arranged a meeting with Silt outside of the farm, however, our heroes find something that seems fruitful. Last night, Silt was keeping watch - not from their watchtower, but within the bunks. Silt found no trace of Nadir having been within the walls of Wideseal last night. This behavior strikes Piper as suspicious, and when she asks whose side he's really on, he reveals something shocking - he's working for neither the Mariners nor the Platoon.",
     "stinger": "Rats are various medium-sized, long-tailed rodents. Species of rats are found throughout the order Rodentia, but stereotypical rats are found in the genus Rattus."
    },
    {
     "title": "One-shot: Friendly Competition",
     "act": "2",
     "story": "Having been summoned to the Enigma on rather short notice, Piper and Gal run into Skipo on their way. He is indignant, having been rudely shoved by a tiefling who made his way into the Enigma afterwards, or so he claims. Skipo tries to get the party to avenge their honor for them, and they hesitantly agree to go have a word with the culprit.\nWhen they get to Enmides' office, they find a tiefling and a gnoll already there. After a brief confrontation, the tiefling introduces himself as Velour Quickheel, a newish soldier in the Raidyll guard, and Enmides introduces the party to Fresh Hunt, Velour's commander. Velour, in the hopes of getting some more field experience, has traveled to Wideseal to become a deputy (replacing our heroes). Enmides and Fresh Hunt (as much for their own amusement as anything else) have agreed to turn it into a challenge: Fresh Hunt and Velour, and Piper and Gal, will compete in two teams of two to defeat as many challengers as they can. Whoever downs the enemy earns a certain amount of points for their team. All parties agree (though Enmides not-so-secretly is rooting for his deputies), and they walk down to the lab.\nIn the first round, Gal and Piper score 2 points, with Velour's team hot on their heels at one point. In the second round, Gal and Piper are able to score three additional points (despite Velour's attempts at sabotage), before Enmides brings out the third round enemy: a desert jelly. Despite everyone's best efforts, including some pinch heals from Skipo, the desert jelly lays waste to the battlefield, indiscriminately knocking out everyone with only 13 hit points remaining. However, because Piper and Gal's team had the most points, Enmides declares them the winners. Velour begrudgingly acknowledges defeat, and returns to Raidyll knowing he has more training to do.",
     "stinger": "This has been a semi-canon one-shot. Now back to your regular programming."
    },
    {
     "title": "One-shot: It's Probably Pirates",
     "act": "2",
     "story": "While out shopping at Fort's Porp-up Shorp, the Mariner and Piper notice a curious absence of Skipo. They soon find out that Skipo has fallen into the Box of Many Boxes, which to everyone's surprise holds a small and watery cavern at the bottom! \nAfter following them down on a rope, our heroes find no sign of Skipo save for a cry for help deeper inside the cave system. Skipo has been abducted - by piratesh [sic]! \nBut before they can get to the brigands who have taken their friend, they must brave a coral puzzle! Fortunately, it is almost as easy as defeating the pirate guarding it. \nThe party is hot on the heels of Skipo's captors, following them into a room ankle-deep with water......only to find the pirates (almost) slain by a bipedal shark, who wants both the gold Skipo and the pirates carry and their organs! The fight is intense, but our heroes prevail, undoubtedly adding years to young Skipo's life. Payback, perhaps, for last time. \nThe moral? If something smells fishy, it's probably pirates.",
     "stinger": "This has been a semi-canon one-shot. Now back to your regular programming."
    },
    {
     "title": "Session 9: Ontological Hitchhiker",
     "act": "2",
     "story": "Silt discloses that they work for neither the Platoon or the Mariners, and says that they feel that things might be at a tipping point. Advising them to use caution around Nadir, he bounds away, leaving the party to contemplate their next step.\nGal suggests they go look for the seller of Bonejaw's mineral water. There are three vendors set up in the location, one of whom is a hot dog culinarian with a certain despondent debonair. He makes eleven hot dogs while Gal berates him for not having a bigger rack. Meanwhile, Piper chats with Aarthi, who is set up in the smithy. Aarthi describes the mineral water seller as someone who matches a physical description of Nadir, mentioning that \"that kid\" who's always with Fortinbras might know some more. Loaded up with hot dogs and on a tight schedule, however, our heroes elect to visit the bunks.\nTerry sleuths out Nadir's room, and once inside, the party is attacked by something they can't see. Looking around, their assailant is revealed to be an enchanted whip of water. A small battle ensues, with Piper eventually taking it out with a cold blast (that also catches her allies). But as Gal confronts Piper about what just happened, the Mariner's mind is elsewhere.\nThe Mariner sees a vision of two entities from other planes crashing down to the prime material plane - one red, one blue. They also sense something trying to get into their body�\nWith the room to themselves, the party investigates, finding shelves of mineral water like the phial Bonejaw had. No sooner do they find this, however, than Silt bursts in - he's just received a distress call from Guido!",
     "stinger": "SOS is a Morse code distress signal ( . . . - - - . . . ), used internationally, that was originally established for maritime use."
    }
];

// pronouns.forEach(row => {
//     db.prepare("INSERT INTO pronouns (pronouns) VALUES('" + row.pronouns + "')").run()
// })

// acts.forEach(row => {
//     db.prepare("INSERT INTO acts (act) VALUES('" + row.act + "')").run()
// })

// affiliations.forEach(row => {
//     db.prepare("INSERT INTO affiliations (affiliation) VALUES('" + row.affiliation + "')").run()
// })

// let charStmt = db.prepare("INSERT INTO characters (name, pronounSet, affiliation, description, url) VALUES (?,?,?,?,?)");
// characters.forEach(row => {
//     charStmt.run(row.name, row.pronounSet, row.affiliation, row.description, row.url)
// })

// let recapStmt = db.prepare("INSERT INTO recap (title, act, story, stinger) VALUES (?,?,?,?)");
// recap.forEach(row => {
//     recapStmt.run(row.title, row.act, row.story, row.stinger);
// })

// let appearancesStmt = db.prepare("INSERT INTO appearances (character, session, died) VALUES (?,?,?)");
// appearances.forEach(row => {
//     appearancesStmt.run(row.character, row.session, row.died);
// })

//

//comment