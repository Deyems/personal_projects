//console.log(window);

//const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item) );

// const ul = document.querySelector('.items');
// // ul.remove();
// console.log(ul);
/*TO GRAB ELEMENTS IN THE UL ELEMENT*/
// ul.lastElementChild.remove();
//
// ul.firstElementChild.textContent= 'tomato';
// ul.children[1].innerText = 'Potato';
// ul.lastElementChild.innerHTML = '<h4> Hello Brad </h4>';

// const btn = document.querySelector('.btn');
//
// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   document.querySelector('#my-form').style.background = '#bbb';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild.innerHTML = '<h2>Modern JS</h2>';
//   // console.log(e.target.className);
// } );

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelectorAll('.msg');
// const msg_success = document.querySelector('.msg-success');
// const userList = document.querySelector('#users');
//
// myForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   if(nameInput.value === '' || emailInput === ''){
//     for(let i =0; i < msg.length; i++){
//       msg[i].classList.add('error');
//       msg[i].textContent = 'Your fields are empty';
//       setTimeout(() => msg[i].remove(),3000);
//     }
//
//     // msg.style.background = 'red';
//     // msg.style.color = '#fff';
//   }else{
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} loves you`) );
//     userList.appendChild(li);
//
//     nameInput.value = '';
//     emailInput.value = '';
//     console.log(userList);
//
//     // msg_success.classList.add('success');
//     // msg_success.textContent = 'Thank You for Registering';
//
//     setTimeout(() => msg_success.remove(),3000);
//     // msg.style.background = 'green';
//     // msg.style.color = '#fff';
//   }
//   // console.log(msg);
//   // console.log(nameInput.value);
// });

// const database = [
//   {
//     username: "Andrew",
//     password: "pass"
//   }
// ];
//
// const newsFeed = [
//   {
//     username: "Bobby",
//     timeline: "So tired from all the Learning"
//   },
//   {
//     username: "Sally",
//     timeline: "Javascript is really awesome"
//   }
// ];
//
// let userNamePrompt = prompt("Enter your Username");
// let passwordPrompt = prompt("Enter Password:");
//
// let user, passkey;
//
// function signIn(user, passkey){
//   if(user === database[0].username && passkey === database[0].password){
//     console.log(newsFeed);
//   }else{
//     console.log("Your signin details are incorrect");
//   }
// }
//
// signIn(userNamePrompt, passwordPrompt);


const btn = document.getElementById("button");

const rainbow = [
  "red","orange","yellow","green","blue","rebeccapurple","violet"
];

function change(){
  let colorcode = rainbow[Math.floor(7*Math.random() )];
  document.body.style.background = colorcode;
}

btn.addEventListener('click',change);





// const s = 'coca, pepsi, bigi, fanta';
// console.log(s.split(','));

//FUNCTIONS
// function addNums(num1, num2){
//   console.log(`The addition of ${num1} + ${num2} is`, num1 + num2);
// }


// USE ARROW FUNCTIONS
const addNums = (num1=1, ...nums) =>{
//  console.log(num1 + nums);
}

addNums(30,50,90,50);

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Burn for God',
    isCompleted: false
  },
  {
    id: 3,
    text: 'Loop through dish',
    isCompleted: true
  }
];

//todos.forEach((todo) => console.log(todo));

// let i = 0;
// while(i <= 10){
//   console.log(`While Loop Number: ${i}`);
//   i++;
// }

// for(let i = 0; i < todos.length; i++){
//   console.log(JSON.stringify(todos[i]));
// }

//ANOTHER WAY TO LOOP THROUGH AN OBJECT
// for(let i = 0; i < todos.length; i++){
//   console.log(todos[i].text);
// }

//USING FOR...OF loop
// for(let obj of todos){
//   console.log(obj.isCompleted);
// }
//
// //USING FOREACH, MAP, & FILTER
// todos.forEach( function(todo) {
//   console.log(todo.text);
// });
//
// todos.forEach( function(todo){
//     console.log(todo);
//   });

//map function returns an Array of different
// items selected
//   const todoText = todos.map(function(todo){
//     return todo.isCompleted;
//   });
//
//   console.log(todoText);
//
// // filter function returns the whole element
// // containing the item selected - Array/Object
// const todoCompleted = todos.filter(function(todo){
//   return todo.isCompleted === true;
//   // return todo.id;
// });
//
// console.log(todoCompleted);






//todos.foreach()
