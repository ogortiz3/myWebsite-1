var moonY = 129


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(38, 34, 98);
  
  //moon
  fill(255, 255, 255);
  ellipse(259, moonY, 83, 83); 
  
  moonY = moonY + 1
  
  if(moonY >=500){
    moonY = 0
  }
  
  noStroke();
  fill(43, 57, 144);
  rect(0, 383, width, 120); 
  
    //water reflectioin
  fill(0, 113, 180);
  beginShape();
vertex(223, 384);
vertex(292, 384);
vertex(336, 500);
vertex(200, 500);
endShape(CLOSE);
  


  //circle stars
  fill(255, 255, 255);
  ellipse(236, 45, 3, 3);
  fill(255, 255, 255);
  ellipse(412, 127, 3, 3);
   fill(255, 255, 255);
  ellipse(453, 223, 3, 3);
   fill(255, 255, 255);
  ellipse(435, 60, 3, 3);
   fill(255, 255, 255);
  ellipse(245, 244, 3, 3);
   fill(255, 255, 255);
  ellipse(115, 251, 3, 3);
   fill(255, 255, 255);
  ellipse(23, 144, 3, 3);
   fill(255, 255, 255);
  ellipse(138, 104, 3, 3);
   fill(255, 255, 255);
  ellipse(88, 183, 3, 3);
   fill(255, 255, 255);
  ellipse(65, 345, 3, 3);
   fill(255, 255, 255);
 fill(255, 255, 255);
  ellipse(338, 336, 3, 3);
   fill(255, 255, 255);
  ellipse(138, 350, 3, 3);
   fill(255, 255, 255);
  ellipse(400, 250, 3, 3);
  
  
  //dark waves
  fill(38,34, 98);
  rect( 134,472 ,112,7);
   fill(38,34, 98);
  rect( 318,465,84,7);
  fill(38,34, 98);
  rect( 268,430,135,4);
  fill(38,34, 98);
  rect( 121,403,115,3);
  fill(38,34, 98);
  rect( 254,406 , 115,3 );
  
  //light waves
  fill(255,255, 255);
  rect( 161,430,76,4);
  fill(255,255, 255);
  rect( 254,447,109,4);
  fill(255,255, 255);
  rect( 271,415,76,4);
  
} 
