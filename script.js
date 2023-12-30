
// PORJECT NAME: matching game
// FILE: script.js
// DATE: 12/30/2023
// MOD DATE: 
// MOD CHANGES: 
// MOD LINE: 
// VERSION: 0.0.1
// PROGRAMER: Charles Matthew Milam Jr

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// HTML JAVASCRIP LINK AND MAIN CONTAINER
contentcontainer = document.querySelector('.contentcontainer');
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// START SCREEN
// start screen is the container for element from line 27 to 58
startScreen = function(){
    startMenu = document.createElement('div');
    startMenu.setAttribute('class', 'game');
        contentcontainer.appendChild(startMenu);
    };
    startScreen();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// GAME SCREEN
// game screen is the container for element from line 27 to 57
gameScreen = function(){
    game = document.createElement('div');
    game.setAttribute('class', 'startMenu');
        contentcontainer.appendChild(game);
    };
    gameScreen();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//INTRO
introContainer = function(){
    createIntro = document.createElement('div');
    createIntro.setAttribute('class', 'createIntro');
        startMenu.appendChild(createIntro);
    };
    introContainer();

startintro = function(){
    startMessage = document.createElement('h1');
    startMessage.setAttribute('class', 'startMessage');
    startMessage.textContent = "MATCHING CARD GAME";
        createIntro.appendChild(startMessage);
    };
    startintro();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//SCORE
scoreContainer = function(){
    createScore = document.createElement('div');
    createScore.setAttribute('class', 'createScore');
        startMenu.appendChild(createScore);
    }
    scoreContainer();

score = function(){
    bestscore = document.createElement('h2');
    bestscore.setAttribute('class', 'bestScore');
    
        createScore.appendChild(bestscore);
    };
    score();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// START BUTTON
startContainer = function(){
    createStart = document.createElement('div');
    createStart.setAttribute('class', 'createStart');
        startMenu.appendChild(createStart);
    };
    startContainer();

startbutton = function(){
    startBtn = document.createElement('button');
    startBtn.setAttribute('class', 'startBtn');
    startBtn.textContent = 'START';
        createStart.appendChild(startBtn);
    };
    startbutton();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// BACK TO PROJECTS
projectsContainer = function(){
    createProject = document.createElement('div');
    createProject.setAttribute('class', 'projects');
        startMenu.appendChild(createProject);
    };
    projectsContainer();
createLink = function(){
    createA = document.createElement('a');
    createA.setAttribute('href', 'https://08milam.github.io/projects/');
        createProject.appendChild(createA);
    };
createLink()
startbutton = function(){
    projectBtn = document.createElement('button');
    projectBtn.setAttribute('class', 'projectsBtn');
    projectBtn.textContent = 'PROJECTS';
        createA.appendChild(projectBtn);
    };
    startbutton();

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// START MENU BUTTON
backbutton = function(){
    startMenuBtn = document.createElement('button');
    startMenuBtn.setAttribute('class', 'startmeueBtn');
    startMenuBtn.textContent = 'START MENU';
        game.appendChild(startMenuBtn);
    };
    backbutton();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// GAME TRANSITION CONTROLS: START MENU, GAME SCREEN
start = function(){
    startMenuBtn.addEventListener('click', function(){
        contentcontainer.classList.toggle('startgame');
        });
    };
    start();
back = function(){
    startBtn.addEventListener('click', function(){
        contentcontainer.classList.toggle('startgame');
        });
    };
    back();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// GAME LOGIC
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// container for all tiles
tilesContainer = function() {
    tileContainer = document.createElement('div');
    tileContainer.setAttribute('class', 'tilecontainer');
        game.appendChild(tileContainer);
};
tilesContainer();
//list of all tiles to be used
const tileSet = () => [
    {img:'coy.jpg', name: 'coy'},
    {img:'elephant.jpg', name: 'elephant'},
    {img:'gorilla.jpg', name: 'gorilla'},
    {img:'horse.jpg', name: 'horse'},
    {img:'lion.jpg', name: 'lion'},
    {img:'panda.jpg', name: 'panda'},
    {img:'parrot.jpg', name: 'parrot'},
    {img:'peacock.jpg', name: 'peacock'},
    {img:'salamander.jpg', name: 'salamander' },
    {img:'wolf.jpg', name: 'worf'},
    {img:'coy.jpg', name: 'coy'},
    {img:'elephant.jpg', name: 'elephant'},
    {img:'gorilla.jpg', name: 'gorilla'},
    {img:'horse.jpg', name: 'horse'},
    {img:'lion.jpg', name: 'lion'},
    {img:'panda.jpg', name: 'panda'},
    {img:'parrot.jpg', name: 'parrot'},
    {img:'peacock.jpg', name: 'peacock'},
    {img:'salamander.jpg', name: 'salamander' },
    {img:'wolf.jpg', name: 'worf'}
];
// make tiles random
randomize = () => {
    const tileData = tileSet();
    randomTile = tileData.sort(() => Math.random() - 0.5);
        return tileData;
    };
// generate tile to be used
tileGenerator = function(){
    const tileData = randomize();
// tiledata take all elaments and attributes and combines them for each tile in tile set
tileData.forEach(item =>{
// makes a container for createTile and sets attribute
createTile = function(){
    tile = document.createElement('div');
    tile.setAttribute('class', 'tile');
        tileContainer.appendChild(tile);
    };
    createTile();
// makes a container for createFront and sets attribute
createFront = function(){
    front = document.createElement('img');
    front.setAttribute('class', 'front');
    front.src = item.img;
    tile.setAttribute('name', item.name);
        tile.appendChild(front);
    };
    createFront();
// makes a container for back and sets attribute
        back = document.createElement('img');
        back.setAttribute('class', 'back');
        back.src = 'back.jpg';
            tile.appendChild(back);
        });
    };
tileGenerator();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// revealedCount shows score only active after game is over will be on start screan  
let revealedCount = 0; 
// awaitingEndOfMove will not let player select more than two tiles if no match
let awaitingEndOfMove = false;
let activeTile = false;
const clickedCards = document.querySelectorAll('.tile');
// flipTile will chech if the toggle is flip
function flipTile(e){
    if(awaitingEndOfMove) return;
// will add the filp class
    this.classList.add('flip');
// is tile avtive true false
    if(!activeTile){
        activeTile = true;
        firsttile = this;
    }else{
        activeTile = false;
        secondTile = this;
// will remove the listener if match
            if(firsttile.getAttribute('name') === secondTile.getAttribute('name')){
                firsttile.removeEventListener('click', flipTile);
                secondTile.removeEventListener('click', flipTile);
            }else{
                awaitingEndOfMove = true;
                    setTimeout(function(){
// will remove the listener if match
                firsttile.classList.remove('flip');
                secondTile.classList.remove('flip');
                awaitingEndOfMove = false;
            },2000)
//shows the score
            revealedCount++;
            bestscore.textContent = 'BEST SCORE:' + '' + revealedCount;
        };
    };
    checktile(e)
};
// will till the tile has been fliped
clickedCards.forEach(card => card.addEventListener('click', flipTile));

const checktile = (e) => {
    const clickedTile = e.target;
    if(clickedCards.length === 2){
    };
};