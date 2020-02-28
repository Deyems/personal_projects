
let button = document.querySelector("button");
button.addEventListener("mousedown", event => {
    if(event.button == 0){
        console.log("Left button");
    }else if(event.button ==1){
        console.log("Middle button");
    }else if(event.button == 2){
        console.log("Right button");
    }
});

let spreadStop = document.querySelectorAll("button")[1];
let around_SS = document.querySelector('.broad');

spreadStop.addEventListener('mousedown', locateSpot);

function locateSpot(e){
    console.log(`You just pressed ${e.target.textContent}`);
    e.stopPropagation();
}

around_SS.addEventListener('mousedown',(e) => {
   console.log(`Stop pressing the button inside my div`);
    e.stopPropagation();
});

//USE OF TARGETS PROPERTY ON EVENT OBJECTS

let calbtn = document.querySelector('.type-area');

let screen = document.querySelector('.screen');

calbtn.addEventListener('click', show);

function show(ev){
    if(ev.target.nodeName.toLowerCase() == "button"){
        screen.textContent = ev.target.textContent;
    }
    
    ev.stopPropagation();
}

//document.body.addEventListener('mousedown',() => {
//   console.log('My body is affected!') ;
//});

let linkDef = document.querySelector('a');
linkDef.addEventListener('click', (e) => {
    console.log("Hallelujah!");
    e.preventDefault(); 
});


//KEY EVENTS KEYDOWN AND KEYUP

//document.body.addEventListener("keydown", (event) => {
//    if(event.key == 'v'){
//        document.body.style.backgroundColor = 'purple';
//    }else if(event.key == 'r'){
//        document.body.style.backgroundColor = 'red';
//    }
//    console.log(event.key);
//});

document.body.addEventListener('keyup', (event) => {
    if(event.key == 'v'){
        document.body.style.backgroundColor = "";
    }else if(event.key == 'r'){
        document.body.style.backgroundColor = "";
    }
});

//TRYING TO PREVENT THE DEFAULT DIALOG BOX #####
//FROM SHOWING WHEN YOU RIGHT CLICK ############
//window.addEventListener('mousedown', (event) => {
//    if (event.button == 2){
//        console.log(event.button);
//        event.preventDefault();
//    }else{
//        console.log(event.button);
//    }
//});


//window.addEventListener('keydown', event => {
//    if(event.key == " " && event.ctrlKey){
//        console.log("Do you wish to quit game?",event.ctrlKey);
//    }
//    if(event.key == 'x' && event.altKey){
//        console.log('Restart game?');
//        console.log(event.altKey);
//    }
//});

/**********************************

POINTER EVENT BELOW

************************ */
//window.addEventListener('click', (event) => {
//    let dot = document.createElement("div");
//    dot.className = "dot";
//    dot.style.left = `${event.pageX - 4}px`;
//    dot.style.top = `${event.pageY - 4}px`;
//    console.log(`Position: ${event.pageX},${event.pageY}`);
//    document.body.appendChild(dot);
//});

/****** Creating A resizable Bar *****/
//let bar = document.createElement("div");
//bar.style.width = `${60}px`;
//bar.style.height = `${20}px`;
//bar.style.backgroundColor = 'skyblue';
//document.body.appendChild(bar);

let lastPos;
let bar = document.querySelector('.bar');

bar.addEventListener("mousedown", event => {
    if(event.button == 0){
        lastPos = event.clientX;
//        console.log(event.buttons);
        window.addEventListener("mousemove",moved);
        event.preventDefault();
    }
});

function moved(event){
    if(event.buttons == 0){
//        console.log(event.buttons);
        window.removeEventListener("mousemove", moved);
    }else{
        let dist = event.clientX - lastPos;
//        console.log(`Current Postion: ${event.clientX} and Last Position: ${lastPos}`);
        let newWidth = Math.max(10, bar.offsetWidth + dist);
        bar.style.width = `${newWidth}px`;
        lastPos = event.clientX;
//        console.log(`Only last state ${lastPos}`);
    }
}

//bar.addEventListener("mouseup", event => {
//    
//});


/**********************************

TOUCH EVENT BELOW

************************ */

