function setup() {
  createCanvas(512, 512);
  offsets = [];
  for (i = 0; i < 256; i++) {
  offsets.push(random(0, TAU));
  }
}

function draw() {
  background(0);
  noStroke();
  for (i = 0; i < 256; i++) {
  fill(floor(127.5 * sin(offsets[i] + millis()/1000) + 127.5));
  square((i % 16) * 32, floor(i/16) * 32, 32);
  }
}