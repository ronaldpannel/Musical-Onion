let polygon = [];
let num = 15;
let sides0 = 3;
let sideInc = 1;
let radius0 = 30;
let radiusInc = 10;
let period0 = 3;
let midiNotes = [55, 60, 64, 67, 72, 79, 84, 88, 91];
let osc;
let play = false;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < num; i++) {
    let sides = sides0 + i * sideInc;
    let radius = radius0 + i * radiusInc;
    let period = period0 * (i + 1);
    let note = midiNotes[i % midiNotes.length];
    polygon[i] = new Polygon(sides, radius, period, note);
  }
}

function draw() {
  background("#ED6800");
  translate(width / 2, height / 2);
  for (let i = polygon.length - 1; i >= 0; i--) {
    polygon[i].update();
    polygon[i].draw();
  }
}


function windowResized() {
  resizeCanvas(400, 400);
}
function mousePressed() {
  play = !play;
  if (play) {
    osc.amp(1, 0.05);
  } else {
    osc.amp(0, 0.05);
  }
}
