'use strict';
const queryform = document.querySelector('#convform');

const queryfromVal = document.querySelector('#start');
const querytoVal = document.querySelector('#end');
const querystepWise = document.querySelector('#increment');

const queryfromUnit = document.querySelector('#unitfrom-opt');
const querytoUnit = document.querySelector('#unitto-opt');

const btn = document.querySelector('#convert');

const output = document.querySelector('#output');

const valOne = () => queryfromVal.value;
const valTwo = () => querytoVal.value;
const increment = () => querystepWise.value;


const unitOne = () =>  queryfromUnit.value;
//console.log(unitOne());
const unitTwo = () => querytoUnit.value;

queryfromUnit.addEventListener('keychange',validating);

function validating() {
    
}

//const increment = function getIncVal(){
//    return querystepWise.value;
//}
//const valOne = function getFromVal(){
//    return queryfromVal.value;
//}
//
//const valTwo = function getToVal(){
//    return querytoVal.value;
//}
//
//const unitOne = function getFromUnit(){
//    return queryfromUnit.value;
//}
//const unitTwo = function getToUnit(){
//    return querytoUnit.value;
//}
//form.addEventListener('submit',upperCut);

function kgtoPound(val) {
    let pound = 2.2 * val;
    return pound;
}

function PoundtoKg(val) {
    let kilo = val/2.2;
    return kilo;
}

let kgequiv = [];
let poundequiv = [];

btn.addEventListener('click',doConversion);

function doConversion(e) {
    e.preventDefault();
     if(valOne() !== ''){
         if(valTwo() !== ''){
             if(increment() !== ''){
                 if(unitOne() !== 'Choose your Unit' && unitOne() !== ''){
                     if(unitTwo() !== 'Choose your Unit' && unitTwo() !== ''){
//                         console.log(unitTwo());
                            let start = Number(valOne());
                                let end = Number(valTwo());
                                let inc = Number(increment());
                            
                            while(start <= end ){
                                if(unitOne() === 'kg' && unitTwo() === 'lb') {
                                    let pound = kgtoPound(start);
                                    kgequiv.push(start);
                                    poundequiv.push(pound);
    //                                debugger;  
                                }
                                
                                if(unitOne() === 'lb' && unitTwo() === 'kg') {
                                    let kilogram = PoundtoKg(start);
                                    
                                    kgequiv.push(kilogram);
                                    poundequiv.push(start);
    //                                debugger;  
                                }
                                
                                start = start + inc;
                            }
                         
                         for(let i = 0; i < kgequiv.length; i++){
                            let addRow = document.createElement('div');
                            let addinnerdiv1 = document.createElement('div');
                            let addinnerdiv2 = document.createElement('div');
                            
                             addRow.classList.add('row');
                             addRow.appendChild(addinnerdiv1);
                             addRow.appendChild(addinnerdiv2);
                             
                             addinnerdiv1.textContent = `${kgequiv[i]}`;
                             addinnerdiv2.textContent = `${poundequiv[i]}`;
                             
                            output.appendChild(addRow);
                         }
                         
                     } else{ console.log('No Unit chosen to convert TO'); }
                 } else{ console.log('No Unit chosen to convert FROM'); }
             } else{ console.log('No step wise increment chosen'); }
         }else{ console.log('No End point Chosen'); }
     }else { console.log('No Initial val to convert');}

}

