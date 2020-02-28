class MultiplicatorUnitFailure extends Error{};

function primitiveMultiply(a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new MultiplicatorUnitFailure(`The values ${a} & ${b} are non-integers`);
    }
    console.log(a*b);
}

function getNumber(){
    return Number(prompt('Enter a valid number'));
}

for(;;) {
    try{
        primitiveMultiply(getNumber(),getNumber());
        break;
    }catch(err){
        if(err instanceof MultiplicatorUnitFailure){
            console.log(`Cannot Multiply Non-valid values`);
        }else {
            throw err;
        }
    }
}

const box = { 
    locked: true, 
    unlock() { this.locked = false;},
    lock() { this.locked = true; },
    _content: [],
    get content() { 
        if (this.locked) 
            throw new Error("Locked!"); 
        return this._content; 
        }
    };

function withBoxUnlocked(firstControl){
    if(box.locked) {box.unlock();}
    
    while(!box["locked"]){
        return box._content;
    }
}






