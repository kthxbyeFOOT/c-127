song1 = " "
song2 = " "
 function preoload(){
song1 = loadSound("Industry Baby.mp3")
song2 = loadSound("Enemy.mp3")
 }
 


function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide()}


function draw(){
image(video, 0, 0, 600, 500 )
}

