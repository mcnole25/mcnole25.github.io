function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  noStroke();
  limit = 3600;
  sec = limit - (millis()/1000)**2;
  nSec = -sec;
  if (sec < 0) {sec = 0;}
  h = floor(sec/3600);
  m = floor(sec/60) % 60;
  s = floor(sec) % 60;
  if (h < 10) {h = "0" + String(h);}
  if (m < 10) {m = "0" + String(m);}
  if (s < 10) {s = "0" + String(s);}
  fill(255, 0, 0);
  textFont("Arial", 90);
  textAlign(CENTER, CENTER);
  text(h + ":" + m + ":" + s, 300, 100);
  arc(300, 400, 300, 300, -HALF_PI, sec/limit * TAU - HALF_PI);
  if (nSec > 0) {
  textSize(30);
  text("Timer finished " + floor(nSec) + " sec ago!", 300, 200);
  }
}