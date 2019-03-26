var sunY = 248;
var skyG = 187;
var skyB = 214;


function setup() {
  createCanvas(500, 500);
}

function draw() {
	
let m = map(abs(sunY), 0, 500, 0, 100);
	
  background(0,skyG-m,skyB-m);
	
	fill(255,m-50);
	ellipse(50,50,5,5);
		ellipse(86,231,5,5);
		ellipse(300,60,5,5);
		ellipse(480,240,5,5);
		ellipse(100,76,5,5);
		ellipse(286,125,5,5);
		ellipse(75,121,5,5);
	
	fill(244,157,58);
	stroke(248,219,148);
	strokeWeight(14);
	ellipse(322, sunY, 167, 167);

	
	fill(176,126,9);
	noStroke();
	rect(0,height/2,width, height/2);

	fill(214,86,43);
	beginShape();
		vertex(121, 352);
		vertex(width/2, 81);
		vertex(width-121, 352);
	endShape(CLOSE);
	
	
	
	if(sunY<-500){
		sunY=500;
	}
	
	sunY--;
	//print(m);
}