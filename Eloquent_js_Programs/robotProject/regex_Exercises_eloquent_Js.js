/*
Regexp golf 
Code golf is a term used for the game of 
trying to express a particular program in 
as few characters as possible. Similarly, 
regexp golf is the practice of writing as
tiny a regular expression as possible to 
match a given pattern, and only that 
pattern. For each of the following items,
write a regular expression to test whether 
any of the given substrings occur in a 
string. The regular expression should 
match only strings containing one of 
the substrings described. Do not worry 
about word boundaries unless explicitly 
mentioned. When your expression works, 
see whether you can make it any smaller. 
1. car and cat 
2. pop and prop 
3. ferret, ferry, and ferrari 
4. Any word ending in ious 
5. A white space character followed by a 
period, comma, colon, or semicolon 
6. A word longer than six letters 
7. A word without the letter e (or E) 

*/

let onePat = new RegExp("ca[a-z]+","gi");
console.log(onePat.test("The cat loves going out"));
let expression = `D cat loves hanging on
a car while going out`;
console.log(expression.match(onePat));


let twoPat = /pr?op/g;
expression = `The dog gave a pop sound. 
But propped out`;
console.log(twoPat.test(expression));
console.log(expression.match(twoPat));


let threePat = /fer{2}(et|y|ari)/g;
expression = `A driver must always take the 
ferrari test even if he has a ferry`;
console.log(threePat.test(expression));
console.log(expression.match(threePat));


let fourPat = /(\w+)(ious)$/g;
expression = `how delicious, spacious row ruinous consciousness neighbour`;
console.log(fourPat.test(expression));
console.log(expression.match(fourPat));


let fivePat = /\s[.,:;]/g;
expression = `escape the dot bad punctuation .`
console.log(fivePat.test(expression));
console.log(expression.match(fivePat));


let sixPat = /\w{7,}/g;
expression = "hottentottententen no hotten totten tentene";
console.log(sixPat.test(expression));
console.log(expression.match(sixPat));


let sevenPat = /(\w+[^eE]\w+)/g;
let remLetter_e_E = /(\b\w*[^eE]\w+\b)/g;

/*
Quoting style 

Imagine you have written a story and used 
single quotation marks throughout to mark 
pieces of dialogue. Now you want to replace 
all the dialogue quotes with double quotes, 
while keeping the single quotes used in 
contractions like aren’t. Think of a pattern
that distinguishes these two kinds of quote 
usage and craft a call to the replace method 
that does the proper replacement.
*/

function removeSingleQuotes(string){
    let arrOfline = string.split(/\r?\n/);
    let remover = /\b(\W)'(.+)'(\W)\b/;
    let replacedLine = [];
    
    arrOfline.forEach(line => {
       replacedLine.push(line.replace(remover,"$1\"$2\"$3"));
    });
    //There is a bug of trying to convert ba
    //back to the content of text book
    // With replaced Quotations
//        return string.replace(remover,"$1\"$2$\"3");
    return replacedLine.join("-");
}

function doubleQuotes(string){
    let remover = /\b(\W)'(.+?)'(\W)\b/g;
    return string.replace(remover,"$1\"$2\"$3");
}

//console.log(removeSingleQuotes(`Dami said 'she would love' 
//But aren't we tired.com
//As always google says 'My time is here' 
//though it may be take out stress`));

console.log(doubleQuotes(`Dami said 'she would love' But aren't we tired.com As always google says 'My time is here' though it may be take out stress`),"Real Quotes fxn");

function catchDigit(num){
    let pattern = /([-+.]\d+)|(\d+((e-?)|E)\d+)|([-+]\d+[.](\d+)?)/;
    return pattern.test(num);
}




