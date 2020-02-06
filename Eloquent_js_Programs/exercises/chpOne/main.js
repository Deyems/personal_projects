const stairs_btn = document.querySelector('.stairs');
const chess_btn = document.querySelector('.chess');
const fizz_btn = document.querySelector('.FizzBuzz');
const wrapper = document.querySelector('.wrapper');

const genStairs = () => {
    //ASK FOR HOW MANY LINES OF STAIRS
    //USE THE NUMBER TO GENERATE THE NUMBER BOUNDARY IN THE ARRAY
    let div = document.createElement('div');
    
    let tank = '#'
    let lengthOfTank = tank.length;
    for( lengthOfTank; lengthOfTank<7; lengthOfTank++){
        console.log(tank);
        div.innerText = tank;
        console.log(div.innerText);
      tank += '#';
    }
    console.log(div.innerText.split('').length);
    
//    while(0 < div.innerText.split('').length){
//        console.log(wrapper.appendChild(div));
//    }
//    
    
    
//    console.log(wrapper);
}

const genBoard = () => {
    
}

stairs_btn.addEventListener('click',genStairs);
chess_btn.addEventListener('click',genBoard);