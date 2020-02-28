let bombTimer = setTimeout(() => {
    console.log("BOOM!");
},2000);

if(Math.random() < 0.5){
    console.log("Defused...");
    clearTimeout(bombTimer);
}

    let newDiv = document.createElement("div");
    document.body.appendChild(newDiv);

let ticks = 0;
let clock = setInterval(() => {
    newDiv.innerHTML = `<p>${ticks++}</p>`;
    if(ticks == 10){
    clearInterval(clock);
    newDiv.innerHTML = "Counting stopped...";
}
},1000);


/**************************************
    DEBOUNCING AN EVENT

/**************************************/
let textArea = document.querySelector('textarea');
let timeout;
textArea.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log(`Iron lady stops`)
    },500);
});


/**************************************
    RESPONDING TO MOUSEMOVE EVENTS
/**************************************/

let scheduled = null;
let addedDiv = document.createElement("div");

window.addEventListener("mousemove", (event) => {
    if(!scheduled){
        setTimeout(() => {
            addedDiv.textContent = `
            Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
            document.body.appendChild(addedDiv);
            scheduled = null;
        },250);
    }
    scheduled = event;
});

