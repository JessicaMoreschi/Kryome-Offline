//CARDS
const dataCard = {
  "elm1": [{
    "titleDisp": "none",
    "iconDisp": "none",
    "imageDisp": "flex",
    "srcIframe": "./elmstory/ElmStory_Solon/index.html",
    "descriptionDisp": "none",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Fn": "hideMyCard('closeElmSolon')",
    "closeBtnDisp": "flex"
  },],
  "elm2": [{
    "titleDisp": "none",
    "iconDisp": "none",
    "imageDisp": "flex",
    "srcIframe": "./elmstory/ElmStory_Alain/index.html",
    "descriptionDisp": "none",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Fn": "hideMyCard('closeElmAlain')",
    "closeBtnDisp": "flex"
  },],
  "alert1": [{
    "titleDisp": "block",
    "title": "You found the Diary!",
    "imageDisp": "none",
    "image": "./assets/solonsBunker.jpg",
    "descriptionDisp": "block",
    "description": "During your journey, all the discoveries will be <b>recorded on the Diary</b>.<br>You can now keep track of your exploration.",
    "closeBtnDisp": "flex"
  },],
  "alert2": [{
    "titleDisp": "block",
    "title": "You found the Torch!",
    "margin": "50% - 141px",
    "imageDisp": "flex",
    "image": "./assets/torch.jpg",
    "descriptionDisp": "block",
    "description": "You can now accomplish Solon's mission! During your exploration, as you discover a new Dome, the <b>Torch will connect it to the others</b>.",
    "closeBtnDisp": "flex"
  },],
  "alert3": [{
    "titleDisp": "block",
    "title": "Start your Adventure!",
    "imageDisp": "none",
    "descriptionDisp": "block",
    "description": "<b>1st mission: Reach <i>The Forge</i> to fix The Torch.</b><br>Scan a card to start your journey! Place it on the top of the phone; ensure that the webcam is covered.",
    "choice1Fn": "hideMyCard('startLev1')",
    "closeBtnDisp": "flex"
  },],


  // Coonection alerts
  "alertConnectionOff": [{
    "titleDisp": "block",
    "title": "Turn off your connection",
    "imageDisp": "none",
    "descriptionDisp": "block",
    "description": "There's no signal here. Turn off your connection.",
    "closeBtnDisp": "flex"
  },],
  "alertConnectionOn": [{
    "titleDisp": "block",
    "title": "Turn oon your connection!",
    "imageDisp": "none",
    "descriptionDisp": "block",
    "description": "You're almost there! Reconnect Kryome!",
    "closeBtnDisp": "flex"
  },],

  "card1": [{
    "titleDisp": "flex",
    "title": "<b>Land</b>",
    "iconDisp": "flex",
    "icon": "./assets/land.png",
    "imageDisp": "none",
    "descriptionDisp": "block",
    "description": "You took the first step in your journey!<br>Keep on exploring around.",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],
  "card2": [{
    "titleDisp": "flex",
    "title": "<b>Ruin</b>: Solon's Bunker",
    "iconDisp": "flex",
    "icon": "./assets/ruin.png",
    "imageDisp": "flex",
    "image": "./assets/solonsBunker.jpg",
    "descriptionDisp": "block",
    "description": "At this point, the snowpack seems to be fading, and a metal sheet can be glimpsed. Wait a minute... It is a manhole cover to an underground passageway! It must be the bunker where Grandpa Solon liked to store his inventions... Going down the stairs to the bunker, you find a dimly lit room filled with notes and research. What a mess! After all, it wouldn't look so different from his study, except for the fact that it abounds with boxes painstakingly sealed and labeled with codes: D20.M02.Y2167, D03.M12.Y2168... Whether these are dates?<br><b>The packages seem to contain resources!</b> Who knows who must have accumulated all that good stuff there...certainly not Grandpa Solon. In any case, you decide to take some resources that might come in handy as you continue your journey.",
    "toolTagDisp": "none",
    "resourceTagDisp": "flex",
    "resourceTag": "+4 Resource",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],
  "card3": [{
    "titleDisp": "flex",
    "title": "<b>Trial</b>: Fresh Snow",
    "iconDisp": "flex",
    "icon": "./assets/snow.png",
    "imageDisp": "flex",
    "image": "./assets/freshSnow.jpg",
    "descriptionDisp": "block",
    "description": "There is a thick layer of fresh snow. <br><b>To proceed you need snow shoes.</b> <br> You must go back and explore some more.",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],
  "card4": [{
    "titleDisp": "flex",
    "title": "<b>Ruin</b>: Hunterd Dome",
    "iconDisp": "flex",
    "icon": "./assets/ruin.png",
    "imageDisp": "flex",
    "image": "./assets/huntedDome.jpg",
    "descriptionDisp": "block",
    "description": "The village is empty, it seems like it’s been like this for a long time. Ah, now you remember! You have already heard of this urban myth about a hunted village. There is a weird vibe here. You suddenly hear a loud and scary scrape. You get goosebump and get the hell outta there asap. <br><b>You found snow shoes! </b>Go back to the fresh snow challenge and draw another card to keep exploring.",
    "toolTagDisp": "flex",
    "toolTag": "Snowshoes",
    "resourceTagDisp": "none",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],
  "card5": [{
    "titleDisp": "flex",
    "title": "<b>Cryptid</b>",
    "iconDisp": "flex",
    "icon": "./assets/cryp.png",
    "imageDisp": "flex",
    "image": "./assets/cryptid.jpg",
    "descriptionDisp": "block",
    "description": "It must come from that hunted dome! You must go back and change direction!",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],
  "card6": [{
    "titleDisp": "flex",
    "title": "<b>Land</b>",
    "iconDisp": "flex",
    "icon": "./assets/land.png",
    "imageDisp": "none",
    "descriptionDisp": "block",
    "description": "You found a safe passage. Keep on exploring. <br><b>You found a Resource!</b>",
    "toolTagDisp": "none",
    "resourceTagDisp": "flex",
    "resourceTag": "+1 Resource",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],
  "card7": [{
    "titleDisp": "flex",
    "title": "<b>Trial</b>: Cliff",
    "iconDisp": "flex",
    "icon": "./assets/cliff.png",
    "imageDisp": "flex",
    "image": "./assets/cliff.jpg",
    "descriptionDisp": "block",
    "description": "You’ll need to find something to pass this cliff... it’s too steep!<br><b>You don't have a rope! </b>If you want to go on anyway you will have to loose 1 resource every time you cross this cliff. If you decide to look for a rope, go back and keep exploring.",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "Look for a Rope",
    "choice1Fn": "hideMyCard('7a')",
    "choice1Src": "./assets/tool.png",
    "choice2Disp": "flex",
    "choice2": "Climb it",
    "choice2Fn": "hideMyCard()",
    "choice2Src": "./assets/resources.png",
    "closeBtnDisp": "none"
  },],
  "card8": [{
    "titleDisp": "flex",
    "title": "<b>Land</b>",
    "iconDisp": "flex",
    "icon": "./assets/land.png",
    "imageDisp": "none",
    "descriptionDisp": "block",
    "description": "You made it pretty much unscathed. Keep on exploring. <br><b>You found 2 Resources!</b>",
    "toolTagDisp": "none",
    "resourceTagDisp": "flex",
    "resourceTag": "+2 Resource",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],
  "card9": [{
    "titleDisp": "flex",
    "title": "<b>Ruin</b>: The Tower",
    "iconDisp": "flex",
    "icon": "./assets/ruin.png",
    "imageDisp": "flex",
    "image": "./assets/tower.jpg",
    "descriptionDisp": "block",
    "description": "A tower used by the people of the forge... You're getting close to my objective! But perhaps you can explore this area before you get there.<br> <b>You found a resource!</b>",
    "toolTagDisp": "none",
    "resourceTagDisp": "flex",
    "resourceTag": "+1 Resource",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],
  "card10": [{
    "titleDisp": "flex",
    "title": "<b>Dome</b>: The Forge",
    "iconDisp": "flex",
    "icon": "./assets/dome.png",
    "imageDisp": "flex",
    "image": "./assets/dome.jpg",
    "descriptionDisp": "block",
    "description": "You find another dome! Finally! Are you going to explore it?",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "Explore",
    "choice1Src": "./assets/arrow.png",
    "choice1Fn": "hideMyCard('10Forge')",
    "choice2Disp": "none",
    "closeBtnDisp": "none"
  },],
  "card12": [{
    "titleDisp": "flex",
    "title": "<b>Land</b>",
    "iconDisp": "flex",
    "icon": "./assets/land.png",
    "imageDisp": "none",
    "descriptionDisp": "block",
    "description": "Everything seems okay. <br><b>You found 2 Resources!</b>",
    "toolTagDisp": "none",
    "resourceTagDisp": "flex",
    "resourceTag": "+2 Resource",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],
  "card13": [{
    "titleDisp": "flex",
    "title": "<b>Ruin</b>: War Robot",
    "iconDisp": "flex",
    "icon": "./assets/ruin.png",
    "imageDisp": "flex",
    "image": "./assets/robot.jpg",
    "descriptionDisp": "block",
    "description": "You find an ancient robot, consumed by the weather... it looks like a sleeping giant. The war must have been so cruel. You find the last messages of the pilot to their family<br><b>You found a rope! </b>Go back to the cliff and draw a card to climb unharmed.",
    "toolTagDisp": "flex",
    "toolTag": "Rope",
    "resourceTagDisp": "none",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],

  //card of lev2
  "l2alert1": [{
    "titleDisp": "block",
    "title": "Level 2",
    "imageDisp": "none",
    "descriptionDisp": "block",
    "description": "You can now proceed using the level 2 card deck",
    "choice1Fn": "hideMyCard('l2a1')",
    "closeBtnDisp": "flex"
  },],
  "l2card1": [{ //ruin1
    "titleDisp": "flex",
    "title": "<b>Lev2</b>: Recap",
    "iconDisp": "flex",
    "image": "./assets/ostia_msg.png",
    "icon": "./assets/dome.png",
    "imageDisp": "flex",
    "descriptionDisp": "block",
    "description": "After saying goodbye to Alain, you continue your adventure by going up the mountain. You managed to find your way through the dense snow, taking advantage of the improvements Alain made to the Torch. <br>Shreds of history surfaced from the unknown: you came across the mysterious ruins of a Dome, which appeared to have been burned by flames but remained intact and hibernated in the frost. One document, one name stuck in your memory: Tersa.<br>But that's not all... Finally you discover an ancient shelter where it turns out that there is a Dome twin to Alain's right on the mountain. Once you reach it, you learn about DT026-B, a village devoted to code, where you have made the acquaintance of a mysterious vestal priestess named Hestia who has provided you with valuable information about your mission: on top of the Mountain, a powerful artificial intelligence blocks access to knowledge and connection. You will therefore have to reach her to defuse the blockade and reconnect all the Domes on the Mountain.",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "Close",
    "choice1Fn": "hideMyCard('l2c4')",
    "choice1Src": "./assets/close.png",
    "choice2Disp": "none",
    "closeBtnDisp": "none"
  },],

   //card of lev3
   "l3alert1": [{
    "titleDisp": "block",
    "title": "Level 3",
    "imageDisp": "none",
    "descriptionDisp": "block",
    "description": "You can now proceed using the level 3 card deck",
    "choice1Fn": "hideMyCard('l3a1')",
    "closeBtnDisp": "flex"
  },],
   "l3card1": [{ //ruin1
    "titleDisp": "flex",
    "title": "<b>Lev3</b>: Recap",
    "iconDisp": "flex",
    "image": "./assets/tersa_msg.png",
    "icon": "./assets/dome.png",
    "imageDisp": "flex",
    "descriptionDisp": "block",
    "description": "You leave the village of Hestia and resume your adventure. The Mountain becomes more impassable and rugged. Weariness almost overwhelms you, until in the Mountain's icy night, you catch a glimpse of a dome that emits a warm light and looks almost like an exotic greenhouse: a Dome that was not marked on the map. <br>You thus make acquaintance with DT009, or the Oasis. Among the bizarre, plant-obsessed inhabitants of this village, you make acquaintance with the most bizarre of them all, Tersa.  Sound familiar?<br>Its name is not new to you: you came across it in the mysterious ruins of a village burned by flames. So you discover the story of Tersa and the Oasis, of the dream of greening the world and making it as hospitable as in the World of Before, but of the stubborn revulsion to reclaim connection. After long discussions, you have managed to convince Tersa that technology can also be beneficial and that your mission can bring improvement for all.<br>Tersa then suggests your next destination: there is a mysterious cave nearby, where a kind of plant grows that should not grow there, as if there were a source of heat coming from inside the rock walls...<br></br>You decide to go and investigate, but what you discover is not just a cave.<br>It is in fact the last Dome of the Mountain.",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "Close",
    "choice1Fn": "hideMyCard('l3c4')",
    "choice1Src": "./assets/close.png",
    "choice2Disp": "none",
    "closeBtnDisp": "none"
  },],
  
  //card of lev4
  "l4alert1": [{
    "titleDisp": "block",
    "title": "Level 4",
    "imageDisp": "none",
    "descriptionDisp": "block",
    "description": "This is your last challenge. <br><b>By proceeding, you won’t be able to backtrack.</b>",
    "closeBtnDisp": "flex"
  },],
  "l4card1": [{ //ruin1
    "titleDisp": "flex",
    "title": "<b>Ruin</b>: Ancient Paintings",
    "iconDisp": "flex",
    "icon": "./assets/ruin.png",
    "imageDisp": "flex",
    "image": "./assets/painting.jpg",
    "descriptionDisp": "block",
    "description": "Following the unusual growth of the plants, you go deeper in a cave, which is warmer yet darker. You manage to see through the darkness with the light of the torch. Now you see there are some paintings on both sides of the wall. <br>Some inscriptions are written in indecipherable languages and alphabets. <br>Are these paintings from the World of Before? Maybe they have been made in different ages… Although one thing seems to be certain: this cave is older than humanity, and it must have been giving shelter to many forms of civilization during history.<br>You just wonder, who are the current dwellers?",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],
  "l4card2": [{ //ruin2
    "titleDisp": "flex",
    "title": "<b>Ruin</b>: letter from Vikar",
    "iconDisp": "flex",
    "icon": "./assets/ruin.png",
    "imageDisp": "flex",
    "image": "./assets/vikarLetter.jpg",
    "descriptionDisp": "block",
    "description": "As you are walking in the cave, there are many objects scattered around in corners. Most of them look like indistinguishable litter, but the light of the torch helps you illuminate the dark environment. In particular, you spot the shiny wax seal of a letter. You open it and start reading it, although the script is to great extent ruined by humidity and therefore impossible to read.<br><b>Sender:</b> Vikar<br><b>Date:</b> 13.02.2140<br><b>Recipient:</b> Assembly of DT001 <br><i>“...I, as your Leader and Great Governor of Kryome, underline the importance of establishing a new form of humanity, freed from the Original Sin of Hyper Connection... A.I. must be worshiped at a distance, because the Evil inside the greedy souls of Men can only utilize such power for bad actions and perpetrating sinful behavior...my mother...killed by the hybris of militaries and scientists... but... the wrath of A.I. will...”</i> <br>The rest of the letter is not readable.",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],
  "l4card3": [{ //cult1
    "titleDisp": "flex",
    "title": "<b>Trial</b>: Cultist",
    "iconDisp": "flex",
    "icon": "./assets/cultist.png",
    "imageDisp": "none",
    "image": "./assets/cult1.jpg", //teo crea icona
    "descriptionDisp": "block",
    "description": "As you move forward, you hear the sound of footsteps. You’re curious where it comes from. Will it be from someone who can help you? Or from some dangerous creatures? <br><b>What do you want to do?</b>",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "Creep forwards",
    "choice1Fn": "hideMyCard('l4c3a')", //funzione 1
    "choice1Src": "./assets/arrow.png",
    "choice2Disp": "flex",
    "choice2": "Find out",
    "choice2Fn": "hideMyCard('l4c3b')", //go on
    "choice2Src": "./assets/arrow.png",
    "closeBtnDisp": "none"
  },],
  "l4card3a": [{ //cult1 choice1
    "titleDisp": "flex",
    "title": "<b>Trial</b>: Cultist",
    "iconDisp": "flex",
    "icon": "./assets/cultist.png",
    "imageDisp": "flex",
    "image": "./assets/cult1.jpg", //teo crea icona
    "descriptionDisp": "block",
    "description": "As you get closer to the sound, you see someone very tall in a black robe. As soon as you see him, he turns around and rushes to you before you can react. From other directions there are three more with the same look and they’re now surrounding you.<br>They show no good intentions, but they seem to be interested in the resources you have. Now the situation becomes clear: either you pay 4 resources and leave, or they’ll arrest you.",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "Pay 4 Resources",
    "choice1Fn": "hideMyCard('l4c3p')", //funzione 1
    "choice1Src": "./assets/resources.png",
    "choice2Disp": "flex",
    "choice2": "Surrender to them",
    "choice2Fn": "hideMyCard('l4c3s')", //go on
    "choice2Src": "./assets/close.png",
    "closeBtnDisp": "none"
  },],
  "l4card3b": [{ //cult1 choice2
    "titleDisp": "flex",
    "title": "<b>Trial</b>: Cultist",
    "iconDisp": "flex",
    "icon": "./assets/cultist.png",
    "imageDisp": "flex",
    "image": "./assets/cult1.jpg", //teo crea icona
    "descriptionDisp": "block",
    "description": "You move quietly hoping not to be noticed. But suddenly, the light from your torch was blocked. Now you look up and realize there’s someone very tall wearing a balck robe exactly in front of you. Before you can react, three more of them with the same look come to you and they’re now encircling you.<br><b>What do you want to do?</b>",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "Pay 4 Resources",
    "choice1Fn": "hideMyCard('l4c3p')",
    "choice1Src": "./assets/resources.png",
    "choice2Disp": "flex",
    "choice2": "Surrender to them",
    "choice2Fn": "hideMyCard('l4c3s')",
    "choice2Src": "./assets/arrow.png",
    "closeBtnDisp": "none"
  },],
  "l4card3s": [{ //cult1 surrender
    "titleDisp": "flex",
    "title": "<b>Trial</b>: Cultist",
    "iconDisp": "flex",
    "icon": "./assets/cultist.png",
    "imageDisp": "none",
    "descriptionDisp": "block",
    "description": "Promptly and without leaving you any other option, the mysterious men in long black dresses handcuff you: despite your efforts, it’s impossible to escape. They subsequently escort you somewhere by jostling; because they have blindfolded you, you cannot see where they are leading you.",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],
  "l4card4": [{ //ruin3
    "titleDisp": "flex",
    "title": "<b>Ruin</b>: Ice grotto",
    "iconDisp": "flex",
    "icon": "./assets/ruin.png",
    "imageDisp": "flex",
    "image": "./assets/cave.jpg",
    "descriptionDisp": "block",
    "description": "Uh, that was close! Thanks to your small stature, you managed to outrun those mysterious men and slip into an air duct. As you walk into the ducts, a ventilation grate gives way and you fall into the room below.... Fortunately, the ceiling is low and the landing is soft.... Hey, but there's fresh snow! What a strange place... It seems to be very cold here!",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "Explore",
    "choice1Fn": "hideMyCard('l4c4')",
    "choice1Src": "./assets/arrow.png",
    "choice2Disp": "none",
    "closeBtnDisp": "none"
  },],
  "l4card4ins": [{ //l4card4 inspect
    "titleDisp": "flex",
    "title": "<b>Ruin</b>: Ice grotto",
    "iconDisp": "flex",
    "icon": "./assets/ruin.png",
    "imageDisp": "flex",
    "image": "./assets/cave.jpg",
    "descriptionDisp": "block",
    "description": "This large room is completely shrouded in ice. Some stalagmites and stalactites give rise to very striking formations.<br>There seems to be a kind of altar in the center of the room....",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "See the altar",
    "choice1Fn": "hideMyCard('l4c4a')",
    "choice1Src": "./assets/arrow.png",
    "choice2Disp": "flex",
    "choice2": "See the sculptures",
    "choice2Fn": "hideMyCard('l4c4b')",
    "choice2Src": "./assets/arrow.png",
    "closeBtnDisp": "none"
  },],
  "l4card4a": [{ //l4card4 altar
    "titleDisp": "flex",
    "title": "<b>Ruin</b>: Altar",
    "iconDisp": "flex",
    "icon": "./assets/ruin.png",
    "imageDisp": "flex",
    "image": "./assets/cave.jpg",
    "descriptionDisp": "block",
    "description": "You approach the altar. In fact, now that you take a good look around, you recognize that the room you are in seems to be a kind of... temple. On the altar are strange objects, perhaps used to perform rituals, and a screen. You try to understand the shreds of text that appear, <b><u>'What our Great AI says' </u></b>.  In another window appears, <br><u>'//Humans use technologies. <br>//Humans connect because they use technology. <br>//Humans create a global society because they use technologies. <br>//Humans are stingy, humans hate each other, humans use technologies to attack each other. <br>//Humans destroy global society and Earth. <br>//How to prevent the destruction of global society and Earth? <br>//Humans do not connect to technology. <br>//Humans do not use technologies to attack each other.'</u>",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "See the sculptures",
    "choice1Fn": "hideMyCard('l4c4aa')",
    "choice1Src": "./assets/arrow.png",
    "choice2Disp": "none",
    "closeBtnDisp": "none"
  },],
  "l4card4b": [{ //l4card4 sculpure
    "titleDisp": "flex",
    "title": "<b>Ruin</b>: Ice sculptures",
    "iconDisp": "flex",
    "icon": "./assets/ruin.png",
    "imageDisp": "flex",
    "image": "./assets/cave.jpg",
    "descriptionDisp": "block",
    "description": "The stalagmites have an artistic form, and you realize that they are ice sculptures, arranged in a more or less regular rhythm around the room. They seem to represent people in a stylized way.... On one of them, the largest, is written 'Vikar, Our only Leader, The Announcer of Rebirth and Truth.'",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "See the altar",
    "choice1Fn": "hideMyCard('l4c4bb')",
    "choice1Src": "./assets/arrow.png",
    "choice2Disp": "none",
    "closeBtnDisp": "none"
  },],
  "l4card4aa": [{ //l4card4 altar
    "titleDisp": "flex",
    "title": "<b>Ruin</b>: Altar",
    "iconDisp": "flex",
    "icon": "./assets/ruin.png",
    "imageDisp": "flex",
    "image": "./assets/cave.jpg",
    "descriptionDisp": "block",
    "description": "You approach the altar. In fact, now that you take a good look around, you recognize that the room you are in seems to be a kind of... temple. On the altar are strange objects, perhaps used to perform rituals, and a screen. You try to understand the shreds of text that appear, <b><u>'What our Great AI says' </u></b>.  In another window appears, <br><u>'//Humans use technologies. <br>//Humans connect because they use technology. <br>//Humans create a global society because they use technologies. <br>//Humans are stingy, humans hate each other, humans use technologies to attack each other. <br>//Humans destroy global society and Earth. <br>//How to prevent the destruction of global society and Earth? <br>//Humans do not connect to technology. <br>//Humans do not use technologies to attack each other.'</u>",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],
  "l4card4bb": [{ //l4card4 sculpure
    "titleDisp": "flex",
    "title": "<b>Ruin</b>: Ice sculptures",
    "iconDisp": "flex",
    "icon": "./assets/ruin.png",
    "imageDisp": "flex",
    "image": "./assets/cave.jpg",
    "descriptionDisp": "block",
    "description": "The stalagmites have an artistic form, and you realize that they are ice sculptures, arranged in a more or less regular rhythm around the room. They seem to represent people in a stylized way.... On one of them, the largest, is written 'Vikar, Our only Leader, The Announcer of Rebirth and Truth.'",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "none",
    "choice2Disp": "none",
    "closeBtnDisp": "flex"
  },],
  "l4card5": [{ //cult2
    "titleDisp": "flex",
    "title": "<b>Trial</b>: Cultist",
    "iconDisp": "flex",
    "icon": "./assets/cultist.png",
    "imageDisp": "flex",
    "image": "./assets/cult2.jpg",
    "descriptionDisp": "block",
    "description": "Damn it! While you were intent on exploring, someone reached you.guards everywhere. <br>Again, you have to make the choice.<br><b>What do you want to do?</b>",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "Pay 4 Resources",
    "choice1Fn": "hideMyCard('l4c5p')", //funzione 1
    "choice1Src": "./assets/resources.png",
    "choice2Disp": "flex",
    "choice2": "surrender to them",
    "choice2Fn": "hideMyCard('l4c5s')", //go on
    "choice2Src": "./assets/arrow.png",
    "closeBtnDisp": "none"
  },],
  "l4card5p": [{ //cult2 pay
    "titleDisp": "flex",
    "title": "<b>Trial</b>: Cultist",
    "iconDisp": "flex",
    "icon": "./assets/cultist.png",
    "imageDisp": "flex",
    "image": "./assets/cult2.jpg",
    "descriptionDisp": "block",
    "description": "They take your resources, but they don’t seem satisfied... <br><b>At this point, you only have one option:</b>",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "none",
    "choice2Disp": "flex",
    "choice2": "surrender to them",
    "choice2Fn": "hideMyCard('l4c5s')", //go on
    "choice2Src": "./assets/arrow.png",
    "closeBtnDisp": "none"
  },],
  "l4card6": [{ //vikar card
    "titleDisp": "flex",
    "title": "<b>Vikar</b>",
    "iconDisp": "flex",
    "icon": "./assets/vikar.png",
    "imageDisp": "flex",
    "image": "./assets/vikar.jpg",
    "descriptionDisp": "none",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "Talk",
    "choice1Src": "./assets/arrow.png",
    "choice1Fn": "hideMyCard('elmVikar1')",
    "choice2Disp": "none",
    "closeBtnDisp": "none"
  },],
  "elmVikar1": [{ //Vikar elm1
    "titleDisp": "none",
    "iconDisp": "none",
    "imageDisp": "flex",
    "srcIframe": "./elmstory/ElmStory_V1/index.html", //here new link
    "descriptionDisp": "none",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Fn": "hideMyCard('closeElm')",
    "closeBtnDisp": "flex"
  },],
  "l4card7": [{ //prigione card
    "titleDisp": "flex",
    "title": "<b>Ruin</b>: Prison",
    "iconDisp": "flex",
    "icon": "./assets/ruin.png",
    "imageDisp": "flex",
    "image": "./assets/jail.jpg",
    "descriptionDisp": "block",
    "description": "You are imprisoned in a cell. You look around, the room is old and shabby, the air is cold, humid and musty. You were not expecting this to happen... Along the way you’ve received a lot of help and guidance which made you determined to reconnect the world. You have almost succeeded… but now you’re in prison.<br>But there’s no time to cry. It’s better to search around to see if there’s anything that might help you.",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "Explore",
    "choice1Src": "./assets/arrow.png",
    "choice1Fn": "hideMyCard('elmJail')",
    "choice2Disp": "none",
    "closeBtnDisp": "none"
  },],
  "elmPrison": [{ //prigione elm
    "titleDisp": "none",
    "iconDisp": "none",
    "imageDisp": "flex",
    "srcIframe": "./elmstory/ElmStory_Cell/index.html", //here new link
    "descriptionDisp": "none",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Fn": "hideMyCard('closeElm')",
    "closeBtnDisp": "flex"
  },],
  "l4card8": [{ //lab card
    "titleDisp": "flex",
    "title": "<b>Ruin</b>: Laboratory",
    "iconDisp": "flex",
    "icon": "./assets/ruin.png",
    "imageDisp": "flex",
    "image": "./assets/lab.jpg",
    "descriptionDisp": "block",
    "description": "After you sneak under the cell sink, you plummet to the ground. the neon light slowly flickers on, revealing a small, cramped room but with neatly arranged files along metal shelves. At a glance, it appears to be a long unused laboratory.",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "Explore",
    "choice1Src": "./assets/arrow.png",
    "choice1Fn": "hideMyCard('elmLab')",
    "choice2Disp": "none",
    "closeBtnDisp": "none"
  },],
  "elmLab": [{ //lab elm
    "titleDisp": "none",
    "iconDisp": "none",
    "imageDisp": "flex",
    "srcIframe": "./elmstory/ElmStory_Lab/index.html", //here new link
    "descriptionDisp": "none",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Fn": "hideMyCard('closeElm')",
    "closeBtnDisp": "flex"
  },],
  "l4card9": [{ //vikar2 card
    "titleDisp": "flex",
    "title": "<b>Vikar</b>",
    "iconDisp": "flex",
    "icon": "./assets/vikar.png",
    "imageDisp": "flex",
    "image": "./assets/vikar.jpg",
    "descriptionDisp": "none",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "Talk",
    "choice1Src": "./assets/arrow.png",
    "choice1Fn": "hideMyCard('elmVikar2')",
    "choice2Disp": "none",
    "closeBtnDisp": "none"
  },],
  "elmVikar2": [{ //Vikar2 elm
    "titleDisp": "none",
    "iconDisp": "none",
    "imageDisp": "flex",
    "srcIframe": "./elmstory/ElmStory_Solon/index.html", //here new link
    "descriptionDisp": "none",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Fn": "hideMyCard('Vikpt2b')",
    "closeBtnDisp": "flex"
  },],


  //card level 5
  "elmVikar2b": [{
    "titleDisp": "none",
    "iconDisp": "none",
    "imageDisp": "flex",
    "srcIframe": "./elmstory/ElmStory_Solon/index.html",
    "descriptionDisp": "none",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Fn": "hideMyCard('end')",
    "closeBtnDisp": "flex"
  }, ],
  "l5card1": [{
    "titleDisp": "block",
    "title": "You've reconnectd the world!",
    "imageDisp": "flex",
    "image": "./assets/ending.jpg",
    "descriptionDisp": "block",
    "margin": "50% - 141px",
    "description": "This is what happens in the end",    
    "choice1Fn": "hideMyCard('l5c2')",
    "closeBtnDisp": "flex"
  },],
  "l5card2": [{
    "titleDisp": "flex",
    "title": "You've got messages!",
    "iconDisp": "none",
    "imageDisp": "none",
    "descriptionDisp": "block",
    "description": "Check the torch to read again the kind words from the friends you made along the way.",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1": "See them",
    "choice1Src": "./assets/arrow.png",
    "choice1Fn": "hideMyCard('l5c3')",
    "choice2": "Close",
    "choice2Src": "./assets/close.png",
    "choice2Fn": "hideMyCard('l5c3c')",
    "closeBtnDisp": "none"
  }, ],
  "l5card3": [{
    "titleDisp": "flex",
    "title": "What now?",
    "iconDisp": "none",
    "imageDisp": "none",
    "descriptionDisp": "block",
    "description": "Now that Kryome is one again you can choose what to do. You can rest and finish the game or you can keep exploring this world as Jael.",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1" : "Keep going",
    "choice1Src": "./assets/arrow.png",
    "choice1Fn": "hideMyCard()",
    "choice2Disp": "flex",
    "choice2" : "End the game",
    "choice2Src": "./assets/close.png",
    "choice2Fn": "hideMyCard('l5c4')",
    "closeBtnDisp": "none"
  }, ],
  "l5card4": [{
    "titleDisp": "flex",
    "title": "...and what about your world?",
    "iconDisp": "none",
    "imageDisp": "none",
    "descriptionDisp": "block",
    "description": "Do you know that 3.7 Billion people are still disconnected?",
    "toolTagDisp": "none",
    "resourceTagDisp": "none",
    "choice1Disp": "flex",
    "choice1" : "Discover more",
    "choice1Src": "./assets/arrow.png",
    "choice1Fn": "hideMyCard('goToWebsite')",
    "choice2Disp": "none",
    "closeBtnDisp": "none"
  }, ],

  "msg1": [{
    "titleDisp": "block",
    "title": "From: <b>Alain</b>",
    "imageDisp": "flex",
    "image": "./assets/alain_msg.png",
    "descriptionDisp": "block",
    "description": "This is Alain from the Forge: thank you Jael, for reconnecting the Mountain! Come visit me, our village is in the throes of a never-before-seen celebration, they will celebrate you as a heroine!",
    "choice1Fn": "hideMyCard('closeElm')",
    "closeBtnDisp": "flex"
  }, ],
  "msg2": [{
    "titleDisp": "block",
    "title": "From: <b>Hestia</b>",
    "imageDisp": "flex",
    "image": "./assets/ostia_msg.png",
    "descriptionDisp": "block",
    "description": "Jael. I have much to learn from your boldness and cunning. The fire of knowledge has won! The era of ice and darkness ends.",
    "closeBtnDisp": "flex"
  }, ],
  "msg3": [{
    "titleDisp": "block",
    "imageDisp": "flex",
    "image": "./assets/tersa_msg.png",
    "title": "From: <b>Tersa</b>",
    "descriptionDisp": "block",
    "description": "...How do you use this goddamn thing? Is it recording? Ah, that's it! Child, you did really well. You changed my mind, there are a lot of valuable tips I can access online for my greenhouse! Besides, my plants look happy too. Thank you, Jael!",
    "closeBtnDisp": "flex"
  }, ],
};


// card layout
const cardHTML = ({ titleDisp, title, iconDisp, icon, imageDisp, image, descriptionDisp, description, toolTagDisp, toolTag, resourceTagDisp, resourceTag, choice1Disp, choice1Fn, choice1, choice1Src, choice2Disp, choice2Fn, choice2, choice2Src, closeBtnDisp }) => `
<div class="cardPanel" style="display:flex">
  <div class="cardTitleBox" style="display:${titleDisp}">
    <img class="cardPanelLogoTool" src="${icon}" style="display:${iconDisp}">
    <h1>${title}</h1>
  </div>
  <iframe class="cardPanelImage" style="display:${imageDisp}; background-image:url('${image}')" >
  </iframe>
  <p style="display:${descriptionDisp}">${description}</p>
  <div class="cardPanelActions">
    <button class="squareTag" style="display: ${toolTagDisp}">
      <img class="labelIcon" src="./assets/tool.png">
      <h3>${toolTag}</h3>
    </button>
    <button class="squareTag" id="resourceFoundTag" style="display: ${resourceTagDisp}">
      <img class="labelIcon" src="./assets/resources.png">
      <h3>${resourceTag}</h3>
    </button>
    <button class="roundedTag" style="display: ${choice1Disp}" onclick="${choice1Fn}">
      <img class="labelIcon" src="${choice1Src}">
      <h3>${choice1}</h3>
    </button>
    <button class="roundedTag" style="display: ${choice2Disp}" onclick="${choice2Fn}">
      <img class="labelIcon" src="${choice2Src}">
      <h3>${choice2}</h3>
    </button>
    <button class="roundedTag" style="display: ${closeBtnDisp}" onclick="hideMyCard()" >
      <img class="labelIcon" src="./assets/close.png">
      <h3>Close</h3>
    </button>
  </div>
</div>` ;
// elmstory layout
const elmHTML = ({ imageDisp, srcIframe, closeBtnDisp, choice1Fn = "hideMyCard()" }) => `
<div class="cardPanel" style="display:flex; top:16px">
  <iframe class="cardPanelImage" style="display:${imageDisp}; height: 610px" src="${srcIframe}" >
  </iframe>
  <div class="cardPanelActions">
    <button class="roundedTag" style="display: ${closeBtnDisp}" onclick=${choice1Fn}>
      <img class="labelIcon" src="./assets/close.png">
      <h3>Close</h3>
    </button>
  </div>
</div>` ;
// alert layout
const alertHTML = ({ titleDisp, title, imageDisp, image, descriptionDisp, description, closeBtnDisp, margin = "50%", choice1Fn = "hideMyCard()" }) => `
<div class="cardPanel" style="display:flex; margin-top: calc(${margin})">
  <div class="cardTitleBox" style="display:${titleDisp}">
    <h1>${title}</h1>
  </div>
  <iframe class="cardPanelImage" style="display:${imageDisp}; background-image:url('${image}')" >
  </iframe>
  <p style="display:${descriptionDisp}">${description}</p>
  <div class="cardPanelActions">
    <button class="roundedTag" id="closeBtnId" style="display: ${closeBtnDisp}" onclick=${choice1Fn}>
      <img class="labelIcon" src="./assets/close.png">
      <h3>Close</h3>
    </button>
  </div>
</div>` ;
// diary layout
const diaryHTML = ({ titleDisp, title, iconDisp, icon, imageDisp, image, descriptionDisp, description, }) => `
<div class="cardDiaryPanel" style="display:flex">
  <div class="cardTitleBox" style="display:${titleDisp}">
    <img class="cardPanelLogoTool" src="${icon}" style="display:${iconDisp}">
    <h1>${title}</h1>
  </div>
  <iframe class="cardPanelImage" style="display:${imageDisp}; background-image:url(${image}); height: 150px; width:auto">
  </iframe>
  <p style="display:${descriptionDisp}; max-height: 72px">${description}</p>
</div>` ;

//RADAR
const dataRadar = {
  "free": [{
    "torchDisp": "flex",
    "radarDisp": "none",
    "alertDisp": "none",
    "panelStatus": "disabled", //"disabled" or ""
    "toolStatus": "disabled", //"disabled" or "" or "active"
    "resourcesStatus": "disabled", //"disabled" or "" or "active"
    "cryptidStatus": "disabled", //"disabled" or "" or "active"
  },],
  "onlyRadar": [{
    "torchDisp": "flex",
    "radarDisp": "flex",
    "alertDisp": "none",
  },],
  "alertResources": [{
    "torchDisp": "flex",
    "radarDisp": "flex",
    "alertDisp": "flex",
    "alertIcon": "./assets/resources.png",
    "resourcesStatus": "active", //"disabled" or "" or "active"
  },],
  "alertTool": [{
    "torchDisp": "flex",
    "radarDisp": "flex",
    "alertDisp": "flex",
    "alertIcon": "./assets/tool.png",
    "toolStatus": "active", //"disabled" or "" or "active"
  },],
  "alertCryptid": [{
    "torchDisp": "flex",
    "radarDisp": "flex",
    "alertDisp": "flex",
    "alertIcon": "./assets/cryp.png",
    "cryptidStatus": "active", //"disabled" or "" or "active"
  },],
  "msgTorch": [{
    "torchDisp": "flex",
    "radarDisp": "flex",
    "alertDisp": "none",
    "messageDisp": "flex",
  },],
  "msgTorchOpen": [{
    "torchDisp": "flex",
    "radarDisp": "none",
    "alertDisp": "none",
    "toolDisp": "none",
    "messageDisp": "flex",
  },],
};
// Radar layout
const torchP = ({ torchDisp, radarDisp, alertDisp, alertIcon, panelStatus, toolDisp = "flex", toolStatus, resourcesStatus, cryptidStatus, messageDisp = "none" }) => `
<div class="torchPanel" style="display:${torchDisp}">
        <div class="torchLeftContent">
          <div class="torchHeader" id="${panelStatus}">
              <div class="roundIcon">
                <img src="./assets/torch.png" alt="icon">
              </div>
              <h2>Torch Panel</h2>
              <div class="roundIcon" id="messageOpen" onclick="openMessages()" style="margin-left:auto; display:${messageDisp}">
                <img src="./assets/message.svg" alt="icon">
              </div>
          </div>
          <div class="torchRadar" style="display:${radarDisp}">
            <img class="radarImage" src="./assets/radar.svg" style="display:flex">
            <div class="cardTitleBox" style="display:${alertDisp}">
              <img class="cardPanelLogoTool" src="${alertIcon}" style="display:flex">
              <h3>Object detected</h3>
            </div>
          </div>
          <div class="torchActions" id="${toolStatus}" style="display:${toolDisp}">
            <button class="squareTag">
              <img class="labelIcon" src="./assets/tool.png" alt="icon">
              <h3>Tools</h3>
            </button>
            <button class="squareTag" id="${resourcesStatus}">
              <img class="labelIcon" src="./assets/resources.png" alt="icon">
              <h3>Resources</h3>
            </button>
            <div class="line"></div>
            <button class="squareTag" id="${cryptidStatus}">
              <img class="labelIcon" src="./assets/cryp.png" alt="icon">
              <h3>Cryptid</h3>
            </button>
          </div>
          <div class="device3" id="messagesHtmlDiv"></div>
       </div>
  </div>` ;
