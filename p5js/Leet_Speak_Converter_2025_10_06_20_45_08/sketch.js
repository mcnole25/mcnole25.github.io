function setup() {
  createCanvas(0, 0);
  inputletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","&"];
  outputletters = ["@","8","[","6","3",",=","9","4","1","_|","|/.","|_","/\\/\\","/\\/","0","|>","0.",",-","5","7","|_|","\\/","\\/\\/","><","'-|","2","%"];
}

function draw() {
  ii = String(input.value).toUpperCase();
  for (i = 0; i < inputletters.length; i++) {
  ii = String(ii).replaceAll(inputletters[i], outputletters[i]);
  }
  output.value = ii;
}