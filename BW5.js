//draw a spinning brain
var cnv;
var check;
var content;
var brain;
var targetSpin;
var x=0;
var y=0;
var easing=0.075;
var addDiv;
//var easing=0.1; //for android mobiles
var targetX=0;
var targetY=0;
var but1;
var but2;
var ang=0;
var pre;
var homeH=[];
var container;
var link;
var contents = ['About BrainChild','Work','Blog','Sitequests','Contact'];
var inner=['About BrainChild','Work','Blog','Sitequests','Contact'];
var graphics;

// var spinner=false;
//var eyeball;

function preload(){
  //pre=createCanvas(200,200);

  brain = loadModel('data/brain2.obj',true);
  content = loadJSON('data/content.json');


  //Your object was scaled to get the smallest filesize. Use a scale factor of 0.0044953548387097 to get the original size, eg. in three.js:

}
function setup(){
console.log(content.content[0]);



cnv = createCanvas(innerWidth, innerHeight, WEBGL);
ellipseMode(CENTER);
targetSpin=PI*3;

for(var i=0;i<contents.length;i++){
  homeH[i]= createElement('h1','This is BrainChild.work');
  homeH[i].position(width/8,(i+2)*height/7);
  homeH[i].style('font-weight',(i+1)*i);
  homeH[i].mousePressed(conts);
  width>height?width/height:height/width
  if(i%2==0)
  homeH[i].style('font-family','iwork'  );
}
container= createDiv("");
container.id('container');
container.hide();
container.position(width/2,height/10);
container.size(3*width/8,8*height/10);
cnv.mousePressed(hideContainer);
homeH[0].mouseOver(changeLink0);
homeH[1].mouseOver(changeLink1);
homeH[2].mouseOver(changeLink2);
homeH[3].mouseOver(changeLink3);
homeH[4].mouseOver(changeLink4);
//homeH[5].mouseOver(changeLink5);
for(var i=0;i<5;i++)
homeH[i].mouseOut(rechangeLink);



//frameRate(24); //for android mobiles
/*
but1=createButton('<');
but1.position(width/2-width*0.4,height/2);
but1.mousePressed(buttonAction1);

but2=createButton('>');
but2.position(width/2+width*0.4,height/2);
but2.mousePressed(buttonAction2);

*/


}

function conts(){
  container.show();


}
function hideContainer(){
  container.hide();


}

function windowResized(){
 resizeCanvas(innerWidth,innerHeight);
 for(var i=0;i<5;i++){
   homeH[i].style(('font-size',width>height?width/height:(height/width))*2+'vh');
}
container.position(width/2,height/10);
container.size(3*width/8,8*height/10);

// but1.position(width/2-width*0.4,height/2);
 //but2.position(width/2+width*0.4,height/2);


}


