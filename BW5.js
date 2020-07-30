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
//var contents = ['About BrainChild','Work','Blog','Sitequests','Contact'];
//var inner=['About BrainChild','Work','Blog','Sitequests','Contact'];
var contents = ['About BrainChild','Systems','Branding','Visuals & More','Contact'];
var inner=['About BrainChild','Systems','Branding','Visuals & More','Contact'];
var graphics;
var workC;
var bgC;
var fgC;
var tbgC;
var tfgC;
var nbgC;
var nfgC;
var dL1;
var dL2;
var invi=[];
var timtim;
var oneandonly;
// var spinner=false;
//var eyeball;

function preload(){

  //pre=createCanvas(200,200);

  //brain = loadModel('data/brain2.obj',true);
brain = loadModel('data/BC4.obj',true);
  content = loadJSON('data/content1.json');


  //Your object was scaled to get the smallest filesize. Use a scale factor of 0.0044953548387097 to get the original size, eg. in three.js:

}
function setup(){
  oneandonly=true;
console.log(content.content[0]);
bgC=color(0,0,188);
fgC=color(250,13,90);
dL1=color(0, 255,230);
dL2=color(255, 132 , 23);
cnv = createCanvas(innerWidth, innerHeight, WEBGL);
ellipseMode(CENTER);
targetSpin=PI*3;
timtim=0;
for(var i=0;i<contents.length;i++){

  homeH[i]= createElement('h1','This is BrainChild.work');
  //homeH[i].position(width/8,(i+2)*height/7);
  homeH[i].position(width/8,(i+1)*height/7);
  homeH[i].style('font-weight',(i+1)*i);
  homeH[i].style('animation-delay',(i)*0.3+'s');
  //homeH[i].mousePressed(conts);
  width>height?width/height:height/width
  if(i%2==0)
  homeH[i].style('font-family','iwork'  );
  if(width<height)
  homeH[i].style('font-size','3vh'  );

  invi[i]=createElement('span','');
  invi[i].position(width/8,(i+1)*height/7);
  invi[i].size(width>height?2.5*width/8:3*width/4,width>height?30+1.6*height*.05:30+height*.035*1.6);
  invi[i].style('z-index','2');
  invi[i].mousePressed(conts);
}
container= createDiv("");
container.class('container');
container.id('cont');
container.hide();
  container.position(width>height?width/2:width/5,height/10);
  container.size(width>height?3*width/8:4*width/5,8*height/10);

workC=createDiv("");
workC.class('container');
workC.id('workc');
workC.hide();
workC.position(width>height?width/8:0,width>height?height/10:0);
workC.size(width>height?6*width/8:width,width>height?8*height/10:height);


//container.size(width>height?3*width/8:width,8*height/10);
//  container.position(0,height/10);
//  container.size(width,9*height/10);


cnv.mousePressed(hideContainer);
//homeH[0].mouseOver(changeLink0);
invi[0].mouseOver(changeLink0);
invi[1].mouseOver(changeLink1);
invi[2].mouseOver(changeLink2);
invi[3].mouseOver(changeLink3);
invi[4].mouseOver(changeLink4);
//homeH[5].mouseOver(changeLink5);
for(let i=0;i<5;i++){
invi[i].mouseOut(function(){rechangeLink(i)});

}

invi[0].mousePressed(function(){changeContainer(0)});
invi[1].mousePressed(function(){changeContainer(1)});
invi[2].mousePressed(function(){changeContainer(2)});
invi[3].mousePressed(function(){changeContainer(3)});
invi[4].mousePressed(function(){changeContainer(4)});



//frameRate(24); //for android mobiles
/*
but1=createButton('<');
but1.position(width/2-width*0.4,height/2);
but1.mousePressed(buttonAction1);

but2=createButton('>');
but2.position(width/2+width*0.4,height/2);
but2.mousePressed(buttonAction2);

*/
s
}

function conts(){
  container.show();


}
function hideContainer(){
  container.hide();


}

