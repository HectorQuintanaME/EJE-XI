
let wallpaper;
let handPose;
let video;
let hands = [];
let angle;

function preload()
{
    handPose = ml5.handPose();
    wallpaper = loadImage('/assets/w1.jpg');
}

function setup() 
{
	createCanvas(windowWidth, windowHeight);
    video = createCapture(VIDEO);
    video.size(windowWidth, windowHeight);
    video.hide();
    handPose.detectStart(video, gotHands);
    angleMode(DEGREES);
}

function draw()
{

    //translate(width / 2, height / 2);
    background(wallpaper);
    
    for (let i = 0; i < hands.length; i++) 
    {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) 
    {
        let keypoint = hand.keypoints[j];
        fill(255, 0, 0);
        noStroke();
        circle(keypoint.x, keypoint.y, 10);
    }
  }
}

function gotHands(results) 
{
  hands = results;
}
