function setup() {
  createCanvas(720, 3200);
  hcs = ["#000", "#432", "#864", "#850", "#b74", "#c44", "#fc4", "#fe9"];
  sts = ["#fdb", "#fb8", "#da8", "#c96", "#b75", "#853", "#631", "#420"];
}

function draw() {
  stroke(0);
  strokeWeight(1);
  background(220);
  for (k = 0; k < 8; k++) {
  for (j = 0; j < 8; j++) {
  for (i = 0; i < 5; i++) {
  drawPerson(44 + i * 70 + (j % 2) * 350, 40 + floor(j/2) * 100 + k * 400, i, j, k);
}}}}

function drawPerson(x, y, hs, hc, st) {
  fill(hcs[hc]);
  ellipse(x, y + 6 * hs - 12, 60, 30 + 15 * hs);
  fill(sts[st]);
  circle(x, y, 50);
  fill(hcs[hc]);
  ellipse(x, y - 20, 50, 15);
  line(x - 10, y - 8, x - 10, y + 8);
  line(x + 10, y - 8, x + 10, y + 8);
}