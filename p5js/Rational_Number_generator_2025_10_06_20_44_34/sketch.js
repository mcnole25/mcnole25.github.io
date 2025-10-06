function setup() {
  createCanvas(600, 600);
  lim = 100;
  s = random() >= 0.5 ? 1 : -1;
  n = floor(random(0, lim));
  d = floor(random(1, lim));
  gcf = gcf(n, d);
  n /= gcf; d /= gcf;
  background(100);
  fill(255);
  textFont("Arial", 48);
  textAlign(CENTER, CENTER);
  text(n/d * s, 300, 200);
  text((s == -1 ? "-" : "") + n + "\u2044" + d, 150, 400);
  text((s == -1 ? "-" : "") + floor(n/d) + " " + (n % d) + "\u2044" + d, 450, 400);
}

function gcf(a, b) {
  while (b != 0) {
    [a, b] = [b, a % b];
  }
  return a;
}