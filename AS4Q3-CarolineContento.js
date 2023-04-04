function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  //define flower
  flower1 = {
    x: 100,
    y: 50,
    scale: 0.5,
    points: random(3, 9),
    startAngle: 30,
    fill: "lightblue",
  };
  flower2 = {
    x: 200,
    y: 50,
    scale: 0.5,
    points: 7,
    startAngle: 30,
    fill: "lightpink",
  };
  flower3 = {
    x: 300,
    y: 50,
    scale: 0.5,
    points: random(3, 8),
    startAngle: 30,
    fill: "lightblue",
  };
  flower4 = {
    x: 100,
    y: 150,
    scale: 0.5,
    points: random(1, 5),
    startAngle: 30,
    fill: "lightpink",
  };
  flower5 = {
    x: 200,
    y: 150,
    scale: 0.5,
    points: random(1, 9),
    starAngle: 30,
    fill: "lightblue",
  };
  flower6 = {
    x: 300,
    y: 150,
    scale: 0.5,
    points: 5,
    starAngle: 30,
    fill: "lightpink",
  };
  flower7 = {
    x: 100,
    y: 250,
    scale: 0.5,
    points: 8,
    starAngle: 30,
    fill: "lightblue",
  };
  flower8 = {
    x: 200,
    y: 250,
    scale: 0.5,
    points: random(2, 5),
    starAngle: 30,
    fill: "lightpink",
  };
  flower9 = {
    x: 300,
    y: 250,
    scale: 0.5,
    points: 5,
    starAngle: 30,
    fill: "lightblue",
  };
  flower10 = {
    x: 100,
    y: 350,
    scale: 0.5,
    points: random(3, 8),
    starAngle: 30,
    fill: "lightpink",
  };
  flower11 = {
    x: 200,
    y: 350,
    scale: 0.5,
    points: 4,
    starAngle: 30,
    fill: "lightblue",
  };
  flower12 = {
    x: 300,
    y: 350,
    scale: 0.5,
    points: random(3, 8),
    starAngle: 30,
    fill: "lightpink",
  };
  flower13 = {
    x: 0,
    y: 50,
    scale: 0.5,
    points: 7,
    starAngle: 30,
    fill: "lightpink",
  };
  flower14 = {
    x: 0,
    y: 150,
    scale: 0.5,
    points: 5,
    starAngle: 30,
    fill: "lightblue",
  };
  flower15 = {
    x: 0,
    y: 250,
    scale: 0.5,
    points: random(0, 4),
    starAngle: 30,
    fill: "lightpink",
  };
  flower16 = {
    x: 0,
    y: 350,
    scale: 0.5,
    points: 8,
    starAngle: 30,
    fill: "lightblue",
  };
  flower17 = {
    x: 400,
    y: 50,
    scale: 0.5,
    points: random(0, 7),
    starAngle: 30,
    fill: "lightpink",
  };
  flower18 = {
    x: 400,
    y: 150,
    scale: 0.5,
    points: 5,
    starAngle: 30,
    fill: "lightblue",
  };
  flower19 = {
    x: 400,
    y: 250,
    scale: 0.5,
    points: 7,
    starAngle: 30,
    fill: "lightpink",
  };
  flower20 = {
    x: 400,
    y: 350,
    scale: 0.5,
    points: random(0, 8),
    starAngle: 30,
    fill: "lightblue",
  };
  noLoop();
}

function draw() {
  background(22, 150, 10);
  addFlower(flower1);
  fill("black");
  ellipse(100, 50, 10);
  addFlower(flower2);
  fill("black");
  ellipse(200, 50, 10);
  addFlower(flower3);
  fill("black");
  ellipse(300, 50, 10);
  addFlower(flower4);
  fill("black");
  ellipse(100, 150, 10);
  addFlower(flower5);
  fill("black");
  ellipse(200, 150, 10);
  addFlower(flower6);
  fill("black");
  ellipse(300, 150, 10);
  addFlower(flower7);
  fill("black");
  ellipse(100, 250, 10);
  addFlower(flower8);
  fill("black");
  ellipse(200, 250, 10);
  addFlower(flower9);
  fill("black");
  ellipse(300, 250, 10);
  addFlower(flower10);
  fill("black");
  ellipse(100, 350, 10);
  addFlower(flower11);
  fill("black");
  ellipse(200, 350, 10);
  addFlower(flower12);
  fill("black");
  ellipse(300, 350, 10);
  addFlower(flower13);
  fill("black");
  ellipse(0, 50, 10);
  addFlower(flower14);
  fill("black");
  ellipse(0, 150, 10);
  addFlower(flower14);
  fill("black");
  ellipse(0, 150, 10);
  addFlower(flower15);
  fill("black");
  ellipse(0, 250, 10);
  addFlower(flower16);
  fill("black");
  ellipse(0, 350, 10);
  addFlower(flower17);
  fill("black");
  ellipse(400, 50, 10);
  addFlower(flower18);
  fill("black");
  ellipse(400, 150, 10);
  addFlower(flower19);
  fill("black");
  ellipse(400, 250, 10);
  addFlower(flower20);
  fill("black");
  ellipse(400, 350, 10);
  
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
    let randomAngle = random(360);
    // rotate(addAngle);
    rotate(randomAngle);
    triangle(0, 60, 40, 50, 0, 0);
  }
  pop();
}

