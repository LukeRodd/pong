//var Ball
let xBall =295
let yBall=180
let dBall=23
let ray=dBall/2

//var speed ball
let speedBall_x=8
let speedBall_y=8

//var rect 
let rect_x=10
let rect_y=125
let rect_length=10
let rect_height=75

//var oponemt 
let rectop_x=580
let rectop_y=125
let speedOpY=10;
let error_Chance=0

//var collision
let collide=false;

//var score
let my_Points=0
let op_Points=0

//var sound 
let rect_Sound;
let score_Sound
let music;

function preload(){
  rect_Sound=loadSound("raquetada.mp3")
  score_Sound=loadSound("ponto.mp3")
  music=loadSound("starman.mp3")
}

function setup() {
  createCanvas(600, 350);
  music.loop()
}

function draw() {
  background(0);
  show_Circle();
  show_Rect(rect_x,rect_y);
  show_Rect(rectop_x,rectop_y);
  move_Ball();
  border_Colision();
  move_Rect();
  collide_rect(rect_x,rect_y)
  collide_rect(rectop_x,rectop_y)
  move_Op()
  errorChanceCalc()
  show_Score()
  mark_Point()
  center_Ball()
}
function show_Circle(){
  circle(xBall,yBall,dBall);
}
function show_Rect(x,y){
  rect(x,y,rect_length,rect_height);
}
function move_Ball(){
  xBall+=speedBall_x;
  yBall+=speedBall_y;
}
function border_Colision(){
  if (xBall+ray>width || xBall-ray<0){
    speedBall_x*=-1;
  }
  if (yBall+ray>height || yBall-ray<0){
    speedBall_y*=-1;
  }
}
function move_Rect(){
  if (keyIsDown(UP_ARROW)){
    rect_y-=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    rect_y+=10;
  } 
}
function collide_rect(x,y) {
    collide = collideRectCircle(x, y, rect_length, rect_height, xBall, yBall, ray);
    if (collide) {
        speedBall_x *=-1;
        rect_Sound.play()
    }
}
function move_Op(){
  speedOp_y=yBall-rectop_y-rect_length/2-30;
  rectop_y+=speedOp_y+error_Chance
  errorChanceCalc()
}
function show_Score(){
  stroke(255)
  textAlign(CENTER)
  textSize(16)
  fill(color(255,140,0))
  rect(450,10,40,20)
  fill(color(255,140,0))
  rect(150,10,40,20)
  fill(255)
  text(op_Points,470,26)
  text(my_Points,170,26)
}
function mark_Point(){
  if (xBall>590){
    my_Points+=1
    score_Sound.play()
  }
  if (xBall<10){
    op_Points+=1
    score_Sound.play()
  }
}
function errorChanceCalc(){
   if(op_Points>=my_Points){
    error_Chance+=1
     if(error_Chance>=36){
       error_Chance=37
     }else{
    error_Chance-=1
       if(error_Chance<=36){
         error_Chance=37
       }
     }
   }
}
function center_Ball(){
  if (xBall>=590){
  xBall=295
  yBall=180
  }
  if (xBall<=10){
  xBall=295
  yBall=180    
  }
}