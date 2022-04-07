var r;
var x;
var y;
var density = 20;
var loopCount = 0;

function setup() {
  frameRate(5); 
  createCanvas(windowWidth, windowHeight);
  background(0);
  r = width / 8;
}

function draw() {
  translate(width / 2, height / 2);
  circles();
  if (r > width / 2) {
    r = width / 8;
    loopCount += 1;
  } else {
    r = r + random(10);
  }
  console.log(loopCount);
}

function circles() {
  for (i = 0; i < 360; i += density) {
    x = r * cos((i * 3.14) / 180);
    y = r * sin((i * 3.14) / 180);

    if ((loopCount % 2) == 0) {
      stroke(255, 255, 255, 50);
    } else {
      stroke(0, 0, 0, 50);
    }
    rotate(PI/r);
    noFill();
    circle(x, y, r);
  }
}