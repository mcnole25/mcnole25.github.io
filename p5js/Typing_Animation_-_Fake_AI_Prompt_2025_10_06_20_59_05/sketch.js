function setup() {
  createCanvas(600, 600);
  prompt = "No, horizontal_shading is not popular on the internet, but it would be cool if he gained like 10000 more subscribers. He is so unpopular that he never gets views on any of his projects, ever. But I need to be humble, so forget about what I just said. But this isn't actually an AI message, I decided to write this message because I don't really know what else to put here. horizontal_shading also signed up for a p5.js account, which is cool, I guess. How much longer are we going to drag this message on? Until it reaches, let's say... 600 characters. I think that's a great amount, don't you think?";
}

function draw() {
  noStroke();
  textWrap(WORD);
  background(50);
  fill(200);
  rect(0, 0, 600, 50);
  fill(0);
  textFont("Arial", 24);
  textAlign(LEFT, TOP);
  text("Is horizontal_shading popular?", 12.5, 12.5);
  stroke(0);
  strokeWeight(2);
  if (performance.now() % 1000 < 500) {
  line(348, 12, 348, 36);
  }
  noStroke();
  fill(100, 200, 175);
  square(20, 70, 40);
  fill(255);
  circle(40, 90, 20);
  if (performance.now() > 2000) {
  fill(255, 255, 255, (performance.now() - 2000)/2);
  text(String(prompt.slice(0, (performance.now() - 2000)/15)), 70, 80, 500);
  } else {
  fill(255);
  for (i = 0; i < 3; i++) {
  circle(77.5 + i * 15, 90, 8 + 2 * sin(performance.now()/100 + i * 100));
  }
  }
}