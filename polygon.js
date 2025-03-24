class Polygon {
  constructor(sides, radius, period, note) {
    this.sides = sides;
    this.radius = radius;
    this.period = period;
    this.angle = 0;
    this.note = note
     this.osc = new p5.Oscillator("sine");
     this.osc.start();
     this.osc.freq(midiToFreq(this.note));
     this.osc.amp(0);

    this.collide = false;
  }
  update() {
    this.angle += TWO_PI / this.period / 60;
    if(this.collision()){
        this.collide = true;
        this.osc.amp(1, 0.05);
    }else {
        this.collide = false;
        this.osc.amp(0, 0.05);
    }              
  }
  draw() {
    
    noStroke()
    rotate(this.angle);
    // push();
    beginShape();
    if(this.collide){
        fill(136, 46, 95);
    }else{
        fill(255, 50);
    }

    for (let i = 0; i < this.sides; i++) {
      let a = (TWO_PI / this.sides) * i;
      let x = this.radius * cos(a);
      let y = this.radius * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
    // pop();

   
  }
  collision() {
    // collision detection
    for (let i = 0; i < this.sides; i++) {
      let angle = (TWO_PI / this.sides) * i + this.angle;
      let y = this.radius * sin(angle);
      if(abs(y) < 6){
        return true;
      }
    }
    return false;
  }
}
