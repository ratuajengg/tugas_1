let j ;
let z;

function setup(){
    createCanvas(600,400);
    
    x = 0;
    x1= 100;
    j = 100;
    y = 0;
    z = 0
    
}   

function draw(){
   
   
    var x = 450 + 40 * Math.sin(PI/100*j)
    j+=1
    background(3,172,240);
    triangle(450,130,x,180,450,190);
    fill(210,105,30);
    
    line(300,600,300,0); 
    line(150,130,150,220);
    line(450,130,450,220);
    line(150,130,100,220);
    line(150,130,200,220);
    line(450,130,400,220);
    line(450,130,500,220);
    triangle(150,130,190,180,150,190);
    
    beginShape();
    vertex(350, 220);
    vertex(400, 260);
    vertex(500, 260);
    vertex(550, 220);
    endShape(CLOSE);


    strokeWeight(2);
    beginShape();
    vertex(50, 220);
    vertex(100, 260);
    vertex(200, 260);
    vertex(250, 220);
    endShape(CLOSE);

    
} 