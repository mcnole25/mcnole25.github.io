function setup() {
  createCanvas(800, 600);
  rand = [];
  for (i = 0; i < 2000; i++) {
  rand.push(floor(random(0, 10)));
  }
}

function draw() {
  background(150);
  textFont("Arial", 20);
  textWrap(CHAR);
  text("0." + rand.join(""), 6, 6, width - 10);
}