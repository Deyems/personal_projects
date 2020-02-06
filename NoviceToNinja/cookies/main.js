// document.cookie = "name=Superman";
// document.cookie = "hero=true";
// document.cookie = "city=Metropolis";

// const expiryDate = new Date();
// const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
// expiryDate.setTime(tomorrow);

// document.cookie = `name=Superman; expires=${expiryDate.toUTCString()}`;
//document.cookie = "; max-age=86400";
// document.cookie = 'name=Supername; expires=Thu, 01 Jan 1970 00:00:01 GMT';
//
// console.log(document.cookie);

// const cookies = document.cookie.split("; ");
// // console.log(cookies);
// for(crumb of cookies){
//   const[key, value] = crumb.split("=");
//   console.log(`We have stored '${key}' with equivalent value of '${value}'`);
// }

//TIMING FUNCTIONS STARTS HERE
//setTimeout and clearTimeout;
//setInterval and clearInterval'

//ACCESSING AN OBJECT Property with
//this keyword is not always working
//LIKE SHOWN BELOW
// const person = {
//   name: 'Superman',
//   introduce(){
//     console.log(`Hi, I'm ${this.name}`);
//   }
// }
//
// setTimeout(person.introduce,500);

/*OLD ANIMATION METHOD*/
// const squareElement = document.getElementById('square');
// let angle = 0;
//
// setInterval(()=>{
//   angle = (angle+2)%360;
//   squareElement.style.transform = `rotate(${angle}deg)`;
// },50);


//NEW ANIMATION METHOD ON THE BROWSER
const squareElement = document.getElementById('square');
let angle = 0;

function rotate(){
  angle = (angle + 2)%360;
  squareElement.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(rotate);
}
//ASSISTS IN Calling the rotation function and
//Animate the Object and We keep track of the id
//To be able to stop animation
const id = requestAnimationFrame(rotate);

// rotate();
