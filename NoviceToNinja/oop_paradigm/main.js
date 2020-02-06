//'use strict';
//const Dice = function(sides=6) {
//    this.sides = sides;
//    this.roll = function() {
//        return Math.floor(this.sides*Math.random()) + 1;
//    }
//}
//const redDice = new Dice();
//console.log(redDice);

// Calling funciton constructor works
// WHEN strict type declaration is NOT done
//const huntDice = Dice();
//console.log(huntDice,'No new keyword');

//console.log(new Array(null,5));

//class Dice {
//    constructor(sides = 6) {
//        this.sides = sides;
//    }
//    
//    roll() {
//        return Math.floor(this.sides * Math.random() + 1);
//    }
//    static description() {
//        return 'A way of Choosing Random Numbers';
//    }
//}
//const blueDice = new Dice();
//console.log(blueDice);
//console.log(blueDice.roll());

//NOT USING new Keyword doesn't 
//work when class constructor is used

//console.log(blueDice.constructor);
//const literalObject = {};
//console.log(literalObject.constructor);

//const blueBranchDice = new blueDice.constructor(10);
//console.log(blueBranchDice);
//console.log(blueBranchDice instanceof Dice);
//console.log(Dice.description());

//Cannot Access static methods of Original
//classes
//console.log(blueDice.description());

//class Turtle {
//    constructor(name) {
//        this.name = name;
//        this.weapon = 'hands';
//    }
//    sayHi() {
//        return `Hi dude, my name is ${this.name}`;
//    }
//    attack() {
//        return `Feel the Power of my ${this.weapon}`;
//    }
//}

//NEW INSTANCE OF TURTLE CLASS
//const leo = new Turtle('Lambard');

//console.log(Turtle.prototype);
//ADDING PROPERTIES AND METHODS TO AN OBJECT
// WE USE THE CLASS.PROTOTYPE.(PROPERTY/METHOD NAME)
// TO UPDATE THE CLASS

//Turtle.prototype.palm = 'Five Fingers';
//Turtle.prototype.newMthd = function() {
//    return `I have added a method to access ${this.palm}`;
//}
/*
//YOU CANNOT USE AN INSTANTIATED OBJECT
//TO ADD PROTOTYPE PROPERTIES AND METHODS
//leo.prototype.palmwine = 'Five Fingers';
*/

//console.log(leo.newMthd());
//console.log(leo.attack());
//console.log(leo.palm);
//console.log(leo.weapon);

//RE-ACCESS THE TURTLE CLASS AGAIN
//console.log(Turtle.prototype);

/*
//HOW TO FIND PROTOTYPE OF AN OBJECT
//console.log(leo.constructor.prototype);

//ANOTHER WAY TO FIND PROTOTYPE OF OBJECT
//console.log(Object.getPrototypeOf(leo));

//Using The DUNDER proto
console.log(leo.__proto__);
*/

/*
TO TEST WHETHER AN INSTANCE OF CLASS
HAS A PROPERTY
e.g
//leo.hasOwnProperty('name); // returns true
//leo.hasOwnProperty('palm'); // returns false
*/
//leo.firstname = 'Sola';
//Creating Another Instance of Class: Turtle
//const don = new Turtle('DonaChris');

//console.log(don.palm,'A shared Property in the Main Class');
//console.log(don.sayHi());
//console.log(leo.newMthd(),'Prototype is Live!');


//YOU CAN OVERWRITE PROPERTIES AND METHODS 
//IN CLASSES
//Turtle.prototype.palm = 'Feet';
//console.log(don.constructor.prototype);
//console.log(leo.newMthd(),'After Modifying prototype palm & Prototype is Live!');

//Turtle.prototype.eat = function() {
//    return `Mmm, this ${this.palm} tastes great`;
//}
//console.log(Turtle.prototype);


//CREATING ANOTHER INSTANCE OF TURTLE
//const mike = new Turtle('Michelangelo');
//console.log(mike.eat());
//Overriding your class;
//mike.weapon = 'NunacjOOp';

//console.log(mike.attack());


