function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  
  let centerX = width/2;
  let centerY = height/2;
  let radius = 150;
  
  // Main circle base
  noStroke();
  
  // Black half
  fill(0);
  arc(centerX, centerY, radius*2, radius*2, HALF_PI, -HALF_PI, PIE);
  
  // White half
  fill(255);
  arc(centerX, centferY, radius*2, radius*2, -HALF_PI, HALF_PI, PIE);
  
  // Cat heads (larger circles)
  // White cat in black area
  fill(255);
  ellipse(centerX, centerY - radius/2, radius, radius);
  
  // Black cat in white area
  fill(0);
  ellipse(centerX, centerY + radius/2, radius, radius);
  
  // Cat ears for white cat
  fill(255);
  // Left ear
  triangle(
    centerX - radius/3, centerY - radius/1.2,  // Bottom left
    centerX - radius/6, centerY - radius,      // Top
    centerX, centerY - radius/1.2              // Bottom right
  );
  // Right ear
  triangle(
    centerX, centerY - radius/1.2,            // Bottom left
    centerX + radius/6, centerY - radius,     // Top
    centerX + radius/3, centerY - radius/1.2  // Bottom right
  );
  
  // Cat ears for black cat
  fill(0);
  // Left ear
  triangle(
    centerX - radius/3, centerY + radius/1.2,  // Top left
    centerX - radius/6, centerY + radius*1.1,  // Bottom
    centerX, centerY + radius/1.2              // Top right
  );
  // Right ear
  triangle(
    centerX, centerY + radius/1.2,            // Top left
    centerX + radius/6, centerY + radius*1.1, // Bottom
    centerX + radius/3, centerY + radius/1.2  // Top right
  );
  
  // Eyes (elliptical)
  // Black cat's eyes (white)
  fill(255);
  ellipse(centerX - radius/4, centerY + radius/2, radius/5, radius/8);
  ellipse(centerX + radius/4, centerY + radius/2, radius/5, radius/8);
  
  // White cat's eyes (black)
  fill(0);
  ellipse(centerX - radius/4, centerY - radius/2, radius/5, radius/8);
  ellipse(centerX + radius/4, centerY - radius/2, radius/5, radius/8);
  
  // Add whiskers
  // White cat whiskers (black)
  stroke(0);
  strokeWeight(2);
  // Left whiskers
  line(centerX - radius/3, centerY - radius/2.5, centerX - radius/1.5, centerY - radius/2);
  line(centerX - radius/3, centerY - radius/2.5, centerX - radius/1.5, centerY - radius/2.3);
  line(centerX - radius/3, centerY - radius/2.5, centerX - radius/1.5, centerY - radius/2.6);
  // Right whiskers
  line(centerX + radius/3, centerY - radius/2.5, centerX + radius/1.5, centerY - radius/2);
  line(centerX + radius/3, centerY - radius/2.5, centerX + radius/1.5, centerY - radius/2.3);
  line(centerX + radius/3, centerY - radius/2.5, centerX + radius/1.5, centerY - radius/2.6);
  
  // Black cat whiskers (white)
  stroke(255);
  // Left whiskers
  line(centerX - radius/3, centerY + radius/1.8, centerX - radius/1.5, centerY + radius/1.6);
  line(centerX - radius/3, centerY + radius/1.8, centerX - radius/1.5, centerY + radius/1.8);
  line(centerX - radius/3, centerY + radius/1.8, centerX - radius/1.5, centerY + radius/2);
  // Right whiskers
  line(centerX + radius/3, centerY + radius/1.8, centerX + radius/1.5, centerY + radius/1.6);
  line(centerX + radius/3, centerY + radius/1.8, centerX + radius/1.5, centerY + radius/1.8);
  line(centerX + radius/3, centerY + radius/1.8, centerX + radius/1.5, centerY + radius/2);
  
  // smiles
  // White cat smile (black)
  stroke(0);
  noFill();
  strokeWeight(2);
  arc(centerX, centerY - radius/2.3, radius/2, radius/4, 0, PI);
  
  // Black cat smile (white) 
  stroke(255);
  arc(centerX, centerY + radius/2.3, radius/2, radius/4, PI, TWO_PI);
}
