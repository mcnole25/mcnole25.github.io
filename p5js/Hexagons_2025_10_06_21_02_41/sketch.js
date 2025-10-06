function setup() {
  createCanvas(650, 575);
  angleMode(RADIANS);
}

function draw() {
  idx = 0;
  background(100);
  strokeWeight(2);
  textFont("Arial", 20);
  textAlign(CENTER, CENTER);
  for (yy = 0; yy < 15; yy++) {
  yw = 15 - abs(yy - 7);
  for (xx = 0; xx < yw; xx++) {
  hexagon(340 + 40 * (xx - yw/2), 40 + 20 * sqrt(3) * yy, 80/sqrt(3));
  }}
}

function hexagon(x, y, d) {
  idx++;
  colorMode(HSL);
  fill((idx - 1) * 360/169, 100, 70);
  colorMode(RGB);
  stroke(0);
  beginShape();
  for (i = 0; i < 6; i++) {
  vertex(x + d/2 * sin(i/6 * TAU), y + d/2 * cos(i/6 * TAU));
  }
  endShape(CLOSE);
  fill(0);
  noStroke();
  text(idx, x, y);
}