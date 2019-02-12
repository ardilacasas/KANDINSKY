var x=0;
var direccion=1;

function setup() {
  createCanvas(900,600 );
}

function draw() 
{

  //1//
  noFill();
stroke (169,206,131);
  strokeWeight (15);
  triangle (200,60,360,220,520,60);
  
  //2//
  noFill();
  stroke (169,206,131);
  strokeWeight (15);
  triangle (280,180,340,240,280,300);
  
 //3//
 noFill();
   stroke (169,206,131);
  strokeWeight (15);
  triangle (180,240,340,400,180,400);
  
  //4//
 
   fill(184,54,53);
  noStroke();
  triangle (540,407,460,320,380,407);
  
  //5//
 
   fill(219,223,188);
  noStroke();
  triangle (540,65,380,225,540,385);
  
   //6//
 
   fill(88);
  noStroke();
  quad( 450,320,370,400,290,320,370,240);
  
  //7//
 
   fill(128,120,88);
  noStroke();
  quad(260,140,260,300,180,220,180,60);
  
  
  
  
 
}
  