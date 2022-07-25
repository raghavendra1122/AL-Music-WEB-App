Peter_Pan_music = "";
Harry_Potter_Music = "";

function preLoad()
{
   Peter_Pan_music = loadSound("music2.mp3");
   Harry_Potter_Music = loadSound("music.mp3");
}

function setup()
{
  canvas = createCanvas(600,550);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();
}

function draw()
{
  image(video,0,0,600,500);
}