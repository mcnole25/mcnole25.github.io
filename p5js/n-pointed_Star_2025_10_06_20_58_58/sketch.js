function setup() {
  createCanvas(600, 700);
  colorMode(HSL);
  points = 5;
}

function draw() {
  if (points < 2) {points = 2;}
  background(0, 0, 40);
  fill(((points - 2) * 20) % 360, 100, 50);
  beginShape();
  for (i = 0; i < points; i++) {
  vertex(300 + 250 * sin(i/points * TAU), 300 - 250 * cos(i/points * TAU));
  vertex(300 + 100 * sin((i + 0.5)/points * TAU), 300 - 100 * cos((i + 0.5)/points * TAU));
  }
  endShape();
  fill(0, 0, 100);
  textFont("Arial", 48);
  textAlign(CENTER, CENTER);
  text(points + "-pointed star", 300, 600);
}

function keyPressed() {
  if (key == "ArrowLeft") {points--;}
  if (key == "ArrowRight") {points++;}
}