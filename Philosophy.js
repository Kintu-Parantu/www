var x, y, direction, rowWidth, rowHeight, pix = [], cellSize;
function setup(){
	frameRate(120);
	background(255);

	direction = "UP";
	rowWidth = 150;
	rowHeight = 150;
	x = rowWidth/2;
	y = rowHeight/2;
  cellSize=5;
  noStroke();

	var w = rowWidth*cellSize + cellSize, h = rowHeight*cellSize + cellSize;

	canvas = createCanvas(w, h);

	rectMode(CENTER);
	//stroke(0);
	fill(255);
	for (var i=0; i<rowHeight; i++){
		for (var j=0; j<rowWidth; j++){
			rect(cellSize + cellSize*j, cellSize + cellSize*i, cellSize, cellSize);
			pix[j + i*rowWidth] = "WHITE";
		}
	}

}

var currentPixel;
function draw(){

  for(var sp=0;sp<50;sp++){


	var b;
	currentPixel = pix[x + y*rowWidth];
	if (direction == "UP"){
		if (currentPixel == "WHITE"){
			pix[x + y*rowWidth] = "BLACK";
			x+=1;
			direction = "RIGHT";
		}else{
			pix[x + y*rowWidth] = "WHITE";
			x-=1;
			direction = "LEFT";
		}
	}else if (direction == "RIGHT"){
		if (currentPixel == "WHITE"){
			pix[x + y*rowWidth] = "BLACK";
			y+=1;
			direction = "DOWN";
		}else{
			pix[x + y*rowWidth] = "WHITE";
			y-=1;
			direction = "UP";
		}
	}else if (direction == "DOWN"){
		if (currentPixel == "WHITE"){
			pix[x + y*rowWidth] = "BLACK";
			x-=1;
			direction = "LEFT";
		}else{
			pix[x + y*rowWidth] = "WHITE";
			x+=1;
			direction = "RIGHT";
		}
	}else if (direction == "LEFT"){
		if (currentPixel == "WHITE"){
			pix[x + y*rowWidth] = "BLACK";
			y-=1;
			direction = "UP";
		}else{
			pix[x + y*rowWidth] = "WHITE";
			y+=1;
			direction = "DOWN";
		}
	}


	if (pix[x + y*rowWidth] == "WHITE"){
		fill(0);
	}else{
		fill(255);
	}
	rect(cellSize + cellSize*x, cellSize + cellSize*y, cellSize, cellSize);

  if(x> rowWidth - 1){
    x=0;
  }
  else if(x< 0 ){
    x=rowWidth-1;
  }
  if (y > rowHeight-1) {
    y = 0;
  } else if (y < 0) {
    y = rowHeight-1;
  }

}

}
