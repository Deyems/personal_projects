//let context = canvas.getContext('2d',{});
//context.fillStyle = 'green';
//context.fillRect(10,10,100,100);

function draw() {
    let canvas = document.querySelector('#canvas');
    canvas.style.border = "2px solid lavender";
    if(canvas.getContext) {
        context = canvas.getContext('2d');
    }
    
//    context.fillStyle = 'rgb(200,10,0)';
//    context.fillRect(25,25,60,60);
//    
//    context.fillStyle = 'rgba(0,0,200,0.5)';
//    context.fillRect(45,45,60,60);
    
//    
//    context.fillRect(120,120,80,80);
//    context.clearRect(130,130,60,60);
//    context.strokeRect(150,150,20,30);

//    context.beginPath();
//    context.moveTo(75,50);
//    context.lineTo(100,75);
//    context.lineTo(100,25);
//    context.fill();
//    

//    DRAWING A SMILEY
//    context.beginPath();
//    context.arc(130,130,50,0,Math.PI * 2, true);
//    context.moveTo(165,130);
//    context.arc(130,130,35,0,Math.PI,false); //Draw Clockwise
//    context.moveTo(120,100);
//    context.arc(115,100,5,0,Math.PI*2,true);
//    context.moveTo(155,100);
//    context.arc(150,100,5,0,Math.PI * 2,true);
//    context.stroke();

//    DRAWING A TRIANGULAR SHAPE
//    context.beginPath();
//    context.moveTo(300,200);
//    context.lineTo(250,200);
//    context.lineTo(250,250);
//    context.fill();
//    context.stroke();
//    
//    context.beginPath();
//    context.moveTo(350,220);
//    context.lineTo(350,280);
//    context.lineTo(300,280);
//    context.closePath();
//    context.stroke();
    
//    USING A LOOP TO DRAW SHAPES
//    for(let row = 0; row < 4; row++){
//        for(let col = 0; col < 3; col++){
//            context.beginPath();
//            let x = 25 + col * 50;
//            let y = 25 + row * 50;
//            let rad = 20;
//            let startAngle = 0;
//            let endAngle = Math.PI + (Math.PI * col)/2;
//            let anticlock = row % 2 !== 0;
//            
//            context.arc(x,y,rad,startAngle,endAngle, anticlock);
//            if(row>1){
//                context.fill();
//            }else {
//                context.stroke();
//            }
//        }
//    }
      
//    DRAW A QUADRATIC CURVE AS A CALLOUT
//    context.beginPath();
//    context.moveTo(75,25);
//    context.quadraticCurveTo(25,25,25,62.5);
//    context.quadraticCurveTo(25,100,50,100);
//    context.quadraticCurveTo(50,120,30,125);
//    context.quadraticCurveTo(60,120,65,100);
//    context.quadraticCurveTo(125,100,125,62.5);
//    context.quadraticCurveTo(125,25,75,25);
//    context.stroke();
    
//    context.beginPath();
//    context.moveTo(250,25);
//    context.bezierCurveTo(250,20,220,15,300,45);
    
//    context.beginPath();
//    context.moveTo(75, 40);
//    context.bezierCurveTo(75, 37, 70, 25, 50, 25);
//    context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
//    context.bezierCurveTo(20, 80, 40, 102, 75, 120);
//    context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
//    context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
//    context.bezierCurveTo(85, 25, 75, 37, 75, 40);
//    context.stroke();
    
    
//    context.beginPath();
    roundedRect(context,12,12,150,-150,15);
    roundedRect(context, 19, 19, 150, 150, 9);
    roundedRect(context, 53, 53, 49, 33, 10);
    roundedRect(context, 53, 119, 49, 16, 6);
    roundedRect(context, 135, 53, 49, 33, 10);
    roundedRect(context, 135, 119, 25, 49, 10);
    
    function roundedRect(context,x,y,width,height,radius) {
        context.beginPath();
        context.moveTo(x,y+radius);
        context.lineTo(x, y + height - radius);
        context.arcTo(x, y + height, x + radius, y+height, radius);
        context.lineTo(x+width-radius, y+height);
        context.arcTo(x+width, y+height, x+width, y+height-radius, radius);
        context.lineTo(x+width, y+radius);
        context.arcTo(x+width, y, x+width-radius,y,radius);
        context.lineTo(x+radius,y);
        context.arcTo(x,y,x,y+radius,radius);
        context.stroke();
    }
}

//document.querySelector('body').addEventListener('onload',draw);

console.log(document.querySelector('body'));