//CREATING AN AUGMENTED TURTLE CLASS
//class Turtle {
//    constructor(name,color) {
//        this.name = name;
//        let _color = color;
////        debugger;
//        this.setColor = color => {
//            if (typeof color === 'string'){
//                return _color = color;    
//                } else { throw new Error('Color must be a string');}
//        }
//        
//        this.getColor = () => _color;
//    } // END OF CONSTRUCTOR
//    
//    sayHi() {
//        return `Hi dude, my name is ${this.name}`;
//    }
//    
//    attack() {
//        return `Feel the Power of my ${this.weapon}`;
//    }
//    
//} /*end of TURTLE CLASS AUGMENTED*/
//
////ADDING A PROTOTYPE TO THE TURTLE CLASS
//Turtle.prototype.eat = function() { 
//    return `Mmm, this ${this.name} tastes great!`;
//}
//
//let raph = new Turtle('Raphael', 'Red');
//console.log(raph);
//console.log(raph.getColor());

//A STRING MUST BE ENTERED FOR THE COLOR
//raph.setColor('purple');
//console.log(raph.getColor());
//console.log(Object.getPrototypeOf(Object.getPrototypeOf(raph)));
//console.log(Turtle.prototype.propertyIsEnumerable('propertyIsEnumerable'));

//START AFRESH ON THE TURTLE CLASS
//class Turtle {
//    constructor(name){
//        this.name = name;
//    }
//    
//    sayHi() {
//        return `Hi dude, My name is ${this.name}`;
//    }
//    
//    swim() {
//        return `${this.name} paddles in the water`;
//    }
//    
//} // end of class;
//
//let raph = new Turtle('John Doe');
//
//class NinjaTurtle extends Turtle {
//    constructor(name){
//        super(name);
//        this.weapon = 'hands';
//    }
//    attack() {
//        return `Feel the Power of my ${this.weapon}!`;
//    }
//    
//    toString() {
//        return `toString has been Overridden to call ${this.name}`;
//    }
//    
//}
//
//let subra = new NinjaTurtle('Popcorn');
//console.log(subra);

//console.log([1,2,3].toString(),'Convert Array to String');
//console.log(2..toString(),'Change Number to String');
//console.table(2..toExponential(),'\n',2..toString());
//
//console.log(raph.toString(),'Calling toString on Class that didnt overide string method');
//console.log(subra.toString(),'Calling Class that Overrides toString method');
//console.log(subra.weapon);

//MONKEY PACTCHING
//ADDING METHODS TO BUILT-IN JS PROTOTYPES

//Number.prototype.isEven = function() {
//    return this%2 === 0;
//}
//Number.prototype.isOdd = function() {
//    return this%2 === 1;
//}

//console.log(42..isEven());
//console.log(76..isOdd());

//Array.prototype.first = function() {
//    return this[0];
//}
//Array.prototype.last = function() {
//    return this[this.length - 1];
//}

//const turtles = ['Leo','Dona','Mich','Raph'];
//console.log(turtles.last());

//Array.prototype.delete = function(i) {
//    return this.splice(i,1);
//}
//console.log(turtles.delete(2));
//console.log(turtles);

//USING THE DELETE OPERATOR
//console.log(delete turtles[2]);
//console.log(turtles);

//String.prototype.trim = String.prototype.trim || function() {
//    return this.replace(/^\s+|\s+$/,'');
//}
//console.log(' hello '.trim());


//TO AVOID THE PROBLEM OF PROTOTYPES
// WE NORMALLY EXTENDS CLASSES OF BASE CLASSES

//class myArray extends Array {
//    constructor(...args) {
//        super(...args);
//    }
//    delete(i) {
//        return this.splice(i,1);
//    }
//}
//const list = new myArray(1,2,3);
//console.log(list,'Before deleting');
//console.log(list.delete(1));
//console.log(list,'After Deleting');

//const me = {
//    value: 'Daz',
//    writable: true,
//    enumerable: true,
//    configurable: true
//}

