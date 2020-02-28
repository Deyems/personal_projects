
//let name = "harry";
//
//let text = "Harry is a suspicious character.";
//
//let regexp = new RegExp("\\b(" + name + ")\\b","gi");
//
//console.log(text.replace(regexp, "_$1_"));
//
//let input = "A string with 3 numbers in it... 42 and 88.";
//
//let digitSearch = /\b\d+\b/g;
//let match;
//while(match = digitSearch.exec(input)){
//    console.log(`Found, ${match[0]}, at ${match.index}`)
//}

//function parseIni(str){
//    let pattern = /\b\w\b1/;
//}

function parseINI(string) { 
// Start with an object to hold the top-level fields
let result = {};
let section = result;
string.split(/\r?\n/).forEach(line => { 
    let match;
    if (match = line.match(/^(\w+)=(.*)$/)) { 
        section[match[1]] = match[2];
    } else if (match = line.match(/^\[(.*)\]$/)) { 
        result[match[1]] = {};
        debugger;
        //We are reassigning the section AGAIN
        //at this statement below
        section = result[match[1]];
//        debugger;
    } else if (!/^\s*(;.*)?$/.test(line)) { 
        throw new Error("Line '" + line + "' is not valid.");
    } 
}); 
    return result; 
}

console.log(parseINI(`searchengine=https://duckduckgo.com/?q=$1 
spitefulness=9.7
; comments are preceded by a semicolon... 
; each section concerns an individual enemy 
[larry]
fullname=Larry Doe 
type=kindergarten bully 
website=http://www.geocities.com/CapeCanaveral/11451
[davaeorn]
fullname=Davaeorn 
type=evil wizard 
outputdir=/home/marijn/enemies/davaeorn
`));

//USE OF UNICODE CHARACTERS IN REGEX
console.log(/🍎{3}/u.test("🍎🍎🍎"));

