let form = document.forms['search'];
// console.log(form);

let input = form.elements.searchInput;
let select = document.querySelector('select');

// console.log(form.elements);

// if(input.value){
//     alert('You just searched for Real!');
//     // form.submit();
// }

// legend = document.querySelector('legend');
//THE GOOGLE INPUT SEARCH MAGIC - TRIAL
// input.addEventListener('focus',()=>{
//   input.value = "";
//   legend.style.display = "block";
//   input.style.borderTop = "none";
//   input.style.width = 160 + 'px';
// });

// input.addEventListener('blur',()=>alert('blurred'));
// input.addEventListener('change',()=>alert('Change Plan'));

select.addEventListener('change',()=> alert('You changed me'));

form.addEventListener('submit',search);

function search(e){
  e.preventDefault();
  // alert('Form Intercepted Before Submission');
  alert(`You searched for ${input.value}`);
}
