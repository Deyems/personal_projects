
//USING DATA-ATTRIBUTES VALUES IN JS
const superman = document.getElementById('hero');
const powers = superman.dataset.powers;
//console.log(powers);
const btn = document.querySelector('[data-val]');
//console.log(btn);
let num = btn.dataset.val;
//console.log(typeof num);
let length = btn.dataset.maxLength;
//console.log(length);
//console.log(btn.textContent);
localStorage.setItem('name','Walter White');
//console.log(localStorage.getItem('name'));

//ALTERNATIVELY
localStorage.name = 'Ibrahim Lincoln';
//localStorage.removeItem('name');
//console.log(localStorage.name);
//localStorage.clear();
//console.log(localStorage);

/*WORKS ONLINE ONLY*/
//addEventListener('storage',(event)=> {
//    console.log(`The ${event.key} was updated  from ${event.oldValue} to ${event.newValue} and saved in ${event.storageArea}`)
//},false);


//const hero = {
//    wonderWoman: { name: 'wonder Woman', realName: 'Diana Prince'},
//    batman: { name: 'batman', realName: 'Peter Wronk'}
//}
//localStorage.setItem('superman',JSON.stringify(hero));
//console.log(localStorage);
//let superchu = JSON.parse(localStorage.getItem('superman'));
//console.log(superchu);

let youAreHere = (position) => {
    `Height: ${position.timestamp}, Longitude: ${position.coords.longitude}`;
}

//console.log(navigator.geolocation.getCurrentPosition(youAreHere));


//WEB WORKERS
//CHROME DOESNT SUPPORT IT MUCH 

const worker = new Worker('Api_Ajax/fech.js');
worker.postMessage('Hello');
self.postMessage('wORKER BOSS');

worker.addEventListener('message',(event)=> {console.log(event.data)},false);

const canvas = document.querySelector('#canvas');

const context = canvas.getContext('2d');

context.fillStyle = '#0000cc';
context.strokeStyle = '#c00';

context.lineWidth = 3;

context.fillRect(10,10,100,50);
context.strokeRect(10,100,100,50);

//Drawing Paths that join together
context.beginPath();
context.moveTo(130,50);
context.lineTo(180,50);
context.moveTo(155,50);
context.lineTo(155,100);
context.stroke();


//Drawing AN ARC
context.beginPath();
context.arc(200,200,30,0,Math.PI*2,false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();

context.fillStyle = '#0c0';
context.font = 'bold 26px sans-serif';
context.fillText('Hello',20, 200);
