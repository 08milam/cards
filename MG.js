//Made By: Charles M Milam Jr | Date: 10-17-23 | MG.js
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// main link for all id
const tilecontainer = document.querySelector('.tilecontainer');


// tile images list
const tileSet = [
    'Big_ben.png',
    'Neuschwanstein_castle.png',
    'Osaka_castle.png',
    'Rome_calcium.png',
    'Saint_basils_cathedral.png',
    'Stacue_of_liberty.png',
    'Taj-mahal.png',
    'Temple_of_heaven.png',
    'Taj-mahal.png',
];

const tilePickList = [...tileSet, ...tileSet];
const tileCount = tilePickList.length;



// console.log(tilePickList)
// function maketile(){
//     const randomIndex = Math.floor (Math. random() * tilePickList.length);
//     const tile = tilePickList [randomIndex];
//     tilePickList.splice (randomIndex, 1);


// }
// maketile()
console.log(tileCount)

for (let i = 0; i < tileCount; i++) {

// tile container that holds id of tile
let tile = document.createElement('div');
tile.setAttribute('class', 'tile');
tilecontainer.appendChild(tile);

// tile back
let tileBack = document.createElement('img');
    tileBack.setAttribute('id', 'tileBack');
    tileBack.src = "Back.png";
    tile.appendChild(tileBack)

// tile front
let tileFront = document.createElement('img');
    tileFront.setAttribute('id', 'tileFront');
let randomTile = Math.floor(Math.random() * 7);
    tileFront.src = tileSet[randomTile];
    tile.appendChild(tileFront)
}






// action flipping card
const cards = document.querySelectorAll('.tile')

function flipTile(){
    this.classList.toggle('flip')

    console.log('clicked')
}
cards.forEach(card => card.addEventListener('click', flipTile))




