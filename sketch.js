var canvas;
var block1,block2,block3,block4;
var ball, edges;


function setup(){
    canvas = createCanvas(770,600);

    block1 = createSprite(100,600,185,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,600,185,30);
    block2.shapeColor = "yellow";

    block3 = createSprite(490,600,175,30);
    block3.shapeColor="green";

    block4 = createSprite(680,600,175,30);
    block4.shapeColor="red";
   

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY=7;
    ball.velocityX=7;
   

 }


function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    Bounceoff1(ball,block1); 
    Bounceoff2(ball,block2);
    Bounceoff3(ball,block3);
    Bounceoff4(ball,block4);

    IsTouch1(ball,block1);
    IsTouch2(ball,block2);
    IsTouch3(ball,block3);
    IsTouch4(ball,block4);

    drawSprites();

 }

 //when the ball touches the red block then it will bounceoff
 function Bounceoff1(var1,var2){
    if(var1.y-var2.y<var1.height/2+var2.height/2
      &&var2.y-var1.y<var1.height/2+var2.height/2){
       var1.shapeColor="blue";  
    
    }  
   
  }

  //when the ball touches the red block then it will bounceoff
  function Bounceoff2(var1,var2){
    if(var1.y-var2.y<var1.height/2+var2.height/2
      &&var2.y-var1.y<var1.height/2+var2.height/2){
       var1.shapeColor="yellow";  
     
    }  
   
  }

  //when the ball touches the red block then it will bounceoff
  function Bounceoff3(var1,var2){
    if(var1.y-var2.y<var1.height/2+var2.height/2
      &&var2.y-var1.y<var1.height/2+var2.height/2){
       var1.shapeColor="green";  
   
    }  
    
  }

  //when the ball touches the red block then it will bounceoff
  function Bounceoff4(var1,var2){
    if(var1.y-var2.y<var1.height/2+var2.height/2
      &&var2.y-var1.y<var1.height/2+var2.height/2){
       var1.shapeColor="red";  
   
    }  
    
  }

  //when the ball touches the blue block the ball will become blue
  function IsTouch1(ob1,ob2){
    if(ob1.x-ob2.x<ob1.width/2+ob2.width/2
      &&ob2.x-ob1.x<ob1.width/2+ob2.width/2
      &&ob2.y-ob1.y<ob1.height/2+ob2.height/2
      &&ob1.y-ob2.y<ob1.height/2+ob2.height/2){
      ob1.shapeColor="blue" ; 
     
      return true;  
      }
    else{
      return false;
       }
  }

  //when the ball touches the yellow block the ball will become yellow
  function IsTouch2(ob1,ob2){
    if(ob1.x-ob2.x<ob1.width/2+ob2.width/2
      &&ob2.x-ob1.x<ob1.width/2+ob2.width/2
      &&ob2.y-ob1.y<ob1.height/2+ob2.height/2
      &&ob1.y-ob2.y<ob1.height/2+ob2.height/2){
      ob1.shapeColor="yellow" ; 
      ob1.velocityX=0;
      ob1.velocityY=0;
      return true;  
     }
    else{
      return false;
      }
  }

  //when the ball touches the green block the ball will become green
  function IsTouch3(ob1,ob2){
    if(ob1.x-ob2.x<ob1.width/2+ob2.width/2
      &&ob2.x-ob1.x<ob1.width/2+ob2.width/2
      &&ob2.y-ob1.y<ob1.height/2+ob2.height/2
      &&ob1.y-ob2.y<ob1.height/2+ob2.height/2){
      ob1.shapeColor="green" ; 
      return true;  
      }
    else{
      return false;
      }
  }

  //when the ball touches the red block the ball will become red
  function IsTouch4(ob1,ob2){
    if(ob1.x-ob2.x<ob1.width/2+ob2.width/2
      &&ob2.x-ob1.x<ob1.width/2+ob2.width/2
      &&ob2.y-ob1.y<ob1.height/2+ob2.height/2
      &&ob1.y-ob2.y<ob1.height/2+ob2.height/2){
        ob1.shapeColor="red" ; 
      return true;  
      }
    else{
      return false;
      }
  }