let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  //let gravity = createVector(0, 0.3);
  //ball.addForce(gravity);

  ball.pos
  let mP = createVector(mouseX,mouseY);
  let took = p5.Vector.sub(ball.pos,mP)

  ball.addForce()

  ball.update();
  ball.show();
}
function mouseClicked(){
  let mP = createVector(mouseX,mouseY);
  let took = p5.Vector.sub(ball.pos,mP);
  ball.addForce(took);
}