//const me = {};
//me.age = 21;
//console.log(Object.getOwnPropertyDescriptor(me,'age'));
//console.log(Object.defineProperty(me,'eyeColor',{
//    value: 'blue',
//    writable: false,
//    enumerable: true
//}) );
//me.eyeColor = 'Purple';
//console.log(me.eyeColor);

//Object.defineProperty(me,'yearsToRetirement',{
//   get() {
//       if(this.age > this.retirementAge) {
//           return 0;
//       } else{
//           return this.retirementAge - this.age;
//       }
//   },
//    set(value) {
//        this.age = this.retirementAge - value;
//        return value;
//        }
//});

//const me = {};
//me.age = 21;
//me.retirementAge = 65;
//Object.defineProperty(me,'yrsleftToRet',{
//    get() {
////        debugger;
//        if(this.age > this.retirementAge){
//            return 0;
//        }else {
//            return this.retirementAge - this.age;
//        }
//    },
//    set(value){
////        debugger;
//        this.age = this.retirementAge - value;
//        return value;
//    }
//});

//console.log(me.yrsleftToRet,'To dete years_left_to_retire');
//me.yrsleftToRet = 10;
//console.log(me.age);


/*TRYING TO CREATE AN EQUIVALENT Me Object*/
//class Me {
//    constructor(age,retirementAge){
//        this.age = age;
//        this.retirementAge = retirementAge;
//    }
//    getAge() {
//        if(this.age > this.retirementAge){
//            return 0;
//        }else {
//            return this.retirementAge - this.age;
//        }
//    
//    }
//};

//class Dice {
//    constructor(sides=6){
//        Object.defineProperty(this,'sides',{
//           get() {
//               return `This dice has ${sides} sides`;
//           },
//            set(value) {
//                if(value > 0) {
//                    sides = value;
//                    return sides;
//                }else {
//                    throw new Error('The number of sides must be Positive');
//                }
//            }
//        });
//        
//        //Inside Constructor
//        this.roll = function() {
//            return Math.floor(sides * Math.random() + 1);
//        }
//    }
//}
//const yellowDice = new Dice;
//console.log(yellowDice.sides);
//yellowDice.sides  = 10;
//console.log(yellowDice.sides);
//yellowDice.sides = 0;
//console.log(yellowDice.sides);

//const Human = {
//    arms: 2,
//    legs: 2,
//    walk() {
//            console.log('Walking');
//           }
//}

//const lois = Object.create(Human);
//lois.job = 'Reporter';
//lois.name = 'Lois Lana';
//console.log(lois);

//const jimmy = Object.create(Human, {
//   name: {value: 'Jimmy Olsen', enumerable: true},
//   job: {value: 'Photographer', enumerable: true} 
//});
//console.log(jimmy.name);
//console.log(jimmy.job);

//const Superhuman = Object.create(Human);
//Superhuman.change = function() {
//    return `${this.realName} goes into a phonebox and comes out as ${this.name}!`;
//}
//Superhuman.name = 'Name: Biscuit Bone';
//Superhuman.realName = 'Real Name John Bryan';
//console.log(Superhuman.change(),'Before');
//
//const superMan = Object.create(Superhuman);
//superMan.name = 'Super Man';
//superMan.realName = 'Clark Kent';
//console.log(superMan.change(),'Inherited and Changed');

//A SIMILITUDE OF CONSTRUCTORS
//Superhuman.initial = function(name, realName){
//    this.name = name;
//    this.realName = realName;
//    this.initial = undefined;
//    return this;
//}

//const batman = Object.create(Superhuman);
//batman.initial('Batman','Bruce Wayne');
//console.log(batman.change());
//console.log(batman.change());
//const boyman = Object.create(Superhuman);
//boyman.initial('Boyman','Crane Bus');
//console.log(boyman.change());

//const a = {};
//const b = {name: 'properties', numbers: [1,2,3] };
//
//Object.assign(a,b);
//b.numbers.push(4);
//console.log(a.numbers);

//A FXN TO COPY PROPERTIES OF OBJECTS TO ANOTHER
function mixin(target,...objects){
    for(const object of objects){
        if(typeof object === 'object'){
            for(const key of Object.keys(object)){
//                debugger;
                if(typeof object[key] === 'object') {
                    target[key] = Array.isArray(object[key]) ? [] : {};
                    mixin(target[key],object[key]);
                } else {
                    Object.assign(target,object);
                }
                
            } //Looping through the KEY
        } //End of First if...else
    } //End of Looping Objects Array
    return target;
}

const Human = {
    arms: 2,
    legs: 2,
    walk() {
            console.log('Walking');
           }
}

const Superhuman = Object.create(Human);
Superhuman.change = function() {
    return `${this.realName} goes into a phonebox and comes out as ${this.name}!`;
}

function copy(target){
    const object = Object.create(Object.getPrototypeOf(target));
    mixin(object,target);
    return object;
}

function createSuperhuman(...mixins) {
    const object = copy(Superhuman);
    return mixin(object,...mixins);
}

//const a = {};
//const b = {foo: 'bar'};
//const c = {numbers: [1,2,3], cards: {name:'lola', book: [3,5,6]}};
//console.log(mixin(a,b,c));
//mixin(wonderWoman,{name: 'Wonder Woman', realName: 'Diana Prince'});
//console.log(wonderWoman.change());
//const bizarro = copy(Human);
//bizarro.name = 'Bizaroo';
//bizarro.realName = 'Subject B-0';
//console.log(bizarro);
//console.log(hulk);

//MIXIN "FUNCTIONS"- TO BE ADDED TO Other OBJECTS
const flight = {
    fly() {
        console.log(`Up, up and away! '${this.name}' soars through the Air`)
        return this;
    }
}

const superSpeed = {
    move() {
        console.log(`${this.name} can move faster than a speeding bullet`);
        return this;
    }
}

const xRayVision = {
    xray() {
        console.log(`'${this.name}' can see right through You!`);
        return this;
    }
}

const wonderWoman = Object.create(Superhuman);
const superman = Object.create(Superhuman);
superman.name = 'Super Man';
superman.realName = 'Clark Kent';

//Object.defineProperty(superman,'name', {value: 'Diana Rose'});
wonderWoman.name = 'Dianty Rose';
wonderWoman.realName = 'John Grieve';
//const hulk = createSuperhuman({name: 'Hulk', realName: 'Bruce Banter'},{owner: 'Arary', numbers: [2,3,5]});

//ADDING PROPERTIES TO OBJECTS USING 
//MIXIN FUNCTION
mixin(superman,flight,superSpeed,xRayVision);
mixin(wonderWoman,flight,xRayVision);

const flash = createSuperhuman( {name: 'Flash', realName: 'Barry Allen'}, superSpeed );
//console.log(flash.move());
//console.log('Space in btw\n');
//console.log(superman.fly().move().xray());

//Creating Objects of Superhuman -- Batman, 
// aquaman, superman, wonderWoman

const batman = Object.create(Superhuman);
batman.name = 'Bat Man';
batman.realName = 'Bat Rattle Kent';

const aquaman = Object.create(Superhuman);
aquaman.name = 'Aqua Man';
aquaman.realName = 'Aquarius Lamp';


superman.friends = [batman, wonderWoman, aquaman];

//WHEN WE REFERENCE A FXN INSIDE ANOTHER FXN
//Using this and it is not referencing that Object
//superman.findFriends = function() {
//    this.friends.forEach(function(friend) {
////        debugger;
//        console.log(`${friend.name} is friends with ${this.name}`)
//    });
//}

//Using that=this; to access the Object
//superman.findFriends = function() {
//    const that = this;
//    this.friends.forEach(function(friend) {
//        console.log(`${friend.name} is friends with ${that.name}`);
//    } );
//}

//superman.findFriends = function() {
//    for (const friend of this.friends) {
//        console.log(`${friend.name} is friends with ${this.name}`);
//    }
//}

//Using Arrow Functions
superman.findFriends = function() {
    this.friends.forEach((friend)=> 
    {
        console.log(`${friend.name} is friends with ${this.name}`);
    });
}




//console.log(superman.findFriends());

const fly = superman.fly;

console.log(fly);
console.log(fly.call(batman));











