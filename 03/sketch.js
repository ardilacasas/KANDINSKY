var x=0;
var direccion=1;

function setup() {
  createCanvas(1062, 707);
}

function draw() 
{
  background(255);
  noStroke();
  // cielo
  fill(x/6, x/4, 150+x/4);
  rect(0,0,width, height/2);
  // sol
  fill(100+x/2,100+x/4,0);
  ellipse(600, 2*height/3-x/3, 200-x/8,200-x/8);
  // piso//
   fill (249,241,153);
  rect(0,height/2, width, height);
   
  x = x+1*direccion;
  if((x>width)||(x<0)) {
    direccion = direccion * -1;
   
  }
  
 
   
  


 
  //pared//
  
  
  fill(175,204,77);
  beginShape ();
  vertex(413,0);
  vertex (413,354);
  vertex (0,708);
  vertex ( 0,0);
  endShape();
  
   //ventana//
  stroke(75,65,81);
  strokeWeight(25);
   line(413,0,413,354);
   
   stroke(75,65,81);
  strokeWeight(25);
   line(413,354,1062,354);
   
      stroke(75,65,81);
  strokeWeight(25);
   line(1052,354,1052,0);
 
stroke(75,65,81);
  strokeWeight(25);
   line(1062,10,413,10);
   
   //marcoventana//
   
    stroke(75,65,81);
  strokeWeight(20);
   line(737,0,737,354);
 
 stroke(75,65,81);
  strokeWeight(20);
   line(1062,183,413,183);
   
   
   
   //gato//
   
   fill(75,65,81);
   noStroke();
   beginShape ();
  vertex(531,413);
  vertex (501,472);
  vertex (501,678);
  vertex ( 826,678);
  vertex ( 826,531);
  vertex ( 678,531);
  vertex ( 678,472);
  vertex ( 649,413);
  vertex ( 619,472);
  vertex ( 560,472);
  endShape();
  
  //cola//
   fill(75,65,81);
   noStroke();
   beginShape ();
  vertex(826,640);
  vertex (855,640);
  vertex (885,610);
  vertex ( 914,581);
  vertex ( 944,551);
  vertex ( 973,560);
  vertex ( 944,590);
  vertex ( 914,619);
  vertex ( 885,649);
  vertex ( 855,678);
  vertex (826,678);
  endShape();
  
   //pata//
   
fill(75,65,81);
   noStroke();
   quad(531,649,531,678,472,678,472,649);
   
   
     
  
  
     //ojitos IZQUIERDA//
   stroke(255);
  strokeWeight(5);
 curve (501, 472, 531, 516, 560, 516,590, 472);
  
  
     //ojitos DERECHA//
   stroke(255);
  strokeWeight(5);
  curve (590, 472,619 , 516, 649, 516, 678, 472);
  
  //NARIZ//
  
  fill(255);
  ellipse(590,560,20,5);
  
  //cuadro//
  stroke(75,65,81);
  strokeWeight(25);
fill(219,174,0);
  quad(236,19,59,118,59,442,236,310);
  
  //rellenocuadro//
  

 strokeWeight(15); 
 
  stroke(249,241,153);
 line(177,286,118,325);
 
  stroke(175,204,77);
 line(177,227,118,265);
 
  stroke(21,178,78);
 line(177,168,118,206);
 
 stroke(0,166,168);
 line(177,109,118,147);
 
  
  
 /* saveCanvas ("miflip"+ frameCount, 'jpg');
  if (frameCount < 200){
    if (frameCount % 2 ==0){
    }
    }*/
  
   
   
}
