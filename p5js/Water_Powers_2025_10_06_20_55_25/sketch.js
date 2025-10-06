function setup() {
  createCanvas(600, 600);
}

function draw() {
  mx = mouseX/width;
  if (mx < 0) {mx = 0;}
  if (mx > 1) {mx = 1;}
  input.innerText = mx;
  background(50);
  textFont("Roboto", 30);
  textAlign(CENTER, CENTER);
  fill("#06f");
  noStroke();
  rect(75, 150 - mx**0.2 * 100, 50, mx**0.2 * 100);
  rect(275, 150 - mx**0.25 * 100, 50, mx**0.25 * 100);
  rect(475, 150 - mx**(1/3) * 100, 50, mx**(1/3) * 100);
  rect(75, 350 - sqrt(mx) * 100, 50, sqrt(mx) * 100);
  rect(275, 350 - mx * 100, 50, mx * 100);
  rect(475, 350 - mx**2 * 100, 50, mx**2 * 100);
  rect(75, 550 - mx**3 * 100, 50, mx**3 * 100);
  rect(275, 550 - mx**4 * 100, 50, mx**4 * 100);
  rect(475, 550 - mx**5 * 100, 50, mx**5 * 100);
  stroke("#fff");
  noFill();
  list = ["⁵√x", "∜x", "∛x", "√x", "x", "x²", "x³", "x⁴", "x⁵"];
  for (i = 1; i <= 3; i++) {
  for (j = 1; j <= 3; j++) {
  rect(i * 200 - 125, j * 200 - 150, 50, 100);
  text(list[j * 3 + i - 4], i * 200 - 100, j * 200 - 25);
  }}
}