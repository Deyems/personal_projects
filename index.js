console.log('Hello World');
 
/*const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
};
*/

// Circle has 3 members
//Draw is a method
//Not Function are Properties

//circle.draw();

// FACTORY FUNCTION

/*
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
const circle = createCircle(1);

// CONSTRUCTOR FUNCTION
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const another = new   Circle(5);
*/


//Circle.call({},1);
//Circle.apply({},[1,2,3]);

//let x = 10;
//let y = x;

//x = 20;

/*let x = {value: 10};
let y = x;

x.value = 20;
*/

/*
let number = 10;
function increase(number){
    number++;
}
increase(number);
console.log(number);


let obj = {value: 10};
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj);
*/



// CONSTRUCTOR FUNCTION
/*function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(15);
circle.location = {x:1};

// LOOP THROUGH AN ARRAY
for(let key in circle){
    if(typeof circle[key] !== 'function'){
    console.log(key,circle[key] );
    }
}

const keys = Object.keys(circle);
console.log(keys);

if('radius' in circle){
    console.log('Circle has a radius');
}*/


function Circle(){
    this.radius = radius;
    let defaultLocation = {x:0, y:0};
    this.getDefaultLocation = function(){
        return defaultLocation;
    };
    this.draw = function(){
        console.log('draw');
    };
    Object.defineProperty(this,'defaultLocation',get, function(){
        return defaultLocation;    
    },
    set, function(value){}
    )
}