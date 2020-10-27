
var myVideo = document.getElementById('my-video');
//myVideo.playbackRate = 1;
/*
cont.oninput = function() {
myVideo.style.filter = "contrast("+this.value+")";
}

spd.oninput = function() {
myVideo.playbackRate= this.value;
}
*/
function setup() {

  sound = new p5.AudioIn();
  sound.start();
  fft = new p5.FFT();
  sound.connect(fft);

}
function draw(){
  let level = sound.getLevel();
  let spectrum = fft.analyze();
  let nyquist = 22050;

// get the centroid
spectralCentroid = fft.getCentroid();

// the mean_freq_index calculation is for the display.
let mean_freq_index = spectralCentroid/(nyquist/spectrum.length);

centroidplot = map(log(mean_freq_index), 0, log(spectrum.length), 0.2, 2);

 //  map the loudness from 0 - 1, to 5 - 200
   var l = map(level, 0, 1, 0.2, 5);
   //myVideo.style.filter = "contrast("+l+")";
//   console.log(l+" "+centroidplot);
   myVideo.playbackRate=l;
   myVideo.style.filter = "contrast("+centroidplot+")";
}
