img="";
function preload(){
   img= loadImage("pic.jpg");
}
function setup(){
  canvas=  createCanvas(640,420);
  canvas.center();
}
function draw(){
    image(img,0,0,640,420);
   
    text("Laptop",100,120);
    noFill();
    stroke("red");
    rect(20,90,300,300);
    
}