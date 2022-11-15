//get black from video
let capture;
let lastTimeCheck = 0;
let stampSpeed = 1000; // how fast the sketch
let drawIndex = 0;
let blackBar = 0;

//set card
let cardCounter = -2; //put -3 to start with solon
let card = false;
//set level
let currentLevel = 0;
//set navbar
let playerActive = false;
let torchActive = false;
let diaryActive = false;
//set tools
let tools = 0;
//let htmlbox
let cardHtmlDiv
let diaryHtmlDiv
let torchHtmlDiv
//set sms panel
let smsOpen = false;

let online;
let testonline = false;
//SETUP
function setup() {

window.alert(
  "webapp di un gioco da tavolo ibrido (carte fisiche + app). Per simulare le carte, coprire la webcam o premere la barra spaziatrice. Link to repo: https://github.com/JessicaMoreschi/Kryome-Offline")
  //video
  video = createCapture(VIDEO);
  video.size(width / 2, height / 2);
  video.play();
  video.hide();

  // GET PANELS
  playerPanel = document.getElementById('playerPanel')          //player panel
  diaryPanel = document.getElementById('diaryPanel')            //diary panel
  torchHtmlDiv = document.getElementById('torchHtmlDiv');       //html torch
  cardHtmlDiv = document.getElementById('cardHtmlDiv');         //html card
  diaryHtmlDiv = document.getElementById('diaryHtmlDiv');       //html diary
  errorPanel = document.getElementById('errorPanel')            //error Torch panel
  errorCardPanel = document.getElementById('errorCardPanel')    //error Card panel
  errorLevelPanel = document.getElementById('errorLevelPanel')  //error level panel

  //hide every panel
  hideAllPanels()

  // EVENTLISTENERS
  //navigator bar
  document.getElementsByClassName('navBarSegment')[0].addEventListener("click", showPlayerPanel)
  document.getElementsByClassName('navBarSegment')[1].addEventListener("click", showTorchPanel)
  document.getElementsByClassName('navBarSegment')[2].addEventListener("click", showDiaryPanel)
  //errors
  //close panels
  document.getElementById('closeError').addEventListener("click", hideError)
  document.getElementById('closePanel').addEventListener("click", hideCardError)
  document.getElementById('closeLevelPanel').addEventListener("click", hideLevelError)
  //show errors
  torchHtmlDiv.addEventListener("click", errorTorch)
  document.getElementById('cardPlace').addEventListener("click", showCardError)

  //define in which level I am
  setLevel()
}

//DRAW
function draw() {

  //TO PLAY ONLINE: (line below not commented)
  online = false;
  // TO PLAY OFFLINE: (line belows not commented)
  // online = navigator.onLine;
  //check if the connection has changed
  // if (online != testonline) {
  //   connectionAlterts();
  //   testonline = online;
  // }

  //Detect color black
  let redTotal = 0;
  let blueTotal = 0;
  let greenTotal = 0;
  video.loadPixels();
  for (let cx = 0; cx < video.width; cx++) {
    for (let cy = 0; cy < video.height; cy++) {
      if (cy > blackBar && cy < video.height - blackBar) {
        let offset = int(((cy * video.width) + cx) * 4);
        let redc = video.pixels[offset];
        let greenc = video.pixels[offset + 1];
        let bluec = video.pixels[offset + 2];
        redTotal += redc;
        greenTotal += greenc;
        blueTotal += bluec;
      }
    }
  }
  let redAvg = int(redTotal / (video.width * video.height));
  let greenAvg = int(greenTotal / (video.width * video.height));
  let blueAvg = int(blueTotal / (video.width * video.height));

  //when to fire showMyCard()
  if (millis() - lastTimeCheck > stampSpeed) {
    if ((drawIndex >= 2 && (cardCounter == -3 || cardCounter == -2 || cardCounter == -1 || cardCounter == 0 || cardCounter == 14 || cardCounter == 31)) && card == false && online==false)
      showMyCard();
    lastTimeCheck = millis();
    if (((redAvg < 10 && greenAvg < 10 && blueAvg < 10) || (keyIsDown(32))) && drawIndex > 4 && card == false && online==false)
      showMyCard()
    drawIndex++;
    lastTimeCheck = millis()
  }

  //shortcuts
  if (keyIsDown(50)) {
    hideMyCard('closeElmAlain')//lev2
  } else if (keyIsDown(51)) {
    hideMyCard('l2c4')//lev3
  } else if (keyIsDown(52)) {
    hideMyCard('l3c4')//lev4
  } else if (keyIsDown(53)) {
    hideMyCard('checkC')
  }
  
}//end draw

