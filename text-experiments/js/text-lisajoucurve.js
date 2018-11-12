
class Curve {


  constructor() {
    this.path = [];
    this.current = createVector();
  }

  setX( x) {
    this.current.x = x;
  }

  setY( y) {
    this.current.y = y;
  }

  addPoint() {
    this.path.push(this.current);
  }

  reset() {
    this.path = []
  }

  show() {
    stroke(255);
    strokeWeight(1);
    noFill();
    beginShape();
    for (let v of this.path) {
      vertex(v.x, v.y);
    }
    endShape();

    stroke(233);
    strokeWeight(-10+mouseX/35);
    point(this.current.x, this.current.y);

    // stroke(23,230,61);
    // strokeWeight(12+mousex/80);
    point(this.current.x, this.current.y);
    this.current = new createVector();
  }
}
