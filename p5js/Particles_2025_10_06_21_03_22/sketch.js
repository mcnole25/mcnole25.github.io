function setup() {
  createCanvas(720, 720);
  xs = [];
  ys = [];
  dxs = [];
  dys = [];
}

function draw() {
  background(50, 100, 50);
  noStroke();
  for (j = 0; j < xs.length; j++) {
  dxs[j] *= 0.99;
  dys[j] *= 0.99;
  xs[j] += dxs[j];
  ys[j] += dys[j];
  dys[j]++;
  if (ys[j] > height) {
  xs[j] = "null";
  ys[j] = "null";
  dxs[j] = "null";
  dys[j] = "null";
  xs = xs.filter(a => a != "null");
  ys = ys.filter(a => a != "null");
  dxs = dxs.filter(a => a != "null");
  dys = dys.filter(a => a != "null");
  }
  fill(0, 255, 100);
  circle(xs[j], ys[j], 10);
  }
}

function mouseClicked() {
  particles(100);
}

function particles(n) {
  for (i = 0; i < n; i++) {
  xs.push(mouseX);
  ys.push(mouseY);
  dir = random(0, TAU);
  dxs.push(random(0, 10) * sin(dir));
  dys.push(random(0, 10) * cos(dir) - 5);
  }
}