//CREATE CARDS
function showMyCard() {
  // setup: elmstory1 + alerts
  if (cardCounter == -3) {
    cardHtmlDiv.innerHTML = dataCard.elm1.map(elmHTML);
  } else if (cardCounter == -2) {
    cardHtmlDiv.innerHTML = dataCard.alert1.map(alertHTML);
    diaryHtmlDiv.innerHTML += dataCard.alert1.map(diaryHTML);
  } else if (cardCounter == -1) {
    cardHtmlDiv.innerHTML = dataCard.alert2.map(alertHTML);
    diaryHtmlDiv.innerHTML += dataCard.alert2.map(diaryHTML);
  } else if (cardCounter == 0) {
    cardHtmlDiv.innerHTML = dataCard.alert3.map(alertHTML);
  }
  //cards lev1
  else if (cardCounter == 1) {
    cardHtmlDiv.innerHTML = dataCard.card1.map(cardHTML);
    hideAllPanels();
  } else if (cardCounter == 2) {
    cardHtmlDiv.innerHTML = dataCard.card2.map(cardHTML);
    diaryHtmlDiv.innerHTML += dataCard.card2.map(diaryHTML);
  } else if (cardCounter == 3) {
    cardHtmlDiv.innerHTML = dataCard.card3.map(cardHTML);
  } else if (cardCounter == 4) {
    cardHtmlDiv.innerHTML = dataCard.card4.map(cardHTML);
    diaryHtmlDiv.innerHTML += dataCard.card4.map(diaryHTML);
  } else if (cardCounter == 5) {
    cardHtmlDiv.innerHTML = dataCard.card5.map(cardHTML);
  } else if (cardCounter == 6) {
    cardHtmlDiv.innerHTML = dataCard.card6.map(cardHTML);
  } else if (cardCounter == 7) {
    cardHtmlDiv.innerHTML = dataCard.card7.map(cardHTML);
  } else if (cardCounter == 8) {
    cardHtmlDiv.innerHTML = dataCard.card8.map(cardHTML);
  } else if (cardCounter == 9) {
    cardHtmlDiv.innerHTML = dataCard.card9.map(cardHTML);
    diaryHtmlDiv.innerHTML += dataCard.card9.map(diaryHTML);
  } else if (cardCounter == 10) {
    cardHtmlDiv.innerHTML = dataCard.card10.map(cardHTML);
  } else if (cardCounter == 12) {
    cardHtmlDiv.innerHTML = dataCard.card12.map(cardHTML);
  } else if (cardCounter == 13) {
    cardHtmlDiv.innerHTML = dataCard.card13.map(cardHTML);
    diaryHtmlDiv.innerHTML += dataCard.card13.map(diaryHTML);
  }
  //alain's dome
  else if (cardCounter == 14) {
    cardHtmlDiv.innerHTML = dataCard.elm2.map(elmHTML);
    hideAllPanels();
  }
  //card level 4
  else if (cardCounter == 31) {
    cardHtmlDiv.innerHTML = dataCard.l4alert1.map(alertHTML);
  } else if (cardCounter == 32) {
    cardHtmlDiv.innerHTML = dataCard.l4card1.map(cardHTML);
    diaryHtmlDiv.innerHTML += dataCard.l4card1.map(diaryHTML);
  } else if (cardCounter == 33) {
    cardHtmlDiv.innerHTML = dataCard.l4card2.map(cardHTML);
    diaryHtmlDiv.innerHTML += dataCard.l4card2.map(diaryHTML);
  } else if (cardCounter == 34) {
    cardHtmlDiv.innerHTML = dataCard.l4card3.map(cardHTML);
  } else if (cardCounter == 35) {
    cardHtmlDiv.innerHTML = dataCard.l4card3a.map(cardHTML);
  } else if (cardCounter == 36) {
    cardHtmlDiv.innerHTML = dataCard.l4card3b.map(cardHTML);
  } else if (cardCounter == 37) {
    cardHtmlDiv.innerHTML = dataCard.l4card4.map(cardHTML);
    diaryHtmlDiv.innerHTML += dataCard.l4card4.map(diaryHTML);
    diaryHtmlDiv.innerHTML += dataCard.l4card4ins.map(diaryHTML);
    diaryHtmlDiv.innerHTML += dataCard.l4card4a.map(diaryHTML);
    diaryHtmlDiv.innerHTML += dataCard.l4card4b.map(diaryHTML);
  } else if (cardCounter == 38) {
    cardHtmlDiv.innerHTML = dataCard.l4card5.map(cardHTML);
  } else if (cardCounter == 39) {
    cardHtmlDiv.innerHTML = dataCard.l4card6.map(cardHTML);
  } else if (cardCounter == 40) {
    cardHtmlDiv.innerHTML = dataCard.l4card7.map(cardHTML);
    diaryHtmlDiv.innerHTML += dataCard.l4card7.map(diaryHTML);
  } else if (cardCounter == 41) {
    cardHtmlDiv.innerHTML = dataCard.l4card8.map(cardHTML);
    diaryHtmlDiv.innerHTML += dataCard.l4card8.map(diaryHTML);
  } else if (cardCounter == 42) {
    cardHtmlDiv.innerHTML = dataCard.l4card9.map(cardHTML);
  }

  card = true;
  cardCounter++;
}

