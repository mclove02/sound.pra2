var sound, amplitude, young;

var col = {
  r: 100,
  g: 50,
  b: 100
}

function preload() {
 sound = loadSound("iphone_6_plus.mp3");
}

function setup() {
  young = createCanvas(windowWidth, windowHeight);
  amplitude = new p5.Amplitude();
  young.mouseClicked(function() {
    if(sound.isPlaying()) {
      sound.stop();
    } else {
      sound.play();
    }
  });
  text('click to see the sound interaction', 25, 25);
}

function draw(){
 col.r = random(0, 255);
 col.g = random(0, 255);
 col.b = random(0, 255);
strokeWeight(map(size,0,1,1,30));
// fill(col.r, col.g, col.b);
 var level = amplitude.getLevel();
 var size = map(level, 0, 1, 0, 500);
  for (var x = 30; x < width ; x++) {
  fill(col.r, col.g, col.b);
  ellipse(width/2, height/2, size, size);
  }
   if(size>200) {
    background(col.g);
  } else {
    background(255,100);
  }
};

