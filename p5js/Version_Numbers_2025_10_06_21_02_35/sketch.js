function setup() {
  createCanvas(200, 14800);
}

function draw() {
  versions = [];
  background(100);
  textFont("Arial", 30);
  textAlign(CENTER, CENTER);
  fill(255);
  noStroke();
  for (j = 0; j < 100; j++) {
  for (i = 0; i <= 15 * abs(sin(versions.length**2)**3); i++) {
  versions.push("1." + j + "." + i);
  text(versions[versions.length - 1], 100, 50 * Number(versions.length));
  }}
}