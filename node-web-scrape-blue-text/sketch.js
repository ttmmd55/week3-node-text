let plantFact;
let loading = true;
// let img;
let data = {};
let words =[]
let wordData;
function preload() {
  data = loadJSON('./json/WebScraping.json')
}



function setup() {
  createCanvas(500, 500);
  background(250);
  let wordData = data.content.text[floor(random(0, 310))];

  
  console.log(wordData);
  plantFact = wordData;

  textAlign(CENTER);
  textSize(30);
  text(plantFact, 0, 0, width);
  
}

function draw() {
  


}