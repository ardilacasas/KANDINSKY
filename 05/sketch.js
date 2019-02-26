
//borrar//
var posXrec1 = 20;

var posYrec1 = 20;

var tamRect1 = 30;


//colores//

//blanco//

var posXrec2 = 60;

var posYrec2 = 20;

var tamRect2 = 30;

//naranja//

var posXrec3 = 100;

var posYrec3 = 20;

var tamRect3 = 30;

//marron//

var posXrec4 = 140;

var posYrec4 = 20;

var tamRect4 = 30;

//negro//

var posXrec5 = 180;

var posYrec5 = 20;

var tamRect5 = 30;

//aguamarina//

var posXrec6 = 220;

var posYrec6 = 20;

var tamRect6 = 30;

//magenta//

var posXrec7 = 260;

var posYrec7 = 20;

var tamRect7 = 30;

//gris//

var posXrec8 = 300;

var posYrec8 = 20;

var tamRect8 = 30;

//verde//

var posXrec9 = 340;

var posYrec9 = 20;

var tamRect9= 30;

//amarillo//

var posXrec10 = 380;

var posYrec10= 20;

var tamRect10= 30;

//morado//

var posXrec11 = 420;

var posYrec11= 20;

var tamRect11= 30;



var colSel = 0;
var hersel= 0;

//herramientas//

//cabeza2//

var hposXrec2 = 60;

var hposYrec2 = 60;

var htamRect2 = 30;

//cabeza3//

var hposXrec3 = 60;

var hposYrec3 = 100;

var htamRect3 = 30;

//cuerpo1//

var hposXrec4 = 60;

var hposYrec4 = 140;

var htamRect4 = 30;

//cuerpo2//

var hposXrec5 = 60;

var hposYrec5 = 180;

var htamRect5 = 30;

//ojogrande//

var hposXrec6 = 60;

var hposYrec6 = 220;

var htamRect6 = 30;

//pupila//

var hposXrec7 = 60;

var hposYrec7 = 260;

var htamRect7 = 30;

//nariz//

var hposXrec8 = 60;

var hposYrec8 = 300;

var htamRect8 = 30;

//pincel1//

var hposXrec9 = 60;

var hposYrec9 = 340;

var htamRect9 = 30;

//pincel2//

var hposXrec10 = 60;

var hposYrec10= 380;

var htamRect10 = 30;

//moño//

var hposXrec11 = 60;

var hposYrec11= 420;

var htamRect11 = 30;



function setup() {

  createCanvas(windowWidth, windowHeight);

  background(91, 215, 229);

}


