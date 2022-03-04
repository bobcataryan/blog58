objects="";
r="";
b="";
g="";
color=""
function setup(){
    canvas=createCanvas(600,550);
    canvas.position(650,150);
    video=createCapture(VIDEO);
    video.hide();
    detector=ml5.objectDetector('cocossd',modelloaded);
    
}





function modelloaded(){

    console.log("Model has loaded");
    detector.detect(video,gotresults);
}


function gotresults(error,results){
    if (error){
        console.error(error);
    }

    else{
        console.log(results);
    }
    objects=results;
}


function changecolor(){
    r=Math.floor(Math.random()*255);
    g=Math.floor(Math.random()*255);
    b=Math.floor(Math.random()*255);
}


function draw(){
    image(video,0,0,600,600);
    k=objects.length;
    for(i=0;i<k;i++){
        stroke(r,g,b);
        text(objects[i].label,objects[i].x+15,objects[i].y+15);
        text(Math.floor(objects[i].confidence*100)+"%",objects[i].x+15,objects[i].y+35);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        document.getElementById("status").innerHTML="Status: Objects Detected"; 
        if (objects[i].label == person) {
            document.getElementById("detected").innerHTML="Baby found!";
            
    }
    else{
        document.getElementById("detected").innerHTML="Baby not found!";

    }
   }
}