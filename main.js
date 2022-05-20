x = 0;
y = 0;

score = 0;
song = "";
 score_left_wrist = 0;
 right_wrist_x = 0;
 right_wrist_y = 0;
 left_wrist_x = 0;
 left_wrist_y = 0;

function preload()
{
    song = loadSound("music.mp3")
    song = loadSound("Arcade.mp3")
}

function setup()
{
    canvas = createCanvas(600, 500)
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotposes);
}
function modelLoaded()
{
   console.log("PoseNet Is Initialized");
}
