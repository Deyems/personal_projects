
let summ = document.querySelector('#sum');
let product = document.querySelector('#product');
let division = document.querySelector('#division');
let difference = document.querySelector('#difference');
let total = document.querySelector('#allGen');


//INPUT QUERIES


let form = document.forms['simpleapp'];

form.addEventListener('submit',sumup);
let output = document.querySelector('.output');

  function sumup(e){
    // alert('I am working!');
    e.preventDefault();
    let pattern = /\W/;
    let entry1 = form.firstDigit.value;
    let entry2 = form.secondDigit.value;

    if(form.firstDigit.value === '' || form.secondDigit.value === ''){
      let errorText = 'Empty Fields not allowed';
      output.textContent = errorText;
      output.classList.add('error');
      output.style.display = 'block';
      form.firstDigit.focus();
    }else if(entry1.match(pattern) || entry2.match(pattern)){
      errorText = 'Non Integer Values not allowed';
      output.textContent = errorText;
      output.classList.add('error');
      output.style.display = 'block';
    }else{
      let num1 = Number.parseInt(entry1);
      let num2 = Number(entry2);

      summ.addEventListener('click',addup);
      function addup(){
        let total = num1 + num2;
        output.textContent = 'The Sum of your entries: '+total;
        output.style.display = 'block';
        output.style.color = 'skyblue';
      }
      product.addEventListener('click',findProd);
      function findProd(){
        let total = num1 * num2;
        output.textContent = 'The Product of your entries: '+total;
        output.style.display = 'block';
        output.style.color = 'skyblue';
      }

      division.addEventListener('click',findDiv);
      function findDiv(){
        if(!(num2 === 0)){
          let total = num1 / num2;
          output.textContent = 'The Division of your entries: '+total;
        }else{
          output.textContent = 'You cant divide by Zero!';
        }
        output.style.display = 'block';
        output.style.color = 'skyblue';
      }

    //  alert('Corect Digits');
    }

  }
