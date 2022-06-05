video="";
status="";
object=[];

function preload(){
video=createVideo("video.mp4");
video.hide();
}
    
function setup(){
canvas=createCanvas(500,300);
canvas.position(430,300);
}

function draw(){
image(video,0,0,500,300);
if(status != ""){
object_detector.detect(video, gotResult)
for(i=0;i<object;i++){
document.getElementById("status").innerHTML="Status:Detected Objects";
document.getElementById("found").innerHTML="Number of objects found: "+object.length;
fill("#FF0000");
percent=floor(object[i].confidence*100);
text(object[i].label+percent+"%",object[i].x+15,object[i].y+15);
noFill();
stroke("#FF0000");
rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}
}


function start(){
object_detector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Status:Detecting Objects";
}

function modelLoaded(){
console.log("Model Loaded !");
video.speed(1);
video.volume(0);
video.loop();
}

function gotResult(error, results){
if(error){console.log(error);}
console.log(results);
}