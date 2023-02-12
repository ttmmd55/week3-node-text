let blueFact;
let loading = true;
let data = {};
let words =[]
let wordData;

function preload() {
  data = loadJSON('./json/webScraping.json')
}

function setup() {
  createCanvas(800, 600);
  background(0);
  let wordData = data.content.text[floor(random(0, 10))];
  console.log(wordData);
  blueFact = wordData;
}

function draw() {
  fill(10,255,255);
  textAlign(CENTER);
  textSize(25);
  text(blueFact,0,0, width);
}