var video;

var vScale = 18;

function setup() {
  createCanvas(1080, 780);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
}

function draw() {
  background(240,79,37);

  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright = (r+g+b)/3;

      var w = ((Number(bright)*100)/100)/ vScale;

      noStroke();
      fill(255,204,11);
      ellipseMode(CENTER);
      ellipse(x*vScale, y*vScale, w, w);

    }
  }

}
