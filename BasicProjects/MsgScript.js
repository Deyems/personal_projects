let inputmessage = document.querySelector('#msg');
    headLast = document.querySelector('#head'),
    output = document.querySelector('#showMsg'),
    btnMsg = document.querySelector('#btn');


//console.log(typedWord);
btnMsg.addEventListener("click",show);
function show(){
    typedWord = inputmessage.value;
    if(!typedWord){
        typedWord = 'You have not entered a message!'
        output.style.color = 'red';
        output.innerHTML = typedWord;
    }
    output.innerHTML = typedWord;
    output.style.color = 'skyblue';
    headLast.innerHTML = 'Last Message you sent is';
}
