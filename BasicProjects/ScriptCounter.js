let lowerCounter = document.querySelector('#lowerCountBtn'),
    IncreaseCounter = document.querySelector('#IncreaseCountBtn');

lowerCounter.addEventListener("click",reduce);
IncreaseCounter.addEventListener("click",increase);

function reduce(){
    let x = document.getElementById("counter").innerHTML;
    x--;
    if (x<0){
        document.getElementById("counter").style.color = 'red';
    } else if(x == 0){
        document.getElementById("counter").style.color = 'white';
    } else {
        document.getElementById("counter").style.color = 'green';
    }
    document.getElementById("counter").innerHTML = x;
}

function increase(){
    let y = document.getElementById("counter").innerHTML;
    y++;
    if (y<0){
        document.getElementById("counter").style.color = 'red';
    } else if(y == 0){
        document.getElementById("counter").style.color = 'white';
    } else {
        document.getElementById("counter").style.color = 'green';
    }
    document.getElementById("counter").innerHTML = y;
}