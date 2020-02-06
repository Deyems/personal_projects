let form = document.forms['hero'];


//TESTING THE FIELD BEFORE SUBMITTING
// form.heroName.addEventListener('keyup',validateInline);

  const label = form.querySelector('label');
  const error = document.createElement('div');
  error.classList.add('error');
  error.textContent = '!Your Name is not allowed to start with X.';
  label.append(error);

  function validateInline(){
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
      error.style.display = 'block';
    }else{
      error.style.display = 'none';
    }
  }


    form.heroName.addEventListener('keyup',disableSubmit);

  function disableSubmit(event){
    if(event.target.value === ''){
      document.getElementById('submit').disabled = true;
    }else{
      document.getElementById('submit').disabled = false;
    }
  }




form.addEventListener('submit',makeHero);
function makeHero(e) {
  e.preventDefault();
  // alert('Yay!')
  const hero = {};


  //VALIDATE THE INPUT IN THE INPUT FIELD
  // const firstLetter = form.heroName.value[0];
  // if(firstLetter.toUpperCase() === 'X'){

    //alert('Your name is not allowed to start with X!');
    // let p = document.createElement('p','You cannot use letter X at the beginning!');
    //p.innerHTML = 'You cannot use letter X at the beginning!';
    // let labelNode = document.querySelector('label');
    // form.insertBefore(p,labelNode);

    // form.heroName.value = '';
    // hero.name = form.heroName.value;
  // }else{
    // hero.name = form.heroName.value;
  // }

  hero.realName = form.realName.value;
  hero.powers = [];
  hero.age = form.age.value;
  hero.city = form.city.options[form.city.selectedIndex].text;
  hero.story = form.story.value;
  // for(let i = 0; i < form.category.length; i++){
    // if(form.category[i].checked === false){
    //   alert('You must check one of the categories');
    // }else{
        hero.category = form.category.value;
    // }
  // }


  // for(let i=0; i<form.powers.length; i++){
  //   if(form.powers[i].checked){
  //     hero.powers.push(form.powers[i].value);
  //   }
  // }
  hero.powers = [...form.powers].filter((x)=>x.checked).map(y => y.value);

  alert(JSON.stringify(hero));
  // alert((hero));
  return hero;
};