//SET UP NEXT CARD
function hideMyCard(n) {

  //after solon> access level1
  if (n == 'closeElmSolon') {
    showTopBar();
    cardHtmlDiv.innerHTML = "";
    card = false;
  } else if (n == 'startLev1') {
    showTopBar();
    showTorchPanel();
    cardHtmlDiv.innerHTML = "";
    card = false;
  } else if (n == '7a') { //card7 choise1
    cardCounter = 12; //percorso lungo
    cardHtmlDiv.innerHTML = "";
    card = false;
  } else if (cardCounter == 14) { //da percorso lungo a dome
    cardCounter = 9;
    cardHtmlDiv.innerHTML = "";
    card = false;
  } else if (n == '10Forge') { //da dome card a elmstory
    cardCounter = 14;
    cardHtmlDiv.innerHTML = "";
    card = false;
  }
  //after alain> access level4 
  else if (n == 'closeElmAlain') {
    cardCounter = 31; //lev4
    torchHtmlDiv.removeEventListener("click", errorTorch);
    document.getElementById('device').style.background = "#799050";
    cardHtmlDiv.innerHTML = dataCard.l2alert1.map(alertHTML);
    setLevel();
    currentLevel = 2;//set level
    let lev = document.getElementsByClassName('lev'); for (var levN = 0; levN < lev.length; levN++) {
      if (levN <= currentLevel) { lev[levN].removeEventListener("click", showLevelError); }
    }
    document.getElementsByClassName('lev')[0].style.background = "rgba(233, 239, 249, 0.4)"
    document.getElementsByClassName('lev')[1].style.background = "rgba(255, 255, 255, 1)"
  }
  //lev2
  else if (n == 'l2a1') {//l2 alert1
    cardHtmlDiv.innerHTML = dataCard.l2card1.map(cardHTML);
  } else if (n == 'l2c4') {//l2 card1
    document.getElementById('device').style.background = "#50906b";
    cardHtmlDiv.innerHTML = dataCard.l3alert1.map(alertHTML);
    setLevel();
    currentLevel = 3;//set level
    let lev = document.getElementsByClassName('lev'); for (var levN = 0; levN < lev.length; levN++) {
      if (levN <= currentLevel) { lev[levN].removeEventListener("click", showLevelError); }
    }
    document.getElementsByClassName('lev')[1].style.background = "rgba(233, 239, 249, 0.4)"
    document.getElementsByClassName('lev')[2].style.background = "rgba(255, 255, 255, 1)"
  }
  //lev3
  else if (n == 'l3a1') {//l3 alert1
    cardHtmlDiv.innerHTML = dataCard.l3card1.map(cardHTML);
  } else if (n == 'l3c4') {//l3 card1
    cardCounter = 31; //lev4
    // showTorchPanel()
    showTopBar();
    document.getElementById('device').style.background = "url(./assets/SfondiLV4.png)";
    document.getElementById('device').style.backgroundSize = "cover";
    cardHtmlDiv.innerHTML = "";
    card = false;
    setLevel();
    currentLevel = 4;//set level
    let lev = document.getElementsByClassName('lev'); for (var levN = 0; levN < lev.length; levN++) {
      if (levN <= currentLevel) { lev[levN].removeEventListener("click", showLevelError); }
    }
    document.getElementsByClassName('lev')[2].style.background = "rgba(233, 239, 249, 0.4)"
    document.getElementsByClassName('lev')[3].style.background = "rgba(255, 255, 255, 1)"
  }
  //lev4
  else if (n == 'l4c3b') {//l4card3 choice2
    cardCounter = 36;
    cardHtmlDiv.innerHTML = "";
    card = false;
  } else if (n == 'l4c3p') {//l4card3 pay
    cardCounter = 37; //metti viker
    cardHtmlDiv.innerHTML = "";
    card = false;
  } else if (n == 'l4c3s') {//l4card3 surrender
    cardCounter = 37; //metti viker
    cardHtmlDiv.innerHTML = dataCard.l4card3s.map(cardHTML);
  } else if (n == 'l4c4') {//l4card4
    cardHtmlDiv.innerHTML = dataCard.l4card4ins.map(cardHTML); //l4card4 inspect
  } else if (n == 'l4c4a') {//l4card4 altar
    cardHtmlDiv.innerHTML = dataCard.l4card4a.map(cardHTML);
  } else if (n == 'l4c4b') {//l4card4 sculpture
    cardHtmlDiv.innerHTML = dataCard.l4card4b.map(cardHTML);
  } else if (n == 'l4c4aa') {//l4card4 altar2
    cardHtmlDiv.innerHTML = dataCard.l4card4bb.map(cardHTML);
  } else if (n == 'l4c4bb') {//l4card4 sculpture 2
    cardHtmlDiv.innerHTML = dataCard.l4card4aa.map(cardHTML);
  } else if (n == 'l4c5s') {//l4card3 surrender
    cardCounter = 39; //metti viker
    cardHtmlDiv.innerHTML = dataCard.l4card3s.map(cardHTML);
  } else if (n == 'l4c5p') {//l4card5 pay
    cardHtmlDiv.innerHTML = dataCard.l4card5p.map(cardHTML);
  } else if (n == 'elmVikar1') {//da vikar card a elm
    hideTopBar();
    cardHtmlDiv.innerHTML = dataCard.elmVikar1.map(elmHTML);
  } else if (n == 'elmJail') {//da jail card a elm
    hideTopBar();
    cardHtmlDiv.innerHTML = dataCard.elmPrison.map(elmHTML);
  } else if (n == 'elmLab') {//da lab card a elm
    hideTopBar();
    cardHtmlDiv.innerHTML = dataCard.elmLab.map(elmHTML);
  } else if (n == 'elmVikar2') {//da vikar2 card a elm
    hideTopBar();
    cardHtmlDiv.innerHTML = dataCard.elmVikar2.map(elmHTML);
  } else if (n == 'Vikpt2b') { //da vikarelm2 alla seconde parte dell'elm
    cardHtmlDiv.innerHTML = dataCard.elmVikar2b.map(elmHTML)
  } else if (n == 'closeElm') {//close elm visualization
    showTopBar();
    cardHtmlDiv.innerHTML = "";
    card = false;
  }
  //lev5
  else if (n== 'checkC'){
    cardHtmlDiv.innerHTML = "";
    card = false;
    currentLevel=5;
    connectionAlterts('end')
  }
  else if (n == 'end') {
    hideTopBar()
    cardHtmlDiv.innerHTML = dataCard.l5card1.map(alertHTML)
    currentLevel = 5;    //set level
    let lev = document.getElementsByClassName('lev');
    hideAllPanels();
  } else if (n == 'l5c2') {
    hideTopBar()
    cardHtmlDiv.innerHTML = dataCard.l5card2.map(cardHTML);
    showTorchPanel()
  } else if (n == 'l5c3') {
    hideTopBar()
    openMessages()
  } else if (n == 'l5c3c') {
    hideTopBar()
    hideAllPanels();
    cardHtmlDiv.innerHTML = dataCard.l5card3.map(cardHTML);
  }
  //end: go to website
    else if (n == 'l5c4') {
      hideAllPanels();
      hideTopBar()
      cardHtmlDiv.innerHTML = dataCard.l5card4.map(cardHTML);
  } else if (n == 'goToWebsite') {
    window.open("https://sdgs.un.org/goals/goal17", "_self");
  }


  else {
    cardHtmlDiv.innerHTML = "";
    card = false;
  }


  testonline = online; //every time you close a panel reset testonline
}


