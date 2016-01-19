var sound, amplitude, young;

var col = {
  r: 0,
  g: 0,
  b: 0
}

function preload() {
 sound = loadSound("allatsee.mp3");
}

function setup() {
  young = createCanvas(windowWidth, windowHeight);
  amplitude = new p5.Amplitude();
  // young.mouseClicked(function() {
  //   if(sound.isPlaying()) {
  //     sound.stop();
  //   } else {
  //     sound.play();
  //   }
  // });
  sound.play();
  // strokeWeight(15);
  text('click to see the sound interaction', 25, 25);
}

function draw(){
 col.r = random(0, 255);
 col.g = random(0, 255);
 col.b = random(0, 255);
 noFill();
// fill(col.r, col.g, col.b);
 var level = amplitude.getLevel();
 var size = map(level, 0, 1, 0, 1000);
 
  // stroke(col.r, 100, 100);
  background(size,size,120);
  // ellipse(width/2, height/4, size/2, size/2);
  // ellipse(width/4, height/2, size, size);
  
  // if(size > 200) {
  //   background(col.r,100, 50);
  // } else {
  //   background(255,10);
  // }
};

