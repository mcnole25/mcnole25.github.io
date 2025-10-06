function setup() {
  createCanvas(900, 300);
  colorMode(HSL);
}

function draw() {
  season = Number(slider.value);
  background(20);
  noStroke();
  if (season >= 0) {
  ws = -0.125 + season * 0.125;
  we = 0.125 - season * 0.125;
  ss = 0.375 - season * 0.375;
  se = 0.625 + season * 0.375;
  } else {
  ws = -0.125 + season * 0.375;
  we = 0.125 - season * 0.375;
  ss = 0.375 - season * 0.125;
  se = 0.625 + season * 0.125;
  }
  fill(0, 100, 60);
  rect(0, 100, width, 100);
  fill(120, 100, 60);
  rect(width/24, 100, width/2, 100);
  fill(60, 100, 60);
  rect((ss + 1/24) * width - width, 100, (se - ss) * width, 100);
  rect((ss + 1/24) * width, 100, (se - ss) * width, 100);
  rect((ss + 1/24) * width + width, 100, (se - ss) * width, 100);
  fill(200, 100, 60);
  rect((ws + 1/24) * width - width, 100, (we - ws) * width, 100);
  rect((ws + 1/24) * width, 100, (we - ws) * width, 100);
  rect((ws + 1/24) * width + width, 100, (we - ws) * width, 100);
  strokeWeight(4);
  textFont("Arial", 24);
  for (i = 0; i <= 12; i++) {
  stroke(100);
  line(width * i/12, 200, width * i/12, 250);
  fill(100);
  noStroke();
  text(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan"][i], width * i/12, 280);
  }
  strokeWeight(2);
  textSize(12);
  for (i = 0; i <= 36; i++) {
  stroke(100);
  line(width * i/36, 200, width * i/36, 220);
  fill(100);
  noStroke();
  if (i % 3 > 0) {text((i % 3) * 10, width * i/36, 235);}
  }
  stroke(100);
  for (i = 0; i <= 72; i++) {
  line(width * i/72, 200, width * i/72, 210);
  }
}