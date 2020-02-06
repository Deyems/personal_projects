const btn = document.querySelector('#calc');
const output = document.querySelector('#output');

//const range = (start, end) => {
//    const numbers = [];
//    while (start <= end){
//        numbers.push(start);
//        start++;
//    }
//    //const[numbers] = 
//    return [...numbers];
//}

//WHEN GIVEN STEPS
const range = (start, end,step) => {
    const numbers = [];
    if(!step){
        while (start <= end){
            numbers.push(start);
            start++;
        }
    }else{
        while(start <= end) {
            numbers.push(start);
            start += step;
        }
    }
    
    //const[numbers] = 
    return [...numbers];
}


//range(5,10);
//console.log(range(5,10));

const sum = (arr) => {
//    debugger;
    if(Array.isArray(arr)){
        return arr.reduce((acc,val) => acc + val);    
    }else{
        return 'Non array supplied';
    }
    
}

console.log(range(1,10,2));
//console.log(range(5,10).reduce((acc,val) => acc+ val));
//
//console.log(sum(range(1,10)));