function setup() {
  createCanvas(0, 0);
  for (i = 1; i <= 3653; i++) {
  t = document.createElement("div");
  t.innerText = "Day " + i + " ==> " + new Date(86400000 * (18261 + i)).toLocaleDateString("en-GB", {timeZone: "UTC"});
  document.body.appendChild(t);
}}