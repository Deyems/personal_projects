class Validation{
  constructor(){
    this.form = document.getElementById('form');
    this.username = document.getElementById('username');
    this.email = document.getElementById('email');
    this.password = document.getElementById('password');
    this.password2 = document.getElementById('password2');
    // this.errMsgArea = document.querySelectorAll('small');
  }

//LISTEN FOR EVENTS
  run(){
    this.form.addEventListener('submit', (e) => {
      // console.log('Using Class for my JS');
      // console.log(this.username.value);
      this.checkRequired([this.username,this.email,this.password,this.password2]);
      this.checkFieldLength(this.username,3,15);

      this.checkFieldLength(this.password,6,25);
      this.checkFieldLength(this.password2,6,25);

      this.passwordMatch(this.password,this.password2);
      console.log(this.email);
      this.isEmailValid(this.email);
      //try to Make a fxn to CHECK FOR AT LEAST A character and A number
      

      // this.isEmailValid(this.email);
      e.preventDefault();
    });
  }

// INITIAL CHECKCASE FOR NON-FILLED FIELDS
  checkRequired(fields){
    // let changeFirstLetter = this.changeFirstLetter;
    fields.forEach((field) => {
      if(field.value === ''){
        this.showError(field,`${this.changeFirstLetter(field.id)} is required`);
      }else{
        this.showSuccess(field);
      }
    });
  }

//CONFIRM THE LENGTH OF FIELDS
  checkFieldLength(field,min,max){
    if(field.value.length < min){
      this.showError(field,`${this.changeFirstLetter(field.id)} must be at least ${min} characters`);
    }else if(field.value.length > max){
      this.showError(field,`${this.changeFirstLetter(field.id)} must be less than ${max} characters`);
    }else{
      this.showSuccess(field);
      return true;
    }
    return false;
  }

//TURN FIRST LETTER OF INNERTEXT TO UPPERCASE
  changeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  isEmailValid(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // console.log(String(email.value).toLowerCase());
    if(re.test(String(email.value).toLowerCase().trim())) this.showSuccess(email);
    else this.showError(email,`${this.changeFirstLetter(email.id)} is not Valid`);
    // return re.test(String(email).toLowerCase());
  }

  passwordMatch(pwd1,pwd2){
    if(pwd1.value !== pwd2.value){
      this.showError(pwd2, 'Passwords do not match');
      this.showError(pwd1, 'Passwords do not match');
    }
  }

  showSuccess(node){
    node.parentElement.className = 'form-control success';
    let errMsgArea = node.parentElement.children[2];
    errMsgArea.style.visibility = 'hidden';
    // errMsgArea.textContent = ``;
  }

  showError(node,message){
    node.parentElement.classList.add("error");
    let errMsgArea = node.parentElement.children[2];
      errMsgArea.style.visibility = 'visible';
      errMsgArea.textContent = message;
  }


}

let form = new Validation();
form.run();
