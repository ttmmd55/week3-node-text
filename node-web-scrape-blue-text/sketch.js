let blueFact;
let loading = true;
let data = {};
let words =[]
let wordData;

function preload() {
  data = loadJSON('./json/WebScraping.json')
}

function setup() {
  createCanvas(500, 500);
  background(250);
  let wordData = data.content.text[floor(random(0, 200))];


  console.log(wordData);
  blueFact = wordData;
}

function draw() {
  
  textAlign(CENTER);
  textSize(30);
  text(blueFact, 0, 0, width);

}