let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  //let gravity = createVector(0, 0.3);
  //ball.addForce(gravity);

  if(mouseIsPressed){
    let touch = createVector(0.3,0)
    ball.addForce(touch);
    }

  ball.update();
  ball.show();
}