//SHOW PANELS/ERRORS
// Player panel
function showPlayerPanel() {
  if (playerActive == false) {
    playerActive = true;
    torchActive = false;
    diaryActive = true;
    playerPanel.style.display = "flex";
    torchHtmlDiv.innerHTML = "";
    diaryPanel.style.display = "none";
    document.getElementsByClassName('navBarIndicator')[0].setAttribute("id", "navBarIndicatorActive");
    document.getElementsByClassName('navBarIndicator')[1].removeAttribute("id");
    document.getElementsByClassName('navBarIndicator')[2].removeAttribute("id")
    document.getElementById('toolsNmbr').innerHTML = tools;
  } else if (playerActive == true) {
    hideAllPanels()
  }
}
// Torch panel
function showTorchPanel() {
  if (torchActive == false) {
    if (currentLevel == 0) {
      torchHtmlDiv.innerHTML = dataRadar.free.map(torchP);
    } else if (currentLevel > 0 && currentLevel < 5) {
      torchHtmlDiv.innerHTML = dataRadar.onlyRadar.map(torchP);
    } else if (currentLevel == 5) {
      torchHtmlDiv.innerHTML = dataRadar.msgTorch.map(torchP);
    }
    playerActive = false;
    torchActive = true;
    diaryActive = false;
    playerPanel.style.display = "none";
    diaryPanel.style.display = "none";
    document.getElementsByClassName('navBarIndicator')[1].setAttribute("id", "navBarIndicatorActive");
    document.getElementsByClassName('navBarIndicator')[0].removeAttribute("id");
    document.getElementsByClassName('navBarIndicator')[2].removeAttribute("id")
  } else if (torchActive == true) {
    hideAllPanels()
  }
}
// Diary panel
function showDiaryPanel() {
  if (diaryActive == false) {
    playerActive = false;
    torchActive = false;
    diaryActive = true;
    torchHtmlDiv.innerHTML = "";
    playerPanel.style.display = "none";
    diaryPanel.style.display = "flex";
    document.getElementsByClassName('navBarIndicator')[1].removeAttribute("id");
    document.getElementsByClassName('navBarIndicator')[0].removeAttribute("id");
    document.getElementsByClassName('navBarIndicator')[2].setAttribute("id", "navBarIndicatorActive");
  } else if (diaryActive == true) {
    hideAllPanels()
  }
}
//hide all nav panel
function hideAllPanels() {
  playerActive = false;
  torchActive = false;
  diaryActive = false;
  playerPanel.style.display = "none";
  torchHtmlDiv.innerHTML = "";
  diaryPanel.style.display = "none";
  document.getElementsByClassName('navBarIndicator')[0].removeAttribute("id");
  document.getElementsByClassName('navBarIndicator')[1].removeAttribute("id");
  document.getElementsByClassName('navBarIndicator')[2].removeAttribute("id")
}

