let xPos = 50;
let yPos = 50;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	background(0,10);
	if(xPos < -50){
		xPos = width + 50;
	}
	if(xPos > width + 50){
		xPos = -50;
	}
	if(yPos < -50){
		yPos = height + 50;
	}
	if(yPos > height + 50){
		yPos = -50;
	}
	ellipse(xPos, yPos, 100, 100);
	if (keyIsPressed === true) {
		if(keyCode == 39){ //right arrow key
			xPos = xPos + 5;
		}
		if(keyCode == 37 ){ //left arrow key
			xPos = xPos - 5;
		}
		if(keyCode == 38){ //up arrow key
			yPos = yPos - 5;
		}
		if(keyCode == 40){ //down arrow key
			yPos = yPos + 5;
		}
	}
}
