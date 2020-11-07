let values = [];
let count = 0;
let w;
let states = [];
function windowResized() {
  resizeCanvas(windowWidth - 40, windowHeight - 200);
  setup();
}

function setup() {
  w = document.querySelector("#sizeAndSpeed").value;
  console.log(w);
  let canvas = createCanvas(windowWidth - 40, windowHeight - 200);
  canvas.position(20, 80);
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = floor(random(windowHeight - 200));
    states[i] = -1;
  }
  textSize(32);
}

function draw() {
  background("#1b1b1b");
  text("#" + count, width - 110, 30);
  for (i = 0; i < values.length; i++) {
    stroke("#1b1b1b");
    if (states[i] == 0) {
      fill("#e57e88");
    } else if (states[i] == 1) {
      fill("#909090");
    } else {
      fill("#f82d49");
    }
    rect(i * w, height - values[i], w, values[i]);
  }
  console.log("hello");
}
