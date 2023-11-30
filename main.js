nosex=0
nosey=0

function preload(){
clownnose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
 canvas=createCanvas(333,333)
    canvas.center()

    video=createCapture(VIDEO)
    video.hide()
posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
}

function modelloaded(){
    console.log("MISSION_DONE")
}

function gotposes(results){
    if(results.length >0 ){
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
    }}

function draw(){
    image(video,0,0,333,333)
    image (clownnose,nosex,nosey,30,30)
}

function takesnapshot(){
save("image.png")
}