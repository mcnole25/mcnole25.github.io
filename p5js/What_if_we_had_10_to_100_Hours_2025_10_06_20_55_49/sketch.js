function setup() {
  createCanvas(0, 0);
}

function draw() {
  list.innerHTML = "";
  label.innerText = "What if we had " + hours.value + " hours in a day, rather than 24?"
  lenght.innerText = "An \"hour\" in this system would now be " + (1440/Number(hours.value)).toFixed(4) * 1 + " minutes";
  for (i = 0; i < Number(hours.value); i++) {
  t = document.createElement("div");
  newh = 24/Number(hours.value) * i + 1e-10;
  newm = (newh % 1) * 60;
  news = (newm % 1) * 60;
  if (newh < 10) {newh = "0" + String(floor(newh));} else {newh = floor(newh);}
  if (newm < 10) {newm = "0" + String(floor(newm));} else {newm = floor(newm);}
  if (news < 10) {news = "0" + String(floor(news));} else {news = floor(news);}
  t.innerText = (i < 10 ? "0" + i : i) + ":00 ==> " + newh + ":" + newm + ":" + news;
  list.appendChild(t);
  }
}