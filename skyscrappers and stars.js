#Project


//animated view

var xPos1 = 1;
var yPos = 10;
var xPos2 = 2;
var xPos3 = 3;
var xPos4 = 4;
var xPos5 = 5;
var xPos6 = 6;
var xPos7 = 7;
var xPos8 = 8;
var xPos9 = 9;
var wing1 = 102;
var wing2 = 276;
var sky1 =50;
var sky2 =60;
var sky3= 55;
var blink = 5;

draw = function() {
    background(29, 40, 115);
    fill(245, 237, 237);
    noStroke();
    ellipse(50,50,50,50);
    fill(10, 9, 9);
    triangle(615,wing1,470,151,310,158);
    triangle(wing2,40,310,113,313,162);
    fill(245, 235, 240);
    ellipse(xPos1, yPos, 10, 10);
    ellipse(xPos2+100, yPos, 10, 10);
    ellipse(xPos3+30, yPos, 10, 10);
    ellipse(xPos4+50, yPos, 10, 10);
    ellipse(xPos5+90, yPos, 10, 10);
    ellipse(xPos6+70, yPos, 10, 10);
    ellipse(xPos7+150, yPos, 10, 10);
    ellipse(xPos8+140, yPos, 10, 10);
    ellipse(xPos9+130, yPos, 10, 10);
    fill(137, 133, 143);
    ellipse (sky1,50,25,-3);
    ellipse (sky2,60,30,-3);
    ellipse (sky3,55,60,-3);
    ellipse (120,100,50,3);
    ellipse (110,120,40,-3);
    ellipse (120,125,30,-4);
    ellipse (130,130,50,-5);
    ellipse (140,100,50,-5);
    ellipse (150,110,50,-3);
    ellipse (160,120,50,-5);
    ellipse (170,130,50,-5);
    ellipse (180,105,40,-3);
    ellipse (190,111,30,-6);
    ellipse (300,50,50,10);
    ellipse (300,70,50,-6);
    ellipse (330,58,83,-6);
    fill(5, 1, 20);
    rect(40,150,20,350);
    rect(50,100,20,350);
    rect(60,130,40,350);
    rect(150,250,70,300);
    rect(170,150,25,150);
    fill(237, 215, 21);
    rect(45,155,10,blink);
    rect(50,165,10,blink);
    rect(60,155,10,blink);
    rect(75,155,10,blink);
    rect(65,165,10,blink);
    rect(75,175,10,blink);
    rect(65,180,10,blink);
    rect(45,175,10,blink);
    rect(90,175,10,blink);
    rect(49,250,10,blink);
    rect(65,300,10,blink);
    rect(44,355,10,blink);
    rect(70,325,10,blink);
    rect(75,200,10,blink);
    rect(60,230,10,blink);
    rect(88,270,10,blink);
    rect(90,390,10,blink);
    rect(180,300,10,blink);
    rect(170,350,10,blink);
    rect(167,360,10,blink);
    rect(185,390,10,blink);
    rect(180,170,10,blink);
    rect(175,165,10,blink);
    
    sky1 +=0.2;
    sky2 -=0.2;
    sky3 +=0.2;
    xPos1 +=0.2;
    xPos2 += 0.2;
    xPos3 += 0.4;
    xPos4 += 0.3;
    xPos5 += 0.1;
    xPos6 += 0.6;
    xPos7 += 0.7;
    xPos8 += 0.8;
    xPos9 += 0.9;


    yPos +=0.2;
    
};

