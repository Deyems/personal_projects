
// function doSomething(event){
//   console.log(event.target);
//   console.log(`Screen Properties: ${event.screenX}, ${event.screenY}\n
//     page: ${event.pageX}, ${event.pageY}\n
//     client: ${event.clientX}, ${event.clientY}\n
//     `);
// }
//
// //addEventListener('click',doSomething);
//
// let clickPara = document.querySelector('#click');
// clickPara.addEventListener('click', ()=>console.log('click'));
// clickPara.addEventListener('mousedown', ()=>console.log('down'));
// clickPara.addEventListener('mouseup', ()=>console.log('up'));
//
// let dblClickPara = document.querySelector('#dblclick');
// dblClickPara.addEventListener('dblclick',highlight);
//
// function highlight(event){
//   event.target.classList.toggle('highlight');
// }

// addEventListener('keydown',(event)=>console.log(`You Clicked on ${event.key} key Now!`));

// addEventListener('keydown',(event)=>{
//   if(event.key === 'c' && event.ctrlKey){
//     console.log('Stop Copying website Content');
//   }
// });

let ulElement = document.querySelector('#list');
let liElement = document.querySelector('#list li');

//Bubbling Events
// liElement.addEventListener('click',(e)=>{
//   console.log('You clicked on li');
//   e.stopPropagation();
// });
// ulElement.addEventListener('click',(e)=>console.log('You clicked on Ul'));

//Capturing Events
// ulElement.addEventListener('click',(e)=>console.log('You clicked on Ul'),true);
// liElement.addEventListener('click',(e)=>console.log('You clicked on Li'),true);


/*EVENT DELEGATION*/

ulElement.addEventListener('click',highlight);

function highlight(event){
  event.target.classList.toggle('highlight');
}




let ade = function() {

}
