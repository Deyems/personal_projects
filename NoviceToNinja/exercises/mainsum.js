'use strict';
//Declare All Elements Needed Here
// Get Element to Generate Series && Use for event Listening
// Get Element to Sum Series && Listen for Event
// Get Element where INput is Entered
//Create A function to Generate Series
// Create a Fxn to Add Series 
//Get Element to Output Series
//Get Element to Output Sum

const seriesGen = document.querySelector('#seriesGen');
const seriesSum = document.querySelector('#seriesSum');
const input = document.querySelector('#startingNum');

let form = document.forms['series'];
form.addEventListener('submit',iterate);

function firstNum() {
    return input.value;
}

function pattern() {
    const patt = /[w]/;
}

function* generateSeries(a,b) {
//        let num = val;
//        let den = val;
    let [prev,next] = [a,b];
    while(prev>0){
//        debugger;
        [prev,next] = [next,(1/(prev + 2))];
//        debugger;
        yield next;
    }
//    if(den < 13){
//        den = den + 2;
//        debugger;
//        return val + inverse(den);
//        
//    }else return 1;
}

let sequence = generateSeries(1,1/3);
//console.log(sequence.next());
//console.log(sequence.next());
//console.log(sequence.next());
//console.log(sequence.next());
//console.log(sequence.next());
//console.log(sequence.next());

//for(let n of sequence){
////    debugger;
//    if(n<=0.333) break;
////    debugger;
//    console.log(n);
//}

function inverse(x) {
    return 1/x;
}

function addInc(y) {
    return y + 2;
}

function iterate(e) {
    e.preventDefault();
    seriesGen.addEventListener('click',showSeries);
    seriesSum.addEventListener('click',addSeries);
    
    let first_in_series = Number(firstNum());
    function showSeries() {
        if(first_in_series !== '') {
//            console.log(first_in_series);
//            return first_in_series;

//            let seriesVal = generateSeries(first_in_series);
//            console.log(seriesVal);
                
        }else{
            console.log('No value entered');
        }
    }
    function addSeries() {
        
    }
}