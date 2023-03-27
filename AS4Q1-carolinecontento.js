function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  //define flower
  flower1 = {
    x: 100,
    y: 30,
    scale: 0.5,
    points: 5,
    startAngle: 30,
    fill: "yellow",
  };
  flower2 = {
    x: 250,
    y: 300,
    scale: 0.8,
    points: 7,
    startAngle: 30,
    fill: "lightpink",
  };
  flower3 = {
    x: 50,
    y: 230,
    scale: 1,
    points: 6,
    startAngle: 30,
    fill: "lightblue",
  };
  flower4 = {
    x: 300,
    y: 100,
    scale: .43,
    points: 7,
    startAngle: 30,
    fill: "purple"
  };
  flower5 = {
    x: 180,
    y: 120,
    scale: .65,
    points: 6,
    starAngle: 30,
    fill: "lightgreen"
  };
}

function draw() {
  background(22, 150, 10);
  addFlower(flower1);
  fill("black");
  ellipse(100, 30, 10);
  addFlower(flower2);
  fill("black");
  ellipse(250, 300, 25);
  addFlower(flower3);
  fill("black");
  ellipse(50, 230, 35);
  addFlower(flower4);
  fill("black");
  ellipse(300, 100, 15);
  addFlower(flower5);
  fill("black");
  ellipse(180, 120, 5);
  
}

function addFlower(flower) {
  push();
  fill(flower.fill);
  noStroke();
  let addAngle = 360 / flower.points;
  translate(flower.x, flower.y);
  scale(flower.scale);
  rotate(flower.startAngle);
  for (let flowerDrawn = 0; flowerDrawn < flower.points; flowerDrawn++) {
    rotate(addAngle);
    triangle(0, 60, 40, 50, 0, 0);
  }
  pop();
}
