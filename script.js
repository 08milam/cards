// PORJECT NAME: matching game
// FILE: script.js
// DATE: 12/30/2023
// MOD DATE:
// MOD CHANGES:
// MOD LINE:
// VERSION: 0.0.1
// PROGRAMER: Charles Matthew Milam Jr

// Main container
const contentContainer = document.querySelector(".contentcontainer");

// Create screen function
function createScreen(className, parentElement) {
  const screen = document.createElement("div");
  screen.setAttribute("class", className);
  parentElement.appendChild(screen);
  return screen;
}

// Start screen
const startMenu = createScreen("game", contentContainer);

// Game screen
const game = createScreen("startMenu", contentContainer);

// Intro container
const introContainer = createScreen("createIntro", startMenu);

// Start intro
const startIntro = document.createElement("h1");
startIntro.setAttribute("class", "startMessage");
startIntro.textContent = "MATCHING CARD GAME";
introContainer.appendChild(startIntro);

// Top button container
const buttonContainer = createScreen("buttoncontainer", game);

// Start container
const createStart = createScreen("createStart", startMenu);

// Start button
const startBtn = document.createElement("button");
startBtn.setAttribute("class", "startBtn");
startBtn.textContent = "START";
createStart.appendChild(startBtn);

// Projects container
const createProject = createScreen("projects", startMenu);

// Create link
const createA = document.createElement("a");
createA.setAttribute("href", "https://08milam.github.io/projects/");
createProject.appendChild(createA);

// Projects button
const projectBtn = document.createElement("button");
projectBtn.setAttribute("class", "projectsBtn");
projectBtn.textContent = "PROJECTS";
createA.appendChild(projectBtn);

// Start menu button
const startMenuBtn = document.createElement("button");
startMenuBtn.setAttribute("class", "startmeueBtn");
startMenuBtn.textContent = "START MENU";
buttonContainer.appendChild(startMenuBtn);

// Reset button
const reset = document.createElement("button");
reset.setAttribute("class", "reset");
reset.textContent = "RESET";
buttonContainer.appendChild(reset);

// Click event listener for the reset button
reset.addEventListener("click", function () {
  location.reload();
});

// Score container
const createScore = createScreen("createScore", buttonContainer);

// Score
const bestscore = document.createElement("h2");
bestscore.setAttribute("class", "bestScore");
createScore.appendChild(bestscore);

// Game transition controls
startMenuBtn.addEventListener("click", function () {
  contentContainer.classList.toggle("startgame");
});

startBtn.addEventListener("click", function () {
  contentContainer.classList.toggle("startgame");
});


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// GAME LOGIC
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// container for all tiles
function tilesContainer() {
  tileContainer = document.createElement("div");
  tileContainer.setAttribute("class", "tilecontainer");
  game.appendChild(tileContainer);
}
tilesContainer();
//list of all tiles to be used
const tileSet = () => [
  { img: "coy.jpg", name: "coy" },
  { img: "elephant.jpg", name: "elephant" },
  { img: "gorilla.jpg", name: "gorilla" },
  { img: "horse.jpg", name: "horse" },
  { img: "lion.jpg", name: "lion" },
  { img: "panda.jpg", name: "panda" },
  { img: "parrot.jpg", name: "parrot" },
  { img: "peacock.jpg", name: "peacock" },
  { img: "salamander.jpg", name: "salamander" },
  { img: "wolf.jpg", name: "worf" },
  { img: "coy.jpg", name: "coy" },
  { img: "elephant.jpg", name: "elephant" },
  { img: "gorilla.jpg", name: "gorilla" },
  { img: "horse.jpg", name: "horse" },
  { img: "lion.jpg", name: "lion" },
  { img: "panda.jpg", name: "panda" },
  { img: "parrot.jpg", name: "parrot" },
  { img: "peacock.jpg", name: "peacock" },
  { img: "salamander.jpg", name: "salamander" },
  { img: "wolf.jpg", name: "worf" },
];
// make tiles random
randomize = () => {
  const tileData = tileSet();
  randomTile = tileData.sort(() => Math.random() - 0.5);
  return tileData;
};
// generate tile to be used
tileGenerator = function () {
  const tileData = randomize();
  // tiledata take all elaments and attributes and combines them for each tile in tile set
  tileData.forEach((item) => {
    createTile = function () {
      tile = document.createElement("div");
      tile.setAttribute("class", "tile");
      tileContainer.appendChild(tile);
    };
    createTile();
    // makes a container for createFront and sets attribute
    createFront = function () {
      front = document.createElement("img");
      front.setAttribute("class", "front");
      front.src = item.img;
      tile.setAttribute("name", item.name);
      tile.appendChild(front);
    };
    createFront();
    // makes a container for back and sets attribute
    back = document.createElement("img");
    back.setAttribute("class", "back");
    back.src = "back.jpg";
    tile.appendChild(back);
  });
};
tileGenerator();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// revealedCount shows score only active after game is over will be on start screan
let revealedCount = 0;
let awaitingEndOfMove = false;
let activeTile = false;
const clickedCards = document.querySelectorAll(".tile");
// flipTile will chech if the toggle is flip
function flipTile(e) {
  if (awaitingEndOfMove) return;
  this.classList.add("flip");
  if (!activeTile) {
    activeTile = true;
    firsttile = this;
  } else {
    activeTile = false;
    secondTile = this;
    // will remove the listener if match
    if (firsttile.getAttribute("name") === secondTile.getAttribute("name")) {
      firsttile.removeEventListener("click", flipTile);
      secondTile.removeEventListener("click", flipTile);
    } else {
      awaitingEndOfMove = true;
      setTimeout(function () {
        // will remove the listener if match
        firsttile.classList.remove("flip");
        secondTile.classList.remove("flip");
        awaitingEndOfMove = false;
      }, 2000);
      //shows the score
      revealedCount++;
      bestscore.textContent = "COUNT:" + " " + revealedCount;
    }
  }
  checktile(e);
}
// will till the tile has been fliped
clickedCards.forEach((card) => card.addEventListener("click", flipTile));

const checktile = (e) => {
  const clickedTile = e.target;
  if (clickedCards.length === 2) {
  }
};
