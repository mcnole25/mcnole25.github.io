function setup() {
  createCanvas(600, 600);
  detail = 150;
  distan = 400;
}

function draw() {
  background(0);
  noStroke();
  for (d = 0; d < detail; d++) {
  for (i = 0; i < distan; i += 4) {
  x = mouseX + i * sin(d/detail * TAU); y = mouseY + i * cos(d/detail * TAU);
  fill(255 - i/distan * 255, 255 - i/distan * 255, 0);
  circle(x, y, sqrt(i));
  if (collision()) {break;}
  }}
  fill(0);
  rect(0, 290, 300, 20);
  rect(520, 520, 50, 50);
}

function collision() {
  p = false;
  if (x < 0 || x > 600) {p = true;}
  if (y < 0 || y > 600) {p = true;}
  if (x < 300 && (y > 290 && y < 310)) {p = true;}
  if (x > 520 && x < 570 && y > 520 && y < 570) {p = true;}
  return p;
}