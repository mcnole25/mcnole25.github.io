function setup() {
  createCanvas(200, 800);
}

function draw() {
  background(50);
  noStroke();
  fill(75);
  for (i = 100; i < 800; i += 200) {
  circle(100, i, 180);
  }
  fill(255, 0, 0);
  drawID(Number(id.value) % 4, 100, 100);
  fill(255, 150, 0);
  drawID(floor(Number(id.value)/4) % 4, 100, 300);
  if (millis() % 1000 < 500) {
  drawID(floor(Number(id.value)/16) % 4, 100, 500);
  }
  fill(0, 200, 50);
  drawID(floor(Number(id.value)/64) % 4, 100, 700);
  idlabel.innerText = "Traffic Light ID: " + id.value;
}

function drawID(n, x, y) {
  if (n == 1) {circle(x, y, 180);}
  if (n == 2) {
  rect(x - 60, y - 15, 140, 30);
  beginShape();
  vertex(x - 80, y);
  vertex(x, y - 80);
  vertex(x, y + 80);
  endShape(CLOSE);
  }
  if (n == 3) {
  rect(x - 80, y - 15, 140, 30);
  beginShape();
  vertex(x + 80, y);
  vertex(x, y - 80);
  vertex(x, y + 80);
  endShape(CLOSE);
  }
}