function draw() {                                 

  //background (91,215,229);//

  

  //borrar//

  strokeWeight(5);
  fill(150);
  rect (posXrec1, posYrec1, tamRect1, tamRect1);


   //blanco//

  noStroke();

  fill(255);

  rect (posXrec2, posYrec2, tamRect2, tamRect2);


  //naranja//

  noStroke();

  fill(214,150,37);

  rect (posXrec3, posYrec3, tamRect3, tamRect3);
  
  
  //marron//

  noStroke();

  fill(107,80,44);

  rect (posXrec4, posYrec4, tamRect4, tamRect4);


  //Negro//

  noStroke();

  fill(0,0,0);

  rect (posXrec5, posYrec5, tamRect5, tamRect5);
  
  
  //aguamarina//

  noStroke();

  fill(62,167,204);

  rect (posXrec6, posYrec6, tamRect6, tamRect6);


  //magenta//

  noStroke();

  fill(204, 62, 150);

  rect (posXrec7, posYrec7, tamRect7, tamRect7);
  
  
  //gris//

  noStroke();

  fill(150,137,137);

  rect (posXrec8, posYrec8, tamRect8, tamRect8);


  //verde//

  noStroke();

  fill(114, 206, 101);

  rect (posXrec9, posYrec9, tamRect9, tamRect9);
  
  
  //amarillo//

  noStroke();

  fill(219,216,93);

  rect (posXrec10, posYrec10, tamRect10, tamRect10);


  //morado//

  noStroke();

  fill(172,101,196);

  rect (posXrec11, posYrec11, tamRect11, tamRect11);
  
   //botonesdeherramientas//
  
  //cabeza2//

  noStroke();

  fill(0);

  rect (hposXrec2, hposYrec2, htamRect2, htamRect2);
  
   //cabeza3//

  noStroke();

  fill(0);

  rect (hposXrec3, hposYrec3, htamRect3, htamRect3);
  
  //cuerpo1//

  noStroke();

  fill(0);

  rect (hposXrec4, hposYrec4, htamRect4, htamRect4);

 //cuerpo2//

  noStroke();

  fill(0);

  rect (hposXrec5, hposYrec5, htamRect5, htamRect5);
  
   //ojogrande//

  noStroke();

  fill(0);

  rect (hposXrec6, hposYrec6, htamRect6, htamRect6);
  
   //pupila//

  noStroke();

  fill(0);

  rect (hposXrec7, hposYrec7, htamRect7, htamRect7);
  
   //nariz//

  noStroke();

  fill(0);

  rect (hposXrec8, hposYrec8, htamRect8, htamRect8);
  
  //pincel1//

  noStroke();

  fill(0);

  rect (hposXrec9, hposYrec9, htamRect9, htamRect9);
  
   //pincel2//

  noStroke();

  fill(0);

  rect (hposXrec10, hposYrec10, htamRect10, htamRect10);
  
   //moño//

  noStroke();

  fill(0);

  rect (hposXrec11, hposYrec11, htamRect11, htamRect11);


    // Seleccion Color
  if (colSel == 0) {
    // Blanco
    fill(255);
    noStroke();
    
  } else if (colSel == 1) { 
    // naranja
    fill(214,150,37);
    noStroke();
    
   } else if (colSel == 2) { 
    // Marron
    fill(107,80,44);
    noStroke();
    
     } else if (colSel == 3) { 
    // negro
    fill(0,0,0);
    noStroke();
    
     } else if (colSel == 4) { 
    // aguamarina
    fill(62,167,204);
    noStroke();
    
    } else if (colSel == 5) { 
    // magenta
    fill(204,62,150);
    noStroke();
    
    } else if (colSel == 6) { 
    // gris
    fill(150,137,137);
    noStroke();
    
    } else if (colSel == 7) { 
    // verde
    fill(114,206,101);
    noStroke();
    
        } else if (colSel == 8) { 
    // amarillo
    fill(219,216,93);
    noStroke();
    
        } else if (colSel == 9) { 
    // morado
    fill(172,101,196);
    noStroke();
  }

//herramientaseleccion//

 /* if (herSel == 0) {
    
    ellipse (mouseX, mouseY, 50, 50);

    
  } else if (herSel == 1) { 
    ellipse (mouseX/2,mouseY/2,100,100);
  }*/




  if (mouseIsPressed == true) {


    /*stroke(229,208,91);

     strokeWeight(10);                

     triangle (mouseX,mouseY, 50,50,50,50);

     fill (229,91,156);

     */

    ellipse (mouseX, mouseY, 50, 50);

    /*ellipse (mouseX/2,mouseY/2,100,100);

     ellipse (mouseX/3,mouseY/3,150,150);

     ellipse (mouseX/4,mouseY/4,200,200);*/

}


    // borrar//

    

    if (mouseX > posXrec1

      && mouseX < posXrec1 + tamRect1

      && mouseY > posYrec1

      && mouseY < posYrec1+ tamRect1) {

      background (91, 215, 229);

    }
    
    //blanco//
       
    if (mouseX > posXrec2 
      && mouseX < posXrec2 + tamRect2
      && mouseY > posYrec2
      && mouseY < posYrec2 + tamRect2) {
      //background(100);
      colSel = 0;
    }
    
     //naranja
      if (mouseX > posXrec3 
      && mouseX < posXrec3 + tamRect3
      && mouseY > posYrec3
      && mouseY < posYrec3 + tamRect3) {
      //background(100);
      colSel = 1;
    }
    
    //marron
      if (mouseX > posXrec4 
      && mouseX < posXrec4 + tamRect4
      && mouseY > posYrec4
      && mouseY < posYrec4 + tamRect4) {
      //background(100);
      colSel = 2;
    }
//negro
      if (mouseX > posXrec5
      && mouseX < posXrec5 + tamRect5
      && mouseY > posYrec5
      && mouseY < posYrec5 + tamRect5) {
      //background(100);
      colSel = 3;
    }
//aguamarina
      if (mouseX > posXrec6 
      && mouseX < posXrec6 + tamRect6
      && mouseY > posYrec6
      && mouseY < posYrec6 + tamRect6) {
      //background(100);
      colSel = 4;
    }
    
   //magenta
      if (mouseX > posXrec7
      && mouseX < posXrec7 + tamRect7
      && mouseY > posYrec7
      && mouseY < posYrec7 + tamRect7) {
      //background(100);
      colSel = 5;
    }
    //gris
      if (mouseX > posXrec8 
      && mouseX < posXrec8 + tamRect8
      && mouseY > posYrec8
      && mouseY < posYrec8 + tamRect8) {
      //background(100);
      colSel = 6;
    }
//verde
      if (mouseX > posXrec9
      && mouseX < posXrec9+ tamRect9
      && mouseY > posYrec9
      && mouseY < posYrec9 + tamRect9) {
      //background(100);
      colSel = 7;
    }

//amarillo
      if (mouseX > posXrec10 
      && mouseX < posXrec10 + tamRect10
      && mouseY > posYrec10
      && mouseY < posYrec10 + tamRect10) {
      //background(100);
      colSel = 8;
    }
 //morado
      if (mouseX > posXrec11
      && mouseX < posXrec11+ tamRect11
      && mouseY > posYrec11
      && mouseY < posYrec11 + tamRect11) {
      //background(100);
      colSel = 9;
    }
    
     /* if (mouseX > posXrec2
      && mouseX < posXrec2+ tamRect2
      && mouseY > posYrec2
      && mouseY < posYrec2 + tamRect2) {
      //background(100);
      herSel = 1;
    }*/




      }
           
