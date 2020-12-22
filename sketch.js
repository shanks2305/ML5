// ml5.js: Object Detection with COCO-SSD (Image)
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/ml5/1.3-object-detection.html
// https://youtu.be/QEzRxnuaZCk

// p5.js Web Editor - Image: https://editor.p5js.org/codingtrain/sketches/ZNQQx2n5o
// p5.js Web Editor - Webcam: https://editor.p5js.org/codingtrain/sketches/VIYRpcME3
// p5.js Web Editor - Webcam Persistence: https://editor.p5js.org/codingtrain/sketches/Vt9xeTxWJ
let video;
let detector;
let detections = [];

function preload() {
  // img = loadImage('dog_cat.jpg');
  detector = ml5.objectDetector('cocossd');
}

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;
  detector.detect(video, gotDetections);
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  detector.detect(video, gotDetections);
}


function draw() {
  image(video, 0, 0);

  for (let i = 0; i < detections.length; i++) {
    let object = detections[i];
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    noStroke();
    fill(255);
    textSize(24);
    text(object.label, object.x + 10, object.y + 24);
  }
}


//for Image
// let img;
// let detector;

// function preload() {
//   img = loadImage('dog_cat.jpg');
//   detector = ml5.objectDetector('cocossd');
// }

// function gotDetections(error, results) {
//   if (error) {
//     console.log(error);
//   }
//   console.log(results);
//   results.forEach(element => {
//     stroke(0, 255, 0);
//     strokeWeight(4);
//     noFill();
//     rect(element.x, element.y, element.width, element.height);
//     noStroke();
//     fill(255);
//     textSize(24);
//     text(element.label, element.x + 10, element.y + 30);
//   });
// }

// function setup() {
//   createCanvas(640, 480);
//   console.log(detector);
//   image(img, 0, 0);
//   detector.detect(img, gotDetections);
// }