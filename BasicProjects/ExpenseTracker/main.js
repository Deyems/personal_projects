class ExpenseTracker{
  constructor(){
    this.balance = document.querySelector('#balance');
    this.money_minus = document.querySelector('#money-minus');
    this.money_plus = document.querySelector('#money-plus');
    this.list = document.querySelector('#list');
    this.formS = document.querySelector('#form');
    this.textU = document.querySelector('#text');
    this.amount = document.querySelector('#amount');
    this.dummyTransactions = [
      {id: 1, text: 'Flower', amount: -20},
      {id: 2, text: 'Salary', amount: 300},
      {id: 3, text: 'Book', amount: -10},
      {id: 4, text: 'Camera', amount: 150}
    ]
  }

  //EVENT LISTENER EVENTS
  run(){
    this.init();
  }

  addToDom = (transactions) => {
    let sign = transactions.amount < 0 ? '-': '+';
    let item = document.createElement('li');

    item.classList.add(transactions.amount < 0 ? 'minus': 'plus');
    item.innerHTML = `${transactions.text}<span>${sign}${Math.abs(transactions.amount)}</span><button class="delete-btn">x</button>`;
    this.list.appendChild(item);
  }

  init(){
    this.list.innerHTML = ``;
    this.dummyTransactions.forEach(this.addToDom);
  }

}

let expenseTru = new ExpenseTracker();

expenseTru.run();
