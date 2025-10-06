function setup() {
  createCanvas(900, 600);
  offsets = [];
  for (i = 0; i < 6; i++) {
  offsets.push(random(-200, 100));
  }
}

function draw() {
  currentSec = hour() * 3600 + minute() * 60 + second() + mouseX/width * 86400;
  stroke(0);
  strokeWeight(3);
  textFont("Arial", 24);
  textAlign(CENTER, CENTER);
  background(100);
  fill("#9ff");
  rect(50, 100, 200, 100);
  fill("#333");
  beginShape();
  vertex(250, 200);
  vertex(50, 200);
  vertex(25, 250);
  vertex(275, 250);
  endShape(CLOSE);
  fill("#333");
  rect(330, 50, 100, 200);
  fill("#c9f");
  rect(340, 60, 80, 160);
  fill("#333");
  rect(530, 50, 50, 200);
  fill("#333");
  circle(555, 150, 120);
  fill("#6c6");
  circle(555, 150, 100);
  fill(255);
  stroke(255, 0, 0);
  circle(750, 150, 200);
  fill(0);
  stroke(0);
  circle(750, 150, 10);
  noStroke();
  for (i = 0; i < 24; i++) {
  textSize((i >= 12 ? 14 : 16));
  text(i, 750 + (i >= 12 ? 65 : 85) * sin(i/12 * TAU), 150 - (i >= 12 ? 65 : 85) * cos(i/12 * TAU));
  }
  fill(255);
  stroke(0);
  rect(50, 400, 200, 150);
  rect(50, 450, 200, 100);
  fill(0);
  rect(100, 407.5, 100, 35);
  fill("#333");
  rect(300, 450, 200, 100);
  fill("#9ff");
  rect(310, 460, 100, 80);
  fill("#000");
  rect(420, 460, 70, 30);
  fill("#333");
  rect(550, 450, 300, 100);
  fill("#000");
  rect(565, 465, 270, 70);
  fill(0);
  noStroke();
  textSize(36);
  textAlign(RIGHT, CENTER);
  text(convertMin(currentSec) + ":" + convertSec(currentSec), 217.5, 155);
  textSize(24);
  text(convertMin(currentSec + offsets[0]), 410, 100);
  textSize(16);
  text(convertSec(currentSec + offsets[0]), 410, 120);
  textSize(24);
  text(convertMin(currentSec + offsets[1]), 575, 150);
  textSize(16);
  text(convertSec(currentSec + offsets[1]), 595, 152.5);
  fill("#0f0");
  textSize(24);
  text(convertMin(currentSec + offsets[2]), 170, 426);
  textSize(14);
  text(convertSec(currentSec + offsets[2]), 190, 429);
  fill("#fff");
  textSize(18);
  text(convertMin(currentSec + offsets[3]), 468, 476);
  textSize(12);
  text(convertSec(currentSec + offsets[3]), 484, 478);
  fill("#f00");
  textSize(36);
  text(convertMin(currentSec + offsets[4]) + ":" + convertSec(currentSec + offsets[4]), 770, 500);
  noFill();
  stroke(0);
  strokeWeight(5);
  ss = (currentSec + offsets[5]);
  line(750, 150, 750 + 50 * sin(ss * TAU/43200),  150 - 50 * cos(ss * TAU/43200));
  strokeWeight(3);
  line(750, 150, 750 + 80 * sin(ss * TAU/3600),  150 - 80 * cos(ss * TAU/3600));
  stroke("#f00");
  line(750, 150, 750 + 80 * sin(ss * TAU/60),  150 - 80 * cos(ss * TAU/60));
}

function convertMin(n) {
  return (floor(n/3600) % 24 < 10 ? "0" : "") + floor(n/3600) % 24 + ":" + (floor(n/60) % 60 < 10 ? "0" : "") + floor(n/60) % 60;
}

function convertSec(n) {
  return (floor(n) % 60 < 10 ? "0" : "") + String(floor(n) % 60);
}