//torch error
function errorTorch() {
  errorPanel.style.display = "flex"
}
//card error
function showCardError() {
  if (card == false) {
    errorCardPanel.style.display = "flex";
  }
}
//set level error
function setLevel() {
  lev = document.getElementsByClassName('lev'); for (var levN = 0; levN < lev.length; levN++) {
    if (levN > currentLevel) {
      lev[levN].addEventListener("click", showLevelError)
    }
  }
}
//level error
function showLevelError() {
  errorLevelPanel.style.display = "flex"
}
function showTopBar() {
  document.getElementById('levPlace').style.display = "flex";
  document.getElementById('cardPlace').style.display = "flex";
}

//HIDE PANELS/ERRORS
//hide errors
function hideError() {
  errorPanel.style.display = "none"
}
function hideCardError() {
  errorCardPanel.style.display = "none"
}
function hideLevelError() {
  errorLevelPanel.style.display = "none"
}
function hideTopBar() {
  document.getElementById('levPlace').style.display = "none";
  document.getElementById('cardPlace').style.display = "none";
}

function openMessages() {
  if (smsOpen == false) {
    smsOpen = true;
    cardHtmlDiv.innerHTML ="";
    showTorchPanel();
    torchHtmlDiv.innerHTML = dataRadar.msgTorchOpen.map(torchP);
    document.getElementById('messagesHtmlDiv').innerHTML += dataCard.msg1.map(diaryHTML);
    document.getElementById('messagesHtmlDiv').innerHTML += dataCard.msg2.map(diaryHTML);
    document.getElementById('messagesHtmlDiv').innerHTML += dataCard.msg3.map(diaryHTML);
  } else if (smsOpen == true) {
    smsOpen = false;
    torchHtmlDiv.innerHTML = dataRadar.msgTorch.map(torchP);
    hideAllPanels();
    cardHtmlDiv.innerHTML = dataCard.l5card3.map(cardHTML);
  }
}

function connectionAlterts(c) {
  //turn off connection alert
  if (online == true && currentLevel < 5) {
    cardHtmlDiv.innerHTML = dataCard.alertConnectionOff.map(alertHTML);
    document.getElementById("closeBtnId").disabled = true; 
    document.getElementById("closeBtnId").style.opacity = "0.38";
  }
  else if (online == false && currentLevel < 5) {
    document.getElementById("closeBtnId").disabled = false;
    document.getElementById("closeBtnId").style.opacity = "1";
  }
  //turn on connection alert
  else if (c=="end") {
    cardHtmlDiv.innerHTML = dataCard.alertConnectionOn.map(alertHTML);
    document.getElementById("closeBtnId").disabled = true;
    document.getElementById("closeBtnId").style.opacity = "0.38";
    currentLevel == 5
  }
  else if (online == true && currentLevel == 5) {
    document.getElementById("closeBtnId").disabled = false;
    document.getElementById("closeBtnId").style.opacity = "1";
  }
}
