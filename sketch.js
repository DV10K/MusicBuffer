let song;
function preload() {
  song=loadSound('JJD.mp3');
}

function setup() {
  createCanvas(1920, 1080, WEBGL);
}

function draw() {
  background(0);
  background(0); 
 noStroke();
  randomSeed(100)
  fill(random(0,255),random(0,255),random(0,255))
  randomSeed()
  translate(0,0,0);
  rotateX(frameCount/200);
  rotateY(frameCount/200);
  rotateZ(frameCount/200);
  sphere(random(50,60));
  translate(120,0,0);
  sphere(random(50,60));
  translate(120,0,0);
  sphere(random(50,60));
  translate(120,0,0);
  sphere(random(50,60));
  translate(-120*4,0,0);
  sphere(random(50,60));
  translate(-120,0,0);
  sphere(random(50,60));
  translate(-120,0,0);
  sphere(random(50,60));
  translate(120*3,120,0);
  sphere(random(50,60));
  translate(0,120,0);
  sphere(random(50,60));
  translate(0,120,0);
  sphere(random(50,60));
  translate(0,-120*4,0);
  sphere(random(50,60));
  translate(0,-120,0);
  sphere(random(50,60));
  translate(0,-120,0);
  sphere(random(50,60));
  translate(0,+120*3,0);
  
  randomSeed(1000)
  fill(random(0,255),random(0,255),random(0,255))
  randomSeed()
  box(random(120,170));
  translate(100,100,100);
  box(random(10,50));
  translate(100,100,100);
  box(random(10,50));
  translate(100,100,100);
  box(random(10,50));
  translate(-100*4,-100*4,-100*4);
  box(random(10,50));
  translate(-100,-100,-100);
  box(random(10,50));
  translate(-100,-100,-100);
  box(random(10,50));
  translate(100*3,100*3,100*3);
  box(random(10,50));
  translate(-100,100,100);
  box(random(10,50));
  translate(-100,100,100);
  box(random(10,50));
  translate(-100,100,100);
  box(random(10,50));
  translate(100*4,-100*4,-100*4);
  box(random(10,50));
  translate(100,-100,-100);
  box(random(10,50));
  translate(100,-100,-100);
  box(random(10,50));
  translate(-100*3,100*3,100*3);
  box(random(10,50));
  translate(100,-100,100);
  box(random(10,50));
  translate(100,-100,100);
  box(random(10,50));
  translate(100,-100,100);
  box(random(10,50));
  translate(-100*4,100*4,-100*4);
  box(random(10,50));
  translate(-100,100,-100);
  box(random(10,50));
  translate(-100,100,-100);
  box(random(10,50));
  translate(100*3,-100*3,100*3);
  box(random(10,50));
  translate(100,100,-100);
  box(random(10,50));
  translate(100,100,-100);
  box(random(10,50));
  translate(100,100,-100);
  box(random(10,50));
  translate(-100*4,-100*4,100*4);
  box(random(10,50));
  translate(-100,-100,100);
  box(random(10,50));
  translate(-100,-100,100);
  box(random(10,50));


}
  


function mouseClicked() {
  let fs = fullscreen();
 fullscreen(!fs);
  if(song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }  
}

