function setup() {
  createCanvas(600, 600);
  inven = [];
  invenCount = "0".repeat(20).split("");
  objects = [];
}

function draw() {
  textFont("Arial", 24);
  textAlign(RIGHT);
  colorMode(RGB);
  background(100);
  if (random(0, 20) < 1) {objects.push([floor(random(0, 20)) * 18, random(0, 600), random(0, 600), random(0, TAU)]);}
  drawObjects();
  drawInventory();
}

function drawObjects() {
  colorMode(HSL);
  for (j = 0; j < objects.length; j++) {
  fill(objects[j][0], 100, 70);
  circle(objects[j][1], objects[j][2], 40);
  objects[j][1] += sin(objects[j][3]);
  objects[j][2] += cos(objects[j][3]);
  if (dist(mouseX, mouseY, objects[j][1], objects[j][2]) < 30) {
  invenCount[objects[j][0]/18] = (Number(invenCount[objects[j][0]/18]) + 1);
  if (!inven.includes(objects[j][0])) {
  inven.push(objects[j][0]);
  }}
  if (dist(mouseX, mouseY, objects[j][1], objects[j][2]) < 30 || objects[j][1] < 0 || objects[j][2] < 0 || objects[j][1] > 600 || objects[j][2] > 600) {objects[j] = ""; objects = objects.filter(a => a != "");}
  }
}

function drawInventory() {
  colorMode(RGB);
  fill(150);
  rect(0, 460, 600, 140);
  for (i = 0; i < inven.length; i++) {
  colorMode(HSL);
  fill(inven[i], 100, 70);
  colorMode(RGB);
  circle((i % 10) * 60 + 30, 500 + floor(i/10) * 60, 40);
  fill(0);
  text(String(invenCount[inven[i]/18]), (i % 10) * 60 + 60, 500 + floor(i/10) * 60 + 30);
  }
}