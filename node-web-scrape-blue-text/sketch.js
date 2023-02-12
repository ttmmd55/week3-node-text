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
  img = loadImage("https://images.unsplash.com/photo-1487379595640-f04ccae706cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80");
  let wordData = data.content.text[floor(random(0, 200))];


  console.log(wordData);
  blueFact = wordData;
}

function draw() {
  textAlign(CENTER);
  image(img,0,0,500,500);
  textSize(20);
  //textSize(map(blueFact.length,0,200,30,20,true));
  text(blueFact, 50, 150, 400);
}