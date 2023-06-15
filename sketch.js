let espLarg = 20;
let espAltura = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {
  
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg,j * height / espAltura)
      circle(2, 2, height / espAltura);
      circle(width / 500 - height /3/4, height /500 - height/500, height/500 );
	    circle(width / 500 + height /3/4, height /500 - height/500, height/500 );
      line(width / 500 + height /3/4, height /500 - height/500, height/500 );
      pop();
    }
  }

}