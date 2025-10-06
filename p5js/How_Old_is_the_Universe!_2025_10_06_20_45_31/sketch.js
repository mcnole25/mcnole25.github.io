function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(100);
  fill(255);
  textFont("Arial", 30);
  text("How old is the Universe?!", 10, 40);
  text("It's estimated to be 13.77 billion years old,", 10, 80);
  text("but for calculations, we'll assume this", 10, 120);
  text("number is EXACT, starting from 1970 (unix).", 10, 160);
  text("Making the universe " + (BigInt(1377n * 10n**7n) + BigInt(floor(Date.now()/31556952000))), 10, 240);
  text("years old. Your computer time is", 10, 280);
  text(Date.now(), 10, 320);
  text("...milliseconds after the Unix epoch...", 10, 360);
  text("...which makes the Universe...", 10, 400);
  textSize(40);
  text(String(BigInt(1377n * 10n**7n * 31556952000n) + BigInt(Date.now())), 10, 490);
  text("MILLISECONDS OLD.", 10, 540);
  textSize(30);
  text("in scientific: " + Number(BigInt(1377n * 10n**7n * 31556952000n) + BigInt(Date.now())).toExponential(), 10, 580);
}