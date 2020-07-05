let values = [];
let w = 5;
let n = 0;
let j = 0;
let count = 0;
let fontsize = 32;

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(width / w);
  for (let i = 0; i < values.length; i++) {
    values[i] = floor(random(windowHeight));
  }
  textSize(32);
}

function draw() {
  background("#1b1b1b");
  text("#" + count, width - 110, 30);
  textAlign(CENTER);
  fill("#686868");
  text("BUBBLE SORT BY RAVEEN", width / 2, 40);
  for (i = 0; i < values.length; i++) {
    stroke("#1b1b1b");
    fill("#f82d49");
    rect(i * w, height - values[i], w, values[i]);
  }
  if (n >= values.length) {
    console.log("finished");
    noLoop();
  }
  for (i = 0; i < 50; i++) {
    if (values[j] < values[j + 1]) {
      let temp = values[j];
      values[j] = values[j + 1];
      values[j + 1] = temp;
    }
    j++;
    if (j >= values.length - n) {
      j = 0;
      n++;
    }
    console.log(j);
    count++;
  }
}
