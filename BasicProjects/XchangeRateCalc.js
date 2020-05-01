//THIS APP HAS FIVE FEATURES
// CURRENCY SELECTED
//CURRENCY CONVERTED TO
// AMT CORRESPONDING TO CURRENCY SELECTED
//AMT CORRESPONDING TO CURRENCY CONVERTED;
//RATE (WHICH WOULD SHOW THE CONVERSION RATE)
// THE SWAP BTN TO HELP SWAP STUFFS;

class RateExchange {
  constructor() {
    this.currencySelected = document.querySelector('#currency-one');
    this.amtChosen = document.querySelector('#amount-one');

    this.swapBtn = document.querySelector('#swap');
    this.rate = document.querySelector('#rate');

    this.currencyCoverted = document.querySelector('#currency-two');
    this.amtEquiv = document.querySelector('#amount-two');
  }

  //DIFFERENT METHODS/FUNCTIONS/VARIABLES TO
  //AID THE EVENT LISTENERS ARE BELOW HERE
  calculate = () => {
    // console.log('running...');
    let firstCurrency = this.currencySelected.value;
    let secondCurrency = this.currencyCoverted.value;
    let rateConverter;
    fetch(`https://prime.exchangerate-api.com/v5/f2504056d42f8b346a92e5d7/latest/${firstCurrency}`)
    .then(res => res.json())
    .then(data => {
      rateConverter = data.conversion_rates[secondCurrency];
      this.rate.innerText = `One ${firstCurrency} = ${rateConverter} ${secondCurrency} `;
      this.amtEquiv.value = (this.amtChosen.value * rateConverter).toFixed(2);
    });

    // console.log(firstCurrency,rateConverter,secondCurrency);
  }

  swapper = () => {
    let temp = this.currencySelected.value;
    this.currencySelected.value = this.currencyCoverted;
    this.currencyCoverted.value = temp;
    this.calculate;
  }

  //EVENT LISTENERS FOR THE APP
  run(){
    this.currencySelected.addEventListener('change',this.calculate);
    this.amtChosen.addEventListener('input',this.calculate);

    this.currencyCoverted.addEventListener('change',this.calculate);
    this.amtEquiv.addEventListener('input',this.calculate);

    this.swapBtn.addEventListener('click',this.swapper);
  }

}

let rateExchangeApp = new RateExchange();
rateExchangeApp.run();
