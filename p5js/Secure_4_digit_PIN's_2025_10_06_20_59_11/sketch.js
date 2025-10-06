function setup() {
  createCanvas(0, 0);
  pins = [];
  for (i = 0; i < 10000; i++) {
  pins.push("0".repeat(4 - String(i).length) + i);
  }
  pins = pins.filter(a => [...new Set(String(a).split(""))].length == 4);
  pins = pins.filter(a => a != String(a).split("").sort().join(""));
  pins = pins.filter(a => a != String(a).split("").sort().reverse().join(""));
  pins = pins.filter(a => !(Number(a) > 1800 && Number(a) < 2200));
  pins = pins.filter(a => a % 10 != 0);
  pins = pins.filter(a => String(a).split("").sort().join("") != "1234");
  pins = pins.filter(a => String(a).split("").sort().join("") != "2345");
  pins = pins.filter(a => String(a).split("").sort().join("") != "3456");
  pins = pins.filter(a => String(a).split("").sort().join("") != "4567");
  pins = pins.filter(a => String(a).split("").sort().join("") != "5678");
  pins = pins.filter(a => String(a).split("").sort().join("") != "6789");
  pins = pins.filter(a => String(a).split("").sort().join("") != "0789");
  pins = pins.filter(a => String(a).split("").sort().join("") != "0189");
  pins = pins.filter(a => String(a).split("").sort().join("") != "0129");
  pins = pins.filter(a => String(a).split("").sort().join("") != "0123");
  pins = pins.filter(a => String(a).split("").sort().join("") != "0246");
  pins = pins.filter(a => String(a).split("").sort().join("") != "0248");
  pins = pins.filter(a => String(a).split("").sort().join("") != "0268");
  pins = pins.filter(a => String(a).split("").sort().join("") != "0468");
  pins = pins.filter(a => String(a).split("").sort().join("") != "2468");
  pins = pins.filter(a => String(a).split("").sort().join("") != "1357");
  pins = pins.filter(a => String(a).split("").sort().join("") != "1359");
  pins = pins.filter(a => String(a).split("").sort().join("") != "1379");
  pins = pins.filter(a => String(a).split("").sort().join("") != "1579");
  pins = pins.filter(a => String(a).split("").sort().join("") != "3579");
  t = document.createElement("div");
  t.innerText = pins.join("\u0009");
  document.body.appendChild(t);
  console.log(pins.length);
}