
function talksAbout(node, string) {
    if(node.nodeType == Node.ELEMENT_NODE){
//        debugger;
        for(let i = 0; i < node.childNodes.length; i++){
            if(talksAbout(node.childNodes[i],string)){
                return true;
            }
        }
        return false;
    }else if (node.nodeType == Node.TEXT_NODE){
        return node.nodeValue.indexOf(string) > -1;
    }
}

//console.log(talksAbout(document.body, "book"));

//function findString(node,string){
//    for(let i = 0; i < node.childNodes.length; i++){
//        if(node.childNodes[i].indexOf(string) > -1){
//            return true;
//        }
//    }
//    return false;
//}

//console.log(findString(document.body, "web"));


//let gertImg = document.getElementById("gertrude");
//console.log(gertImg.src);

let para = document.body.getElementsByTagName("p");

let newNode = document.createElement("p");
newNode.textContent = "I am a winnner!!!";

document.body.insertBefore(para[3],para[0]);

document.body.replaceChild(newNode,para[2]);


//CODE TO REPLACE IMAGES BY CLICKING A BTN
let cgnbtn = document.querySelector('.btn');

cgnbtn.addEventListener('click',replaceImages);
// THE FUNCTION RESPONDS DIFFERENTLY
// WHEN YOU LOOP THRU FROM BOTTOM-UP
// AND UP-DOWN
function replaceImages(){
    let imgs = document.getElementsByTagName('img');
    for(let i = imgs.length-1; i>=0; i--){
        if(imgs[i].alt){
        imgs[i].parentElement.replaceChild(document.createTextNode(imgs[i].alt),imgs[i]);
        }else{
            console.log('No alt text found!');
        }
    }

    for(let eachNode of Array.from(para)){
        if(eachNode.getAttribute("data-classified") == "secret"){
//            console.log(eachNode.getAttribute("class"));
//            console.log(eachNode.className);
            eachNode.remove();
        }
    }
    
}

/*
ELOQUENT JAVASCRIPT FUNCTION CODE HERE
function replaceImages() { 
    let images = document.body.getElementsByTagName("img"); 
    for (let i = images.length - 1; i >= 0; i--) { 
        let image = images[i]; 
        if (image.alt) { 
            let text = document.createTextNode(image.alt); 
            image.parentNode.replaceChild(text, image); 
        } 
    } 
} 
*/

/*************************/

//create a Solid Array
let arrayish = {0: "one", 1: "two", 2: "three", length: 4};
let arr = Array.from(arrayish);
console.log(arr);


function elt(htag,...children){
    let elem = document.createElement(htag);
//    debugger;
    for(let child of children){
        if(typeof child != "string") {
//            debugger;
            elem.appendChild(child);
        }else{
            elem.appendChild(document.createTextNode(child));
//            debugger;
        }
    }
    return elem;
}

document.getElementById("quotea").appendChild(elt("footer","-",elt("strong", "Karl Popper"),"preface to 3rd edition"));


//let paraWithAtt = document.getElementsByTagName("p");
//
//let cgnbtn2 = document.querySelector(".btn");
//cgnbtn2.addEventListener('hover',remNodes);
//
//function remNodes(){
//    for(let eachNode of Array.from(paraWithAtt)){
//        if(eachNode.getAttribute("data-classified") == "secret"){
//            eachNode.remove();
//        }
////        console.log(eachNode.data-classified);
//    }
//    
//}


let heightCheck = document.querySelector('.box-line');
let obj = heightCheck.getBoundingClientRect();
console.log(`Overall Height: ${heightCheck.offsetHeight}
Getting all properties together: ${obj.height}`);

function time(name, action){
    let start = Date.now();
    action();
    console.log(name, "took", Date.now() - start, "ms");
}

//time("naive", () => {
//   let target = document.getElementById("one");
////    target.style.border = '2px solid green';
//    while(target.offsetWidth < 2000) {
//        target.appendChild(document.createTextNode("X"));
//    }
//});
//
//time("clever", () => {
//    let target = document.getElementById("two");
//    
//    target.appendChild(document.createTextNode("X"));
////    target.appendChild(document.createTextNode("XXXXX"));
//    console.log(target.offsetWidth);
//    
//    let total = Math.ceil(2000/ (target.offsetWidth));
////    let total = Math.ceil(2000/ (target.offsetWidth/5));
//    console.log(total);
//    
//    target.firstChild.nodeValue = "X".repeat(total);
//});


function count(selector){
    return document.querySelectorAll(selector).length;
}

//console.log(count("p"));
//console.log(count(".animal"));
//console.log(count("p .animal"));
//console.log(count("p > .animal"));

let waterSplash = document.querySelectorAll('img')[1];
//console.log(waterSplash);

let angle = Math.PI/2;
let [pos_X,pos_Y] = [waterSplash.offsetWidth, waterSplash.offsetHeight];

console.log("Img x pos:",pos_X);
console.log("Img y pos:",pos_Y);
let counter = 0;

function rotate(pos_X,pos_Y){
    if(angle == 360){
        break;
    }else{
        angle = Math.asin((Math.sin(angle)*180/Math.PI))*180/Math.PI
    waterSplash.style.transform = `rotate(${pos_X}deg)`;        
    }
    
//    if((pos_X <= 90 + pos_X)){
//        counter +=1;
//        console.log(`Count for x_Offset: ${counter}`);
//        
//        waterSplash.style.top = pos_Y + 'px';
//        waterSplash.style.left = pos_X + 'px';
//        
//        rotate(pos_X = pos_X+1,pos_Y = pos_Y-1);
////        pos_X += angle;
//    }else{
//        counter = 0;
//        return;
//    }


//    else{
//        return;
//    }
    
//    else if((pos_X <= 90 + pos_X) && (pos_Y <= pos_Y + 90)){
//        rotate(pos_X++,pos_Y++);
//    }
}

rotate(pos_X,pos_Y);

function animate(time, lastTime){
    if(lastTime < 5000){
//        console.log("Time:" + time);
//        console.log("LastTime:" + lastTime);
        
        angle += (time - lastTime) * 0.001;
        
    }
//    console.log(Math.sin(angle) * 20);
    
    waterSplash.style.top = (Math.sin(angle * Math.PI/180) * 20 ) + "px";
    waterSplash.style.left = (Math.cos(angle) * 200 ) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
}

//requestAnimationFrame(animate);






