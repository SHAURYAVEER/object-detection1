img = "";
status = "";

function setup()
{
canvas = createCanvas(640, 420);
canvas.center();

objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function preload()
{
    img = loadImage('mobile.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#37FF00");
    text("PHONE", 155, 255);
    noFill();
    stroke("#000000");
    rect(155, 255, 90, 90);

    fill("#37FF00");
    text("HUMAN: CHRIS EVENS", 210, 10);
    noFill();
    stroke("#000000");
    rect(210, 10, 150, 150);
    
}

function modelLoaded()
{
    console.log("Model Loaded!");

    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult()
{
    if(error)
    {
    console.log(error);
    }else{
    console.log(results);
    
}
  }