let blueFact;
let loading = true;
// let img;
let data = {};
let words =[]
let wordData;

function preload() {
  data = loadJSON('./json/webScraping.json')
}

function setup() {
  createCanvas(500, 500);
  background(0);
  let wordData = data.content.text[floor(random(0, 10))];
  console.log(wordData);
  blueFact = wordData;

  fill(10,255,255);
  textAlign(CENTER);
  textSize(30);
  text(blueFact,0,0, width);
  
}

function draw() {
  


}