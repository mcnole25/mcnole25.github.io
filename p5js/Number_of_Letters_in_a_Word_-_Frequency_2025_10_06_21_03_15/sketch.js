function setup() {
  createCanvas(800, 600);
  data = ["757","4009","4175","4168","2508","1946","2111","1245","807","597","349","115","109","36","17","8","3"];
}

function draw() {
  colorMode(RGB);
  textFont("Arial", 24);
  textAlign(CENTER, CENTER);
  background(200);
  colorMode(HSL);
  for (i = 0; i < 17; i++) {
  fill(0, 0, 0);
  textSize(24);
  text((i + 1), (i + 0.5) * width/17, 575);
  textSize(16);
  text(data[i], (i + 0.5) * width/17, 550);
  fill(i * 360/17, 80, 60);
  rect((i + 0.5) * width/17 - 20, 525, 40, -data[i]/9);
  }
}