function windowResized(){
 resizeCanvas(innerWidth,innerHeight);
 for(var i=0;i<contents.length;i++){
   homeH[i].style(('font-size',width>height?width/height:(height/width))*2+'vh');
   homeH[i].position(width/8,(i+1)*height/7);
}
container.position(width/2,height/10);
container.size(3*width/8,8*height/10);
workC.size(width>height?6*width/8:width,width>height?8*height/10:height);

// but1.position(width/2-width*0.4,height/2);
 //but2.position(width/2+width*0.4,height/2);


}


function draw(){
  cursor(HAND);
  //background(bgC);

  //loading animation

//loading animation ends

cnv.mousePressed(mP);
  //loading animation
  /* text animation and position
for(var i=0;i<5;i++){
  weightControl = map(sin(frameCount/10.0-i*TWO_PI/8.0),-1,1,0,900);
  //homeH[i].elt.style['font-variation-settings'] = `"wght" ${mouseY}, "wdth" ${mouseX}`;
  //homeH[i].elt.style['font-variation-settings'] = `"wght" ${weightControl}, "wdth" ${weightControl}`;
  homeH[i].elt.style['font-variation-settings'] = `"wght" ${weightControl}`;

}

for(var i=0;i<5;i++){
  homeH[i].position(width/8+cos(frameCount/10.0-i*TWO_PI/8.0)*10,(i+1)*height/7);

}
*/
  /*
if(mouseIsPressed){
   cnv.mousePressed(targetSet);
}*/

    //rotateX(PI/2);
    //rotateY(PI/2);
if(oneandonly)
{
switch(timtim){
  case 30:
  changeLink0();
  break;
  case 45:
  rechangeLink(0);
  changeLink1();
  break;
  case 60:
  rechangeLink(1);
  changeLink2();
  break;
  case 75:
  rechangeLink(2);
  changeLink3();
  break;
  case 90:
  rechangeLink(3);
  changeLink4();
  break;
  case 105:
  rechangeLink(4);
  break;
  case 120:
  timtim=0;
  oneandonly=false;
  break;
  }
  timtim++;
}
    scale(width>height?width/height:height/width);
     var dirX = (mouseX / width - 0.5) * 2;
  var dirY = (mouseY / height - 0.5) * 2;
  directionalLight(255,255,255,0,0,1);
   directionalLight(dL1, dirX, dirY, 0.5);
   directionalLight(dL2, -dirX, -dirY, 0.5);

  specularMaterial(fgC);



var dx =  targetX - x;
x+=dx * easing;


var dy =  targetY - y;
y+=dy * easing;

//rotateX(y);
rotateY(x);

//torus();
//box();
//translate(0,map(weightControl,100,800,-10,10));

translate(0,tan(map(frameCount%200,0,199,0,PI))*10);
model(brain);
/*
switch(frameCount%200){
case 1:
tbgC=bgC;
tfgC=fgC;
var r=random(0,255);
var g=random(0,255);
var b=random(0,255);
nbgC=color(r,g,b);
nfgC=color(255-r,255-g,255-b);
break;
case 93:
bgC=lerpColor(tbgC,nbgC,0.33);
fgC=lerpColor(tfgC,nfgC,0.33);
break;
case 96:
bgC=lerpColor(tbgC,nbgC,0.66);
fgC=lerpColor(tfgC,nfgC,0.66);
break;
case 99:
bgC=nbgC;
fgC=nfgC;
break;
}
*/
/*
if(frameCount%200==99){
  var r=random(0,255);
  var g=random(0,255);
  var b=random(0,255);
  bgC=color(r,g,b);
  fgC=color(255-r,255-g,255-b);
}
*/



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
    // this.style('background-color','#fff');
    // this.style('color','#000');
    // this.html(contents[0]);

  homeH[0].style('background-color','#fff');
  homeH[0].style('color','#000');
  homeH[0].html(contents[0]);
  //changeContainer(0);

}
function changeLink1(){
  check=true;
  homeH[1].style('background-color','#fff');
  homeH[1].style('color','#000');
  homeH[1].html(contents[1]);
  //changeContainer(1);
}function changeLink2(){
  check=true;
  homeH[2].style('background-color','#fff');
  homeH[2].style('color','#000');
  homeH[2].html(contents[2]);
  //changeContainer(2);
}
function changeLink3(){
  check=true;
  homeH[3].style('background-color','#fff');
  homeH[3].style('color','#000');
  homeH[3].html(contents[3]);
  //changeContainer(3);
}
function changeLink4(){
  check=true;
  homeH[4].style('background-color','#fff');
  homeH[4].style('color','#000');
  homeH[4].html(contents[4]);
  //changeContainer(4);
}
function changeLink5(){
  check=true;
  this.style('background-color','#fff');
  this.style('color','#000');
  this.html(contents[5]);
  //changeContainer(5);
}
function changeLink6(){
  check=true;
  this.style('background-color','#fff');
  this.style('color','#000');
  this.html(contents[6]);
  //changeContainer(6);
}
function changeLink7(){
  check=true;
  this.style('background-color','#fff');
  this.style('color','#000');
  this.html(contents[7]);
  //changeContainer(7);
}
function rechangeLink(i){

  homeH[i].style('background-color','#000');
  homeH[i].html('This is BrainChild.work');
  homeH[i].style('color','#fff');
}
function changeContainer(x){
  document.querySelector('#cont').scrollTop=0;
  if(content.content[x].container){

    container.html('<h2>'+content.content[x].head+'</h2><p>'+content.content[x].p+'</p>');
/*
    for(var i=0;i<content.content[x].container.length;i++){
      container.html('<div class="add"><h3>'+content.content[x].container[i].h+'</h3>'+content.content[x].container[i].img+'<p>'+content.content[x].container[i].p+'</p></div>',true);
      //var divs = selectAll('.add');
      //divs[i].mousePressed(function(){innerContent(x,i-1)});
    }
*/
/*
  container.html('<div class="cover" style="background: url('+content.content[x].container[0].cover+');width:100%;height:400px;background-size:cover;"><h3>'+content.content[x].container[0].h+'</h3></div>',true);
  var divs = selectAll('.cover');
  divs[0].mousePressed(function(){container.html('<div class="add"><h3>'+content.content[x].container[0].h+'</h3>'+content.content[x].container[0].img+'<p>'+content.content[x].container[0].p+'</p></div>');});
*/



for(var i=0;i<content.content[x].container.length;i++){
  //container.html('<div class="cover" style="background: url('+content.content[x].container[i].cover+');width:100%;height:400px;background-size:cover;"><h3>'+content.content[x].container[i].h+'</h3></div>',true);
  if(content.content[x].container[i].cover)
  container.html('<div class="add"><h3>'+content.content[x].container[i].h+'</h3><p>'+content.content[x].container[i].p+'</p><img src="'+content.content[x].container[i].cover+'"/><button class="bt" onclick="workContent('+x+','+i+')">View Project</button></div>',true);
  else
  container.html('<div class="add"><h3>'+content.content[x].container[i].h+'</h3><p>'+content.content[x].container[i].p+'</p>'+content.content[x].container[i].img+'</div>',true);

}
/*
var divs = selectAll('.cover');
for(let i=0;i<content.content[x].container.length;i++){

  //divs[i].mousePressed(function(){container.html('<div class="add"><h3>'+content.content[x].container[i].h+'</h3>'+content.content[x].container[i].img+'<p>'+content.content[x].container[i].p+'</p></div>');});
  divs[i].mousePressed(function(){workC.show();workC.html('<img id="cross" src="images/x.svg" onclick="workC.hide()"/><div class="add"><h3>'+content.content[x].container[i].h+'</h3><p>'+content.content[x].container[i].p+'</p>'+content.content[x].container[i].img+'</div>');});


}
*/

  }
  else{

      container.html('<h2>'+content.content[x].head+'</h2><p>'+content.content[x].p+'</p>');
  }


}

function innerContent(x,j){

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
function workContent(x,i){
workC.show();
workC.html('<img id="cross" src="images/x.svg" onclick="workC.hide();"/><div class="add"><h3>'+content.content[x].container[i].h+'</h3><p>'+content.content[x].container[i].article+'</p>'+content.content[x].container[i].img+'</div>');
document.querySelector('#workc').scrollTop=0;
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
