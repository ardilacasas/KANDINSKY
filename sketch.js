function setup() {
 createCanvas(980, 980);
}

function draw() {
 background(234,227,214);

// figura 1//

fill (217,181,36,290);
noStroke ();
triangle (40,40,360,240,240,360);

//figura 2//

fill (79,79,52,240);
noStroke();
quad(500,40,860,440,500,840,120,400);

//figura 3//

fill(152,24,42,200);
noStroke();
triangle(360,280,40,280,40,560);

//figura 4//

fill(219,120,22,200);
noStroke();
quad(620,440,820,600,500,980,460,600);

//figura 5//

fill(81,139,177,220);
noStroke();
quad(280,480,440,560,240,680,200,560);

//figura 6//

fill(211,62,42);
noStroke();
beginShape();
vertex(840,160);
vertex(800,200);
vertex(760,160);
vertex(640,160);
vertex(760,80);
endShape();

//figura 7//

fill(211,62,42);
noStroke();
beginShape();
vertex (880,200);
vertex (840,240);
vertex (960,320);
endShape();

//figura 8//

fill(17,22,23);
noStroke();
beginShape();
vertex (960,40);
vertex (880,200);
vertex (840,160);
endShape();

//figura 9//

fill(17,22,23);
noStroke();
quad (840,240,800,200,760,240,800,320);

//figura 10//

fill(17,22,23);
noStroke();
beginShape();
vertex (960,920);
vertex(560,480);
vertex (320,480);
vertex (240,320);
vertex (240,440);
vertex (160,360);
vertex (240,240);
vertex (400,400);
vertex (480,360);
vertex (640,440);
endShape();
//figura 14//

strokeWeight(8);
stroke (120,94,73);
noFill();
bezier(120,880,120,920,80,960,40,960);

//figura 15//

strokeWeight(8);
stroke (120,94,73);
noFill();
bezier (200,800,200,840,160,880,120,880);


//figura 16//

strokeWeight(8);
stroke (120,94,73);
noFill();
bezier(280,720,280,760,240,800,200,800);

//figura 11//

fill(17,22,23);
noStroke();
triangle(760,280,40,960,0,920);

// figura 12//

strokeWeight(10);
stroke (17,22,23);
noFill();
bezier(280,720,320,880, 240,960, 80,920);

//figura 13//

strokeWeight(10);
stroke (17,22,23);
noFill();
bezier(560,480,560,680,440,800,240,760);

//figura 17//

strokeWeight(12);
stroke (17,22,23);
noFill();
line(800,960,680,840);

//figura 18//

strokeWeight(12);
stroke (17,22,23);
noFill();
line (840,920,720,800);

//figura 19//
strokeWeight(12);
stroke (17,22,23);
noFill();
line(880,880,760,760);

//figura 20//
strokeWeight(20);
stroke (17,22,23);
fill(243,237,230);
ellipse(640,280,160,160);

//figura 21//
noStroke();
fill(243,237,230);
triangle(600,280,560,360,520,320);

//detalle 1//
noStroke();
fill (223,198,25);
triangle(640,600,600,520,600,600)

//detalle 2//
noStroke();
fill (223,198,25);
triangle (640,640,600,640,600,720);

//detalle 3//
noStroke ();
fill (243,237,230);
ellipse(720,640,20,20);

//detalle 4//

noStroke ();
fill (243,237,230);
ellipse (520,880,20,20);

//detalle 5//
noStroke();
fill (223,198,25);
triangle (560,840,520,840,520,760);

//detalle 6//

noStroke ();
fill (243,237,230);
ellipse(520,640,20,20);

//curva1 //
strokeWeight(5);
stroke (17,22,23);
noFill();
beginShape();
curveVertex(160,120);
curveVertex(200,120);
curveVertex(240,80);
curveVertex(280,40);
curveVertex(320,40);
curveVertex(320,80);
curveVertex(360,80);
curveVertex(400,40);
endShape();

//curva 2//
strokeWeight(5);
stroke (17,22,23);
noFill();
beginShape();
curveVertex(160,160);
curveVertex(200,160);
curveVertex(240,120);
curveVertex(280,80);
curveVertex(320,80);
curveVertex(320,120);
curveVertex(360,120);
curveVertex(400,80);
endShape();

//curva 3//
strokeWeight(5);
stroke (17,22,23);
noFill();
beginShape();
curveVertex(160,200);
curveVertex(200,200);
curveVertex(240,160);
curveVertex(280,120);
curveVertex(320,120);
curveVertex(320,160);
curveVertex(360,160);
curveVertex(400,120);
endShape();

//detalle 7//
// 1d7//
noStroke();
fill(176);
quad(760,320,760,360,720,360,720,320);

//2d7//
noStroke();
fill(255);
quad(800,320,800,360,760,360,760,320);

//3d7//
noStroke();
fill(84);
quad(840,320,840,360,800,360,800,320);

//4d7//
noStroke();
fill(255);
quad(880,320,880,360,840,360,840,320);

//5d7//
noStroke();
fill(255);
quad(760,360,760,400,720,400,720,360);

//6d7//
noStroke();
fill(0);
quad(800,360,800,400,760,400,760,360);

//7d7//
noStroke();
fill(255);
quad(840,360,840,400,800,400,800,360);

//8d7//
noStroke();
fill(99);
quad(880,360,880,400,840,400,840,360);

//9d7//
noStroke();
fill(204);
quad(760,400,760,440,720,440,720,400);

//10d7//
noStroke();
fill(255);
quad(800,400,800,440,760,440,760,400);

//11d7//
noStroke();
fill(111);
quad(840,400,840,440,800,440,800,400);

//12d7//
noStroke();
fill(255);
quad(880,400,880,440,840,440,840,400);

//13d7//
noStroke();
fill(255);
quad(760,440,760,480,720,480,720,440);

//14d7//
noStroke();
fill(0);
quad(800,440,800,480,760,480,760,440);

//15d7//
noStroke();
fill(255);
quad(840,440,840,480,800,480,800,440);

//16d7//
noStroke();
fill(58);
quad(880,440,880,480,840,480,840,440);






 }