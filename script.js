//Made By: Charles M Milam Jr | Date: 10-17-23 | MG.js




//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// HTML JAVASCRIP LINK AND MAIN CONTAINER
contentcontainer = document.querySelector('.contentcontainer');
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// START SCREEN
// start screen is the container for all element
startScreen = function(){
    startMenu = document.createElement('div');
    startMenu.setAttribute('class', 'game')
        contentcontainer.appendChild(startMenu)
    }
    startScreen()
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// GAME SCREEN
gameScreen = function(){
    game = document.createElement('div');
    game.setAttribute('class', 'startMenu')
        contentcontainer.appendChild(game)
    }
    gameScreen()
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//INTRO
introContainer = function(){
    createIntro = document.createElement('div')
    createIntro.setAttribute('class', 'createIntro')
        startMenu.appendChild(createIntro)
    }
    introContainer()

startintro = function(){
    startMessage = document.createElement('h1')
    startMessage.setAttribute('class', 'startMessage')
    startMessage.textContent = "MATCHING CARD GAME"
        createIntro.appendChild(startMessage)
    }
    startintro()
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//SCORE
scoreContainer = function(){
    createScore = document.createElement('div')
    createScore.setAttribute('class', 'createScore')
        startMenu.appendChild(createScore)
    }
    scoreContainer()

score = function(){
    bestscore = document.createElement('h2')
    bestscore.setAttribute('class', 'bestScore')
    
        createScore.appendChild(bestscore)
    }
    score()

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// START
startContainer = function(){
    createStart = document.createElement('div')
    createStart.setAttribute('class', 'createStart')
        startMenu.appendChild(createStart)
    }
    startContainer()

startbutton = function(){
    startBtn = document.createElement('button')
    startBtn.setAttribute('class', 'startBtn')
    startBtn.textContent = 'START'
        createStart.appendChild(startBtn)
    }
    startbutton()

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
backbutton = function(){
    startMenuBtn = document.createElement('button')
    startMenuBtn.setAttribute('class', 'startmeueBtn')
    startMenuBtn.textContent = 'START MENU'
        game.appendChild(startMenuBtn)
    }
    backbutton()
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// GAME TRANSITION CONTROLS: START MENU, GAME SCREEN
start = function(){
    startMenuBtn.addEventListener('click', function(){
        contentcontainer.classList.toggle('startgame')
        })
    }
    start()

back = function(){
    startBtn.addEventListener('click', function(){
        contentcontainer.classList.toggle('startgame')
        })
    }
    back()
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// GAME LOGIC

tilesContainer = function() {
    tileContainer = document.createElement('div')
    tileContainer.setAttribute('class', 'tilecontainer')
        game.appendChild(tileContainer)
}
tilesContainer()

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
    randomTile = tileData.sort(() => Math.random() - 0.5)
    return tileData
};

tileGenerator = function(){
    const tileData = randomize()

tileData.forEach(item =>{

createTile = function(){
    tile = document.createElement('div')
    tile.setAttribute('class', 'tile')
    tileContainer.appendChild(tile)
}
createTile()
createFront = function(){
    front = document.createElement('img')
    front.setAttribute('class', 'front')
    front.src = item.img
    tile.setAttribute('name', item.name)
    tile.appendChild(front)
}
createFront()

back = document.createElement('img')
back.setAttribute('class', 'back')
back.src = 'back.jpg'
tile.appendChild(back)
})

}

tileGenerator()
let revealedCount = 0; 
let awaitingEndOfMove = false;
let activeTile = false;

const clickedCards = document.querySelectorAll('.tile')
function flipTile(e){
    if(awaitingEndOfMove) return;
    this.classList.add('flip')
    if(!activeTile){
        activeTile = true
        firsttile = this
    }else{
        activeTile = false
        secondTile = this
            if(firsttile.getAttribute('name') === secondTile.getAttribute('name')){
                firsttile.removeEventListener('click', flipTile)
                secondTile.removeEventListener('click', flipTile)
            }else{
                awaitingEndOfMove = true
            setTimeout(function(){
                firsttile.classList.remove('flip')
                secondTile.classList.remove('flip')
                awaitingEndOfMove = false
            },2000)
            revealedCount++;
            bestscore.textContent = 'BEST SCORE:' + '' + revealedCount
        }
    }
    checktile(e)
}
clickedCards.forEach(card => card.addEventListener('click', flipTile))

const checktile = (e) => {
    const clickedTile = e.target
    if(clickedCards.length === 2){
    }
}









