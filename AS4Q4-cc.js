let design = ['circle', 'rect', 'triangle', 'ellipse', 'quad']; // array
let rows = 4; //rows
let cols = 4; //columns
let shapeSize = 50; //shape size

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(22, 30, 100); //background
  noStroke();
  //the start of the loop
  for (let i = 0; i < rows; i++) { 
    for (let j = 0; j < cols; j++) {
      let shapeIndex = i * cols + j;
      let shape = design[shapeIndex % design.length];
      let x = (j + 0.5) * width / cols;
      let y = (i + 0.5) * height / rows;
      // the if else statements and the fills for each shape
      //circle
      if (shape === 'circle') {
        fill("red");
        ellipse(x, y, shapeSize, shapeSize);
      } else if (shape === 'rect') {
        fill("lightpink");
        //rect
        rect(x - shapeSize / 2, y - shapeSize / 2, shapeSize, shapeSize);
      } else if (shape === 'triangle') {
        fill("purple")
        //triangle
        triangle(x, y - shapeSize / 2, x + shapeSize / 2, y + shapeSize / 2, x - shapeSize / 2, y + shapeSize / 2);
      } else if (shape === 'ellipse') {
        fill("grey");
        //the other ellipses
        ellipse(x, y, shapeSize * 1.5, shapeSize);
      } else if (shape === 'quad') {
        fill("pink");
        quad(x - shapeSize / 2, y - shapeSize / 2, x + shapeSize / 2, y - shapeSize / 2, x + shapeSize / 2, y + shapeSize / 2, x - shapeSize / 2, y + shapeSize / 2);
      }
    }
  }
}
