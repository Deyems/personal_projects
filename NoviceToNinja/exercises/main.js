(function () {
    'use strict';
    let form = document.forms['circle_calc'];
    let radius = form.radius;
    const plotCircle = document.querySelector('#plot_circle');
    const btngrp = document.querySelectorAll('.btn-grp');
    const outputDiv = document.querySelectorAll('.output-grp');
    let response = document.querySelector('.circle');
    
//    radius.value = 'Loala';
    //TESTING ALL ELEMENTS SELECTED
//    peri.addEventListener('click',()=> {
//        ans_peri.style.marginTop = '5px';
//        ans_peri.style.transition = 'ease-in 1s';
//        ans_peri.style.display = 'block';
//    });
    
    form.addEventListener('submit',circle);
    plotCircle.addEventListener('click',genCircle);
    
    function circle(e) {
        e.preventDefault();
        const perimeter = function(rad) {
            return Math.PI * 2 * rad;
        }
        const area = function(rad) {
            return Math.PI * rad**2;
        }
        
        for(let i=0; i < btngrp.length; i++) {
            btngrp[i].addEventListener('click',showResult);
            
            function showResult() {
              outputDiv[i].style.display = 'flex';
                if(outputDiv[i].firstElementChild.getAttribute('for') == 'perimeter'){
                    outputDiv[i].lastElementChild.value = perimeter(radius.value).toPrecision(7);    
                }else{
                    outputDiv[i].lastElementChild.value = area(radius.value).toPrecision(9);
                }
            }
        } //End of FOR LOOP
        
    } //END OF FORM EVENT LISTENER
    
     function getRadius() {
        return radius.value;
        }
    
        function genCircle() {
            const drawCircle = document.querySelector('.circle>img');
            let rad = getRadius();
            if(rad !== ''){
                rad = rad + 'px';
//                console.log(rad);
//                response.innerHTML = '';
                drawCircle.setAttribute('width',rad);
                drawCircle.setAttribute('height',rad);
                /*//console.log(drawCircle); // Used to Debug Program*/
                drawCircle.classList.add('radiusBorder');
                drawCircle.style.display = 'block';
            } else{
                
                response.innerHTML = '<p>You cant generate a circle!!!</p>'
//                console.log('No input radius');
            }
            
        }
        
}());