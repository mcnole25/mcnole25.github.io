function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(150);
  stairsClimbed = 1.15**(millis()/1000)**1.15 * 5 - 5;
  fill(50);
  noStroke();
  for (i = 0; i <= 20; i++) {
  rect((i - stairsClimbed % 1)  * 30 + random(-log(stairsClimbed + 1)/7, log(stairsClimbed + 1)/7), 585 - (i - stairsClimbed % 1) * 30 + random(-log(stairsClimbed + 1)/7, log(stairsClimbed + 1)/7), 31 + random(-log(stairsClimbed + 1)/7, log(stairsClimbed + 1)/7), 700 + random(-log(stairsClimbed + 1)/7, log(stairsClimbed + 1)/7));
  }
  rect(-stairsClimbed  * 30, stairsClimbed * 30 + 405, 700, 700);
  fill(255, 200, 0);
  circle(195 - stairsClimbed % 1 * 30 + random(-log(stairsClimbed + 1)/7, log(stairsClimbed + 1)/7), 390 + stairsClimbed % 1 * 30 + random(-log(stairsClimbed + 1)/7, log(stairsClimbed + 1)/7), 30);
  fill(0);
  textFont("Arial", 24);
  text("Stairs Climbed: " + floor(stairsClimbed), 20, 40);
}