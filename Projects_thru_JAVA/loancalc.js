let startRate = 5;
let endRate = 8;
let rateIncrement = 1/8;

let loanAmount = () => {
    return document.querySelector('#amt').value;
}

let noOfYears = () => {
    return document.querySelector('#yrs').value;
}

const cardFooter = document.querySelector('.card-footer');


function payCheck() {
//    e.preventDefault();
        
    if(loanAmount() !== '' || noOfYears() !== ''){
    const reg = /[a-zA-Z]/;
    if(!reg.test(loanAmount()) || !reg.test(noOfYears()) ){
        loanAmount = Number(loanAmount());
        noOfYears = Number(noOfYears());
            startRate = startRate/100;
            endRate = endRate/100;
            let yrs = noOfYears * 12;         
//        let monthlyPayment = [];
//        let totalPayment = [];
//        let keepRate = [];
        
        while(startRate <= endRate){
            let monthIntRate = startRate/12;
            let base = 1 + monthIntRate;
            let factor = 1/(base**yrs);
                         
//            keepRate.push(startRate);
//              monthlyPayment.push((loanAmount * monthIntRate) / ( 1 - factor ) );
//            totalPayment.push(monthlyPayment * yrs);
            let monthlyPayment = (loanAmount * monthIntRate) / ( 1 - factor );
            let totalPayment = monthlyPayment * yrs;
//           console.log(startRate,monthlyPayment,totalPayment);
            
//            CREATE ADDITIONAL DIVS TO BE ADDED
    //            let valsDiv = document.createElement('div');
    //            let intDiv = document.createElement('div');
    //            let monDiv = document.createElement('div');
    //            let totDiv = document.createElement('div');
    //            valsDiv.setAttribute('class','d-flex');
    //            valsDiv.classList.add('justify-content-between');
    //            
    //            intDiv.textContent = startRate;
    //            monDiv.textContent = monthlyPayment;
    //            totDiv.textContent = totalPayment;
    //            
    //            valsDiv.appendChild(intDiv);
    //            valsDiv.appendChild(monDiv);
    //            valsDiv.appendChild(totDiv);
    //
    //            cardFooter.appendChild(valsDiv);
//            console.log(cardFooter);
            genDom(startRate,monthlyPayment,totalPayment);
            startRate += rateIncrement/100;
        } //end of WHILE LOOP
        
        //console.log(keepRate,monthlyPayment);        
        //else{ console.log('Cant find value again'); }
    }else{ console.log('Enter Numeric Digits Only!'); }
}else {console.log('Fields are Empty');}        
}

//CHANGING CODE TO OOP FORMAT
const parameters = {
    startRate: 5,
    endRate: 8,
    rateIncrement: 1/8
}

//CREATE ADDITIONAL DIVS TO BE ADDED
const genDom = (rate,monthlyPay,totalPay) => {
    //CREATE ADDITIONAL DIVS TO BE ADDED
    let valsDiv = document.createElement('div');
    let intDiv = document.createElement('div');
    let monDiv = document.createElement('div');
    let totDiv = document.createElement('div');
    valsDiv.setAttribute('class','d-flex');
    valsDiv.classList.add('justify-content-between');
    intDiv.textContent = rate;
    monDiv.textContent = monthlyPay;
    totDiv.textContent = totalPay;

    valsDiv.appendChild(intDiv);
    valsDiv.appendChild(monDiv);
    valsDiv.appendChild(totDiv);

    return cardFooter.appendChild(valsDiv);
}

const calcMonthlyPay = (rate,loan,yrs) => {
    if(Number(loan) && Number(yrs)){
        let monthInt = rate/12;
        monthlyPay = loan * monthInt / (1 - 1 / Math.pow(1 + monthInt, yrs * 12));
    }
    return monthlyPay;
}

const calcTotalPay = (yrs,callback) => {
    if(callback && Number(yrs)){
        return callback() * yrs *12;
    }else{ return 'You have not passed your Argument!'}    
}

//console.log(calcMonthlyPay(0.05,10000,5));
//console.log(calcTotalPay(5,calcMonthlyPay));
const formCon = document.forms.loaner;
formCon.addEventListener('submit', (e) => {
    e.preventDefault();
    payCheck();
    } );
//document.querySelector('#loan').addEventListener('submit',payCheck);