function update(event) { 
    for (let dot; dot = document.querySelector("dot");) { 
        dot.remove(); 
    } 
    for (let i = 0; i < event.touches.length; i++) { 
        let {pageX, pageY} = event.touches[i]; 
        let dot = document.createElement("dot"); 
        dot.style.left = (pageX - 50) + "px"; 
        dot.style.top = (pageY - 50) + "px"; 
        document.body.appendChild(dot);
    }
}

window.addEventListener("touchstart", update); 
window.addEventListener("touchmove", update); 
window.addEventListener("touchend", update);



/**********************************

SCROLL EVENT BELOW

************************ */

let divWithText = document.getElementById('text-area');
//let imgDivArea = document.querySelector(".img-area");

window.addEventListener('scroll', (ev) => {
    let totHeight = divWithText.scrollHeight;
//    let totdivheight = divWithText.scrollTop;
    let heitTotop = divWithText.offsetTop;
    console.log(`Max Scroll Pos: ${totHeight}
    Current Scroll Pos: ${pageYOffset}
    Window Scroll HEIGHT: ${this.innerHeight}
    Height of element: ${divWithText.clientHeight}
    Scroll Top Pos of Div area: ${divWithText.scrollTop}
    Scrollable height of Image div area:
    Total Document Hehgt: ${document.body.clientHeight}
    Height of Text-Element to top: ${divWithText.getBoundingClientRect().top}
    `);
    if(this.scrollY > 270 && this.scrollY < 400){
//        divWithText.style.visibility = 'visible';
        divWithText.style.display = 'block';
    }else{
//        divWithText.style.visibility = 'hidden';
    }
});



/**********************************

FOCUS EVENT BELOW

************************ */


let help = document.querySelector('#help');

let fields = document.querySelectorAll("input");
let newNode;

for(let field of Array.from(fields)){
    newNode = document.createElement("div");
    newNode.setAttribute("class","help")
    field.addEventListener("focus", (event) => {
        let textAdd = event.target.getAttribute("data-help");
        newNode.textContent = textAdd;
        event.target.parentElement.appendChild(newNode);
    });
    field.addEventListener("blur", event => {
        newNode.textContent = "";
        event.target.parentElement.appendChild(newNode);
    });
}



/**********************************

LOAD EVENT BELOW

************************ */

window.addEventListener("load", (event) => {
    let images = document.querySelectorAll('img');
//    console.log('Images loaded');
    for(let image of Array.from(images)){
        
//        console.log('doing well!');
        image.addEventListener('click', (ev) => {
            let diagBox = document.createElement("div");
            let closeBtn = document.createElement("button");
            diagBox.style.width = ev.target.width;
            diagBox.style.height = "300px";
            diagBox.style.position = 'fixed';
            diagBox.style.left = ev.target.width;
            diagBox.style.top = ev.target.width;
            diagBox.style.backgroundColor = 'skyblue';
            diagBox.textContent = `Are you sure to close?`;
            closeBtn.textContent = 'X';
            closeBtn.style.color = 'black';
            diagBox.appendChild(closeBtn);
            console.log(diagBox);
            console.log(ev.target.width);
            document.body.appendChild(diagBox);
        });
//        document.body.appendChild(diagBox);
    }
});




//SPUR YOUR WEB WORKER IN THE BACKGROUND NOW!!!

let squareWorker = new Worker('code/web_worker.js');
squareWorker.addEventListener("message", event => {
    console.log("The worker responded ", event.data);
});

squareWorker.postMessage(10);

let rainbowColor = ["red","orange","yellow","green","blue","indigo","violet"];

let setRainColor = document.getElementById("randomColor");

setRainColor.addEventListener('click', event => {
    document.body.style.backgroundColor = rainbowColor[Math.floor(rainbowColor.length * Math.random())];
});


let form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const number = Number(form.number.value);
//    console.log(number);
    document.querySelector(".showCalc").innerHTML = `<p>This could take a while...</p>`;
    
    if(window.Worker) {
        const worker = new Worker('factors.js');
        worker.postMessage(number);
        worker.addEventListener('message', e => {
            document.querySelector(".showCalc").innerHTML = e.data;
        },false);
    }
    
});








