function setup() {
  createCanvas(0, 0);
  fracs = [];
  for (i = 1; i < 256; i += 2) {
  fracs.push(String(i/256).split("0.")[1]);
  }
  fracs.sort((a, b) => a.split("").reverse().join("") - b.split("").reverse().join(""));
  t = document.createElement("div");
  t.innerText = fracs.join("\n");
  document.body.appendChild(t);
}