/*

 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  let sayHello = document.querySelector('canvas').getContext('2d');
  sayHello.font = '48px sans-serif';
  sayHello.strokeText('Hello, World!', 10, 50);

}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  const canvas = document.getElementById('canvas2');
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let rectWidth;
  let rectHeight;
  let rectX;
  let rectY;

  do {
    rectWidth = Number(prompt('Enter a width value greater than 1'));
  }
  while (rectWidth < 1 || Number.isNaN(rectWidth))

  do {
    rectHeight = Number(prompt('Enter a height value greater than 1'));
  }
  while (rectHeight < 1 || Number.isNaN(rectHeight))

  do {
    rectY = Number(prompt('Enter a y coordinate greater than 5'));
  }
  while (rectY < 5 || Number.isNaN(rectY))

  do {
    rectX = Number(prompt('Enter a x coordinate greater than 5'));
  }
  while (rectX < 5 || Number.isNaN(rectX))

  context.beginPath();
  context.rect(rectX, rectY, rectWidth, rectHeight);
  context.stroke();
  context.closePath();
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  const canvas = document.getElementById("canvas3");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  let color;
  while(true) {
    color = prompt('Please Enter a Valid Color');
    if(color=="black" || color=="blue" || color=="green" || color=="orange" || color=="purple" || color=="red" || color=="yellow") {
      break;
    }
  }
  context.fillStyle = color;
  context.fillRect(10,10,100,50);
}


/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {

  const canvas = document.getElementById("canvas4");
  const context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);

    side1 = Number(prompt("Please enter side 1"));
    side2 = Number(prompt("Please enter side 2"));
    side3 = Number(prompt("Please enter side 3"));

  if (isNaN(side1) || isNaN(side2) || isNaN(side3) == true)
  {
    alert("One of your inputs is not a number.");
  }

  else if ((side1 * side1) + (side2 * side2) != (side3 * side3)) {
    alert("This is not a valid right triangle");
  }

  else if (side1 > canvas.height || side2 > canvas.width) {
    alert("This does not fit on the canvas.")
  }

  else{
    context.beginPath();
    context.moveTo(10,10);
    context.lineTo(10,10+side1);
    context.lineTo(10+side2,10+side1);
    context.closePath();
    context.stroke();
}

}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {

  const canvas = document.getElementById('canvas5');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  let radius = Number(prompt("Please enter a radius for your smiley face"));

  if (isNaN(radius) == true) {
    alert("Please enter a real number");
  }

  else if (radius > 250) {
    alert("Your radius is too big for the canvas");
  }

  else if (radius < 0) {
    alert("Your radius is too small");
  }

  else {
  context.beginPath();
  context.arc(radius + 10, radius + 10, radius, 0, Math.PI * 2, true); // Outer circle
  context.stroke();

  context.beginPath();
  context.arc(radius + 10, radius + 10, radius * .7, 0, Math.PI); // Mouth
  context.stroke();

  context.beginPath();
  context.arc(radius + 10 + radius/3, radius + 10 - radius/4, radius * .1, 0, Math.PI * 2, true); // Left eye
  context.stroke();

  context.beginPath();
  context.arc(radius + 10 - radius/3, radius + 10 - radius/4, radius * .1, 0, Math.PI * 2, true); // Right eye
  context.stroke();
  }

}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  const canvas = document.getElementById("canvas6");
  const context = canvas.getContext("2d");
  let bigRadius = Number(prompt("Please enter the outer radius of the star"));
  let smallRadius = Number(prompt("Please enter the inner radius of the star"));
  let i = 0;
  let angleChange = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);


  if (isNaN(bigRadius) || isNaN(smallRadius)) {
      alert("Please enter real numbers as your radii");
    }

  else if (smallRadius > bigRadius) {
    alert("Your outer radius must be larger than your inner radius")
  }

  else {
    context.beginPath();
    context.moveTo(125, 125 - bigRadius);
    while (i < 5) {
      context.lineTo(Math.cos(1.3 * Math.PI - angleChange) * smallRadius + 125, Math.sin(1.3 * Math.PI - angleChange) * smallRadius + 125);
      context.lineTo(Math.cos(1.1 * Math.PI - angleChange) * bigRadius + 125, Math.sin(1.1 * Math.PI - angleChange) * bigRadius + 125);
      angleChange = angleChange + (0.4 * Math.PI);
      i = i + 1;
    }
context.closePath();
context.stroke();

  }


}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  const canvas = document.getElementById('canvas7');
  const context = canvas.getContext("2d");
  context.fillStyle = "red";
  context.beginPath();
  context.moveTo(66,10);
  context.lineTo(146,10);
  context.lineTo(202,66);
  context.lineTo(202,146);
  context.lineTo(146,202);
  context.lineTo(66,202);
  context.lineTo(10,146);
  context.lineTo(10,66);
  context.closePath();
  context.fill();
  context.stroke();
  context.lineWidth = 0;
  context.font = "65px Arial";
  context.fillStyle = "white";
  context.fillText("STOP", 18, 130);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  const canvas = document.getElementById("canvas8");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  let length = Number(prompt("Please enter a valid side length"));
  let x = 10;
  let y = canvas.height - 10;
  let i = 0;
  let line = 1;
  while (i < 5) {
    for (let j = line; j <=5; j +=1) {

      context.rect(x, y - length, length, length);
      context.stroke();
      x += length;
    }
    x = 10 + (length/2) * line;
    y = y-length;
    line +=1;
    i +=1;
  }

  context.beginPath();
  context.closePath();

}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

  let canvas = document.getElementById("canvas9");
  let context = canvas.getContext("2d");
  let x = 150;
  let houseHeight = 450;
  let y = canvas.height - houseHeight - 10;
  let houseLength = 600;
  let houseColor;
  let doorColor;

  context.clearRect(0, 0, canvas.width, canvas.height);

  while(true){
  doorColor=prompt("Please enter a valid color for your front door");
  houseColor=prompt("Please enter a valid color for your house");
  if((doorColor=="brown" || doorColor=="blue" || doorColor=="green" || doorColor=="orange" || doorColor=="purple" || doorColor=="red" || doorColor=="yellow")
  && (houseColor=="brown" || houseColor=="blue" || houseColor=="green" || houseColor=="orange" || houseColor=="purple" || houseColor=="red" || houseColor=="yellow")) {
    break;
  }
  else{
      alert("One of your colors is not supported");
  }
}

context.rect(x, y, houseLength, houseHeight);
context.fillStyle = houseColor;
context.beginPath();
context.fillStyle=houseColor;
context.fillRect(x,y,houseLength,houseHeight);
context.fillStyle=doorColor;
context.fillRect(x+(houseLength/2)-30,y+350,60,100);
context.fillStyle="gray";
context.moveTo(x,y);
context.lineTo(x+286,150);
context.lineTo(x+houseLength,y);
context.lineTo(x,y);
context.fill();
context.fillStyle="lightblue";
context.fillRect(300,y+100, 50, 50);
context.fillRect(526,y+100, 50, 50);
context.fillRect(300,y+200, 50, 50);
context.fillRect(526,y+200, 50, 50);
context.closePath();


}
