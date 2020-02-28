
/**
💥🎈
&#127880; - baloon

&#128495;&#65039; - Explode Ballon

**/
let timer;
//let spanElem = document.querySelector('span');
let spanElem;

window.addEventListener('keydown', (event) => {
//    clearTimeout(timer);
//    timer = setTimeout(() => {
    
//    console.log('You presed your hand on a key');
    
//    let spanElem = document.querySelector('span');
//    let elemH = spanElem.getBoundingClientRect().bottom - spanElem.getBoundingClientRect().top;
//    console.log(elemH);
    
//    let elemH = spanElem.getBoundingClientRect().bottom - spanElem.getBoundingClientRect().top;
//    elemH = spanElem;
        if(event.key == 'ArrowUp'){
//            console.log(event.key);
            let spanElem = document.querySelector('span');
            let elemH = spanElem.getBoundingClientRect().bottom - spanElem.getBoundingClientRect().top;
            
            console.log('Height of span by arrow UP: ', elemH);
            elemH = Math.floor(elemH * 1.1);
            console.log(elemH);
            spanElem.style.fontSize = Math.floor(elemH)+"px";
            if(elemH >= 75){
                spanElem.innerHTML = "&#128495;&#65039;";
                this.removeEventListener();
            }
        } 
    if(event.key == 'ArrowDown'){
//            elemH = spanElem.getBoundingClientRect().bottom - spanElem.getBoundingClientRect().top;
            let spanElem = document.querySelector('span');
            let elemH = spanElem.getBoundingClientRect().bottom - spanElem.getBoundingClientRect().top;
        
            console.log('Height of span by arrow DOWN: ', elemH);
            elemH = Math.floor(elemH * 0.9);
            spanElem.style.fontSize = elemH+"px";
//            elemH = 0;
        }
        
//    }, 1000);
//event.preventDefault();
});

window.addEventListener('scroll', (e) => {
        e.preventDefault();
    });


//window.addEventListener('keyup', (event) => {
//    console.log('You released your hand from the key');
//});