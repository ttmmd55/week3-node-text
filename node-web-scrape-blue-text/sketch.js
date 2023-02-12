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
  background(0);
  let wordData = data.content.text[floor(random(0, 200))];
  console.log(wordData);
  blueFact = wordData;

  fill(10,255,250);
  textAlign(CENTER);
  textSize(20);
  text(blueFact, 50, 150, 400);

}

function draw() {
  
}