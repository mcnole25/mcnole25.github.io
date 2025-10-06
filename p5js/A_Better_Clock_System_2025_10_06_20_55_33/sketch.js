function setup() {
  createCanvas(600, 600);
}

function draw() {
  timeseconds = Number(hour() * 3600 + minute() * 60 + second());
  textFont("Roboto", 12);
  textAlign(CENTER, CENTER);
  background(100);
  strokeWeight(10);
  fill("#fed");
  stroke("#f80");
  circle(300, 300, 500);
  noStroke();
  fill("#def");
  arc(300, 300, 490, 490, 0 * TAU, 0.5 * TAU);
  strokeWeight(2);
  for (i = 0; i < 86000; i += 2000) {
  stroke("#fb7"); noFill();
  line(300, 300, 300 - 200 * sin(i/86400 * TAU), 300 + 200 * cos(i/86400 * TAU));
  fill("#f93"); noStroke();
  text(i/1000 + "k", 300 - 215 * sin(i/86400 * TAU), 300 + 215 * cos(i/86400 * TAU));
  }
  text("86.4k", 300, 530);
  strokeWeight(10);
  fill("#fed");
  stroke("#f80");
  circle(300, 300, 100);
  fill("#999");
  noStroke();
  textSize(18);
  text("x1000s", 300, 300);
  stroke("#500");
  strokeWeight(5);
  noFill();
  line(300, 300, 300 - 200 * sin(timeseconds/86400 * TAU), 300 + 200 * cos(timeseconds/86400 * TAU));
}