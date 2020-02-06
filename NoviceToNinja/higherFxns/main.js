    
'use strict';
// USE of call method to provide
//the this.value for a function

//    function sayHello() {
//        return `Hello, my name is ${this.name}`;
//    }
//    const clark = {name: 'Clark'};
//    const bruce = {name: 'Bruce'};
//    console.log(sayHello.call(clark));

    //WHAT if we pass Parameters to the fxn

//    function sayHi(greeting='Hello') {
//        return `${greeting}, My name is ${this.name} `;
//    }
//    console.log(sayHi.call(bruce,'How do you do?'));

    //WHAT IF WE Dont have a reference to this keyword
    //function square(x) {
    //    return x*x;
    //}
    //square.desc ='Squares a number given';
    //console.log(square.desc);

//    function square(x) {
//        'use strict';
//        square.cake = square.cake || {};
//        if(!square.cake[x]) {
//            square.cake[x] = x*x;
//        }
//
//        return square.cake[x];
//    }
    //console.log(square.call(null,5));
    //console.log(square.apply(null,[6]));
    //console.log(square([9]));
    //console.log(square(8.8));

    //console.log(square.cake);

    /*TRYING TO UNDERSTAND PASSING 
    ARRAYS AS ARGUMENTS TO FUNCTIONS
    */
    //function meanCal(x,y,z){
    //    let total = x + y + z;
    ////    debugger;
    //    let avg = total/meanCal.length;
    ////    debugger;
    //    return avg;
    //}
    //
    //console.log(meanCal([4]));

    /*IIFE*/

//    (function () {
//        const temp = 'World';
//        console.log(`Hello ${temp}`);
//    })();


    //SETUP INITIALIZIATION CODE
//    {
//        const name = 'Peter Parker';
//        const days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//        const date = new Date(), today = days[date.getDay()];
//        console.log(`Welcome back ${name}. \n Today is ${today}`);
//    }
//
//    {
//        const name = 'Block A';
//        console.log(`Helloe from ${name}`);
//    }

    //FUNCTIONS THAT DEFINE AND REWRITE THEMSELVES
//    function party() {
//        console.log('Wow this is amazing!');
//        party = function() {
//            console.log('Been there, got The T-shirt');
//        }
//    }
//        const beachParty = party;
//    party();
//    party();
//    party();
//    beachParty();
//    party();
//    beachParty();

//    function ride() {
//        if(window.unicorn) {
//            return 'Unicorn is working';
//        }else {
//            return 'Window Unicorn is not yet Implemented';
//        }
//    }
//    console.log(ride());

//    RECURSIVE FUNCTIONS
//function factorial(n) {
////    debugger;
//    if (n === 0) {
//        return 1;
//    } else {
//        return n * factorial(n - 1);
////        debugger;
//    }
//}
//window.console.log(factorial(5));

//function collatz(n, sequence= [n] ) {
//    debugger;
//    if (n === 1) {
//        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
//    }
//    if (n%2 === 0) {
//        n = n/2;
//    } else {
//        n = 3*n + 1;
//    }
//    debugger;
//    return collatz (n, [...sequence,n]);
//}
//window.console.log(collatz(18));


//function wait(message, callback, seconds) {
//    setTimeout(callback, seconds * 1000);
//    window.console.log(message);
//}
//
//function selfDestruct() {
//    window.console.log('Boom!');
//}
//wait('This tape will disappear in five seconds...', selfDestruct, 0);
//window.console.log('Hmmm, Accept or Reject');

//const dice = {
//    sides: 6,
//    roll() {
//        return Math.floor(this.sides * Math.random()) + 1;
//    }
//}
//console.log('Before the roll');

//const promise = new Promise( (resolve, reject) => {
//    const rolled = dice.roll();
//
//    if(rolled > 1) {
//        setTimeout( () => resolve(rolled), rolled * 1000);
//    } else {
//        setTimeout( () => reject(rolled), rolled * 1000);
//    }
////    (rolled > 1) ? resolve(rolled) : reject(rolled);
//});
//
//console.log(promise);
//
//promise.then(result => console.log(`I rolled a ${result}`))
//.catch(result => console.log(`Fuck!... I rolled a ${result}`));
//console.log('After the roll');

//HOW TO HANDLE GENERALIZED FUNCTIONS

//function genRandom(a,b) {
//    if(!b) {
//        return Math.floor(Math.random() * a) + 1;
//    }
//    return Math.floor((b-a+1)* Math.random()) + a;
//}
//console.log(genRandom(20));
//console.log(genRandom(10,20));
//console.log(genRandom(6));

//function random(a,b,callback) {
//    if(b === undefined) {
//        b = a, a = 1;
//    }
//    let result = Math.floor((b-a +1) * Math.random()) + a;
//    if(callback) {
//        result = callback(result);
//    }
//    return result;
//}
//function square(n){
//    return n*n;
//}
//console.log(random(5,10));

//function returnHello() {
//    console.log('returnHello() - Main fxn called');
//    return function () {
//        console.log('Hello World! - Inner fxn'); 
//    }
//}
//returnHello();
//const hello = returnHello();
//RETURN VALUE OF FXN IS ASSIGNED AND CALLED NEXT;
//hello();

//function greeter(greeting= 'Hello') {
//    return function() {
//        console.log(greeting);
//    }
//}
//const englishGreeter = greeter();
//englishGreeter();
//const frenchGreeter = greeter('Bonjour');
//frenchGreeter();

//const outside = 'In the global scope';
//function fn() {
//    var inside = 'In the function scope';
//}
//console.log(outside);
//console.log(inside); //Reference Error Because
// THE Variable is not in global scope

//SCOPES OF DIFFERENT FXNS
//function outer() {
//    const outside = 'Outside!';
//    function inner() {
//        const inside = 'Inside!';
//        console.log(outside);
//        console.log(inside);
//    }
//    console.log(outside);
//    inner();
//}
//outer();

//CLOSURES - OCCURS WHEN WE RETURN INNER FUNCTION IN
// AN OUTER FXN (NB: INNER FXN HAS ACCESS TO OUTER FXN 
// VARIABLES)
function outer() {
    const outside = 'Outside Variable';
    function inner() {
        const inside = 'Inside Variable';
        console.log(inside);
        console.log(outside);
    }
    return inner;
}
//const closure = outer();
//closure();
function closure() {
    const a = 1.8;
    const b = 32;
    return c => c * a + b;
}
//console.log(closure());
//const toFahrenheit = closure();
//console.log(toFahrenheit(30));

//CHANGING THE CLOUSURE VARIABLE VALUES 
//IN THE OUTER FXN
function counter(start){
    let i = start;
    return function() {
        return i++;
    }
}
//console.log(counter(5));
//let startIteration = counter(4);
//console.log(startIteration());
//console.log(startIteration());
//console.log(startIteration());


//GENERATORS
function* fibonacci(a,b) {
    let [prev, current] = [a,b];
    while(true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}
//const sequence = fibonacci(2,2);
//sequence.next();
//console.log(sequence.next());
//console.log(sequence.next());
//console.log(sequence.next());
//for(let n of sequence) {
//    if(n > 100) break;
//    console.log(n);
//}

function reverse(string) {
//    return string.split('').reverse().join('');
    return string.split('').reverse().join('');
}
//const msg = 'Hello Javac';
//console.log(reverse(msg));
//console.log(msg);

function square(x) {
    return x * x;
}
function hypo(a,b) {
    return Math.sqrt(square(a) + square(b));
}
//const hypotenuse = hypo(4,5);
//console.log(hypotenuse);

function sum(array, callback) {
    if(callback){
        array = array.map(callback);
    }
    return array.reduce((acc,val) => acc + val);
}
//console.log(sum([2,3,4],square));
function mean(array) {
    return sum(array)/array.length;
}
//console.log(mean([2,3,4,7,8]));
function variance(array) {
    return sum(array,square)/array.length - square(mean(array));
}
//console.log(variance([2,3,4]));

//HIGHER ORDER FUNCTIONS
function multiplier(x) {
    return function(y) {
        return x * y;
    }
}
//const doubler = multiplier(2);
//console.log(multiplier(2));
//console.log('This is a doubler fxn result',doubler(17));
//const tripler = multiplier(3);
//console.log('This is a tripler fxn result',tripler(17));

function power(x) {
    return function(y) {
        return x**y;
    }
}
//const twoOrder = power(2)(6);
//console.log(twoOrder);
//const tenExp = power(10);
//console.log(tenExp(5));

function multiplication(x,y) {
    if( y === undefined) {
        return function(z) {
            return x*z;
        }
    } else {
        return x*y;
    }
}
//let calTax = multiplication(0.22);
//console.log(calTax(400));

function curry(func,...oldArgs) {
    return function(...newArgs) {
        
        const allArgs = [...oldArgs,...newArgs];
//        debugger;
        return func(...allArgs);
    }
}
const divider = (x,y) => x/y;
//const reciprocal = curry(divider,1);
//console.log(reciprocal(2));