function draw(){
  cursor(HAND);
  background(0,0,188);

  //loading animation

//loading animation ends

cnv.mousePressed(mP);
  //loading animation
for(var i=0;i<5;i++){
  weightControl = map(sin(frameCount/10.0-i*TWO_PI/8.0),-1,1,0,900);
  //homeH[i].elt.style['font-variation-settings'] = `"wght" ${mouseY}, "wdth" ${mouseX}`;
  //homeH[i].elt.style['font-variation-settings'] = `"wght" ${weightControl}, "wdth" ${weightControl}`;
  homeH[i].elt.style['font-variation-settings'] = `"wght" ${weightControl}`;

}

for(var i=0;i<5;i++){
  homeH[i].position(width/8+cos(frameCount/10.0-i*TWO_PI/8.0)*10,(i+1)*height/7);

}

  /*
if(mouseIsPressed){
   cnv.mousePressed(targetSet);
}*/

    //rotateX(PI/2);
    //rotateY(PI/2);
    scale(width>height?width/height:height/width);
     var dirX = (mouseX / width - 0.5) * 2;
  var dirY = (mouseY / height - 0.5) * 2;
  directionalLight(255,255,255,0,0,1);
   directionalLight(0, 255,230, dirX, dirY, 0.5);
   directionalLight(255, 85, 0, -dirX, -dirY, 0.5);

  specularMaterial(250,13,90);



var dx =  targetX - x;
x+=dx * easing;


var dy =  targetY - y;
y+=dy * easing;

//rotateX(y);
rotateY(x);

//torus();
//box();
//translate(0,map(weightControl,100,800,-10,10));

translate(0,tan(frameCount/50.0)*10);
model(brain);





/*
  texture(eyeball);
  //specularMaterial(255,255,255);
  push();
  rotateY(PI/2);
  translate(30,40,-80);
  sphere(15);
  pop();
  push();
  rotateY(PI/2);
  translate(-30,40,-80);
  sphere(15);
  pop();
*/

}
function changeLink0(){
  check=true;
  this.style('background-color','#fff');
  this.style('color','#000');
  this.html(contents[0]);
  changeContainer(0);

}
function changeLink1(){
  check=true;
  this.style('background-color','#fff');
  this.style('color','#000');
  this.html(contents[1]);
  changeContainer(1);
}function changeLink2(){
  check=true;
  this.style('background-color','#fff');
  this.style('color','#000');
  this.html(contents[2]);
  changeContainer(2);
}
function changeLink3(){
  check=true;
  this.style('background-color','#fff');
  this.style('color','#000');
  this.html(contents[3]);
  changeContainer(3);
}
function changeLink4(){
  check=true;
  this.style('background-color','#fff');
  this.style('color','#000');
  this.html(contents[4]);
  changeContainer(4);
}
function changeLink5(){
  check=true;
  this.style('background-color','#fff');
  this.style('color','#000');
  this.html(contents[5]);
  changeContainer(5);
}
function changeLink6(){
  check=true;
  this.style('background-color','#fff');
  this.style('color','#000');
  this.html(contents[6]);
  changeContainer(6);
}
function changeLink7(){
  check=true;
  this.style('background-color','#fff');
  this.style('color','#000');
  this.html(contents[7]);
  changeContainer(7);
}
function rechangeLink(){

  this.style('background-color','#000');
  this.html('This is BrainChild.work');
  this.style('color','#fff');

}
function changeContainer(x){
  if(content.content[x].container){

    container.html('<h2>'+content.content[x].head+'</h2><p>'+content.content[x].p+'</p>');
    for(var i=0;i<content.content[x].container.length;i++){
      container.html('<div class="add"><h3>'+content.content[x].container[i].h+'</h3>'+content.content[x].container[i].img+'"<p>'+content.content[x].container[i].p+'</p></div>',true);
      //var divs = selectAll('.add');
      //divs[i].mousePressed(function(){innerContent(x,i-1)});
    }

  }
  else{

      container.html('<h2>'+content.content[x].head+'</h2><p>'+content.content[x].p+'</p>');
  }


}

function innerContent(x,j){
  console.log(j);
  container.html(content.content[x].container[j].article);
}


function targetSet(){
  if(mouseX>width/2)
  {
    if(targetX==0){
      targetX = targetSpin;
      targetY = targetSpin;
    }
    else {
      x=0;
      y=0;
    }
  }
  else
    {
      if(targetX!=0){
        targetX = 0;
        targetY = 0;
      }
      else {
        x=targetSpin;
        y=targetSpin;
      }
    }

}

function buttonAction2(){
  if(targetX==0){
      targetX = targetSpin;
      targetY = targetSpin;
    }
    else {
      x=0;
      y=0;
    }
}

function buttonAction1(){
 if(targetX!=0){
        targetX = 0;
        targetY = 0;
      }
      else {
        x=targetSpin;
        y=targetSpin;
      }
}
function keyPressed(){
if(keyCode==LEFT_ARROW)
buttonAction1();
if(keyCode==RIGHT_ARROW)
buttonAction2();
}
function mP(){
  if(mouseX<=width/2)
  buttonAction1();
  else {
    buttonAction2();
  }
}
