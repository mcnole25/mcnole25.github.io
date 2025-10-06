function setup() {
  createCanvas(0, 0);
  deck = []; colours = ["R", "Y", "G", "B"];
  for (i = 1; i <= 9; i++) {
  for (j = 0; j < 4; j++) {
  deck.push(colours[j] + String(i));
  deck.push(colours[j] + String(i));
  }}
  for (j = 0; j < 4; j++) {
  deck.push(colours[j] + "0");
  }
  for (i = 0; i < 2; i++) {
  for (j = 0; j < 4; j++) {
  deck.push(colours[j] + "S");
  deck.push(colours[j] + "R");
  deck.push(colours[j] + "D");
  }}
  for (j = 0; j < 4; j++) {
  deck.push("DD");
  deck.push("WW");
  deck.push("WW");
  }
  deck = shuffle(deck);
  p1 = deck.slice(0, 7);
  p2 = deck.slice(7, 14);
  current = deck[14];
  deck = deck.slice(15, 112);
  turn = 1;
  totalMoves = 0;
  lg();
  while (p1.length * p2.length * deck.length != 0) {
  playMove();
  lg();
  }
}

function filterCards(player) {
  if (current != "DD" && current != "WW") {
  return player.filter(a => a == "DD" || a == "WW" || a.charAt(0) == current.charAt(0) || a.charAt(1) == current.charAt(1));
  } else {
  return player;
}}

function lg() {
  console.log(deck);
  console.log(p1);
  console.log(p2);
  console.log(current);
  console.log(turn);
  console.log(totalMoves);
}

function playMove() {
  if (turn == 1) {
  if (filterCards(p1).length == 0) {
  p1 = [...p1, deck[0]];
  deck = deck.slice(1, 112);
  } else {
  current = shuffle(filterCards(p1))[0];
  ppp = p1.filter(a => a != current);
  qqq = p1.filter(a => a == current);
  p1 = ppp.concat(qqq);
  p1 = p1.slice(0, p1.length - 1);
  }
  if (current.charAt(1) == "D") {
  if (current.charAt(0) == "D") {
  p2 = [...p2, deck[0], deck[1], deck[2], deck[3]];
  deck = deck.slice(4, 112);
  } else {
  p2 = [...p2, deck[0], deck[1]];
  deck = deck.slice(2, 112);
  }}}
  if (turn == 2) {
  if (filterCards(p2).length == 0) {
  p2 = [...p2, deck[0]];
  deck = deck.slice(1, 112);
  } else {
  current = shuffle(filterCards(p2))[0];
  ppp = p2.filter(a => a != current);
  qqq = p2.filter(a => a == current);
  p2 = ppp.concat(qqq);
  p2 = p2.slice(0, p2.length - 1);
  }
  if (current.charAt(1) == "D") {
  if (current.charAt(0) == "D") {
  p1 = [...p1, deck[0], deck[1], deck[2], deck[3]];
  deck = deck.slice(4, 112);
  } else {
  p1 = [...p1, deck[0], deck[1]];
  deck = deck.slice(2, 112);
  }}}
  if (current.charAt(1) == "R" || current.charAt(1) == "S") {turn = 3 - turn;}
  turn = 3 - turn;
  totalMoves++;
}