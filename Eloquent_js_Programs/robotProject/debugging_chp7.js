//class PGroup{
//    constructor(data){
//        this.data = data;
//    }
//    
//    add(newdata) {
//        if(!this.data.includes(newdata)){
//            return new PGroup(newdata);
//        }
//        
//    }    
//    
//    delete() {
//        
//    }
//    
//    has() {
//        
//    }
//    
//    
//}
"use strict";
function Person(name) {
    this.name = name;
}

let ferdinand = new Person("Ferdinand");
//console.log(name);

function test(label, body) {
    if(!body()) console.log(`Failed: ${label}`);
}

test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
})

test("convert Greek text to uppercase", () => {
    return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});

test("don't convert case-less characters", () => { 
    return "௷ఆࢎ࠶߈".toUpperCase() == "௷ఆࢎ࠶߈";
});


function numberToString(n, base = 10) {
    let result = "", sign = "";
    if(n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        //USE OF ERROR
        //n /= base;
        
        n = Math.floor(n / base);
        //Corrected Error Here
    } while (n>0);
    return sign + result;
}

console.log(numberToString(13,10));


//CODE BELOW DOESNT WORK IN NODE CMD
//function promptNumber(question) { 
//    let result = Number(prompt(question)); 
//    if (Number.isNaN(result)) return null; 
//    else return result; 
//}
//console.log(promptNumber("How many trees do you see?"));

function lastElement(array) {
    if(array.length == 0){
        return {"failed": true};
    }else{
        return {"Last element": array[array.length-1]};
    }
}

console.log(lastElement([4,50,3,5,3]));

/*MAKING USE OF PROMPT FUNCTION BELOW WONT WORK IN NODE */

//function promptDirection(question) {
//    let result = prompt("Enter a Direction",question);
//    if(result.toLowerCase() == 'left') return "L";
//    if(result.toLowerCase() == 'right') return "R";
//    throw new Error("Invalid direction " + result);
//}
//
////console.log(promptDirection("love"));
//
//function look() {
//    if(promptDirection("Which way?") == "L") {
//        return "a house";
//    }else {
//        return "two angry bears";
//    }
//}
//
//try {
//    console.log("You see", look());
//}catch(error) {
//    console.log("Something went wrong: "+ error);
//}

/*MAKING USE OF PROMPT FUNCTION ABOVE WONT WORK IN NODE */


try{
    null.myFunction();
}catch(e){
    console.log("Fucking stupid null!");
} finally{
    console.log("Still give results no matter what!");
}

const user = {email: 'jdoe@ymum.com'};

try{
    if(!user.name){
        throw new SyntaxError('User name doesn\'t exist');
    }
}catch(err){
    console.log(`User Error: ${err.message}`);
    console.log(`${err}`);
}


/*THIS WILL NOT RUN ON NODE */

const account = {
    a: 100,
    b: 20,
    c: 0,
    d: 80
};

//We need to know the account we are transfering to
// AND from, We also need to KNOW the AMT transferred

/***************************/
//MY VERSION OF THE BANK ACCOUNT TRANSFER
//function transfer(from, to, amount){
//    let accFrom = prompt("Enter Account for transfer");
//    if(!account.hasOwnProperty(accFrom)) {
//        return `Account name ${accFrom} doesnt exist`;
//    }
//    else{
//        let amt = prompt("How much do you wish to send");
//        account[accFrom] -= amt;
//    }
//}

function getAccount(){
    let accountName = prompt("Enter account name");
    if(!account.hasOwnProperty(accountName)) {
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}

function transfer(from, amount){
    if(account[from] < amount) return;
    account[from] -= amount;
    account(getAccount()) += amount;
    return account;
}

/*THIS ABOVE WILL NOT RUN ON NODE */

function transfer2(from, amount) { 
    if (account[from] < amount) return; 
    let progress = 0; 
    try {
        account[from] -= amount; 
        progress = 1; 
        account[getAccount()] += amount; 
        progress = 2; 
    } finally { if (progress == 1) { 
        account[from] += amount; 
    }
     }
}





//SELECTIVELY CATCHING ERRORS IN JS PROGRAMS

class InputError extends Error {};

function promptDirection(question) { 
    let result = prompt(question); 
    if (result.toLowerCase() == "left") return "L"; 
    if (result.toLowerCase() == "right") return "R"; 
    throw new inputError("Invalid direction: " + result); 
}

for (;;) { 
    try { 
        let dir = promptDirection("Where?"); 
         console.log("You chose ", dir); break; 
    } catch (e) { 
        if (e instanceof InputError) { 
            console.log("Not a valid direction. Try again."); 
        } else { 
          throw e; 
          }
    }
}

