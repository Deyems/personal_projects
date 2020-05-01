
//USING VANILLA JS NOT USING OOP PARADIGM
const toggle = document.querySelector('#toggle');
const close = document.querySelector('#close');
const open = document.querySelector('#open');
const modal = document.querySelector('#modal');

//Toggle Nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
  // console.log(document.body);
});

//SHOW modal
open.addEventListener('click', () => {
  modal.classList.add('show-modal');
  // document.querySelector('.modal-container').style.display = 'block';
});

close.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

//HIDE MODAL ON OUTSIDE click
window.addEventListener('click', e => e.target === modal ? modal.classList.remove('show-modal') : false);
