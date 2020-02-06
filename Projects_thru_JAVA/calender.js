
const formCal = document.forms.calenderForm;
const calHouse = document.querySelector('.cal-house');

const daysInMonth = (year,month) => {
    return 32 - (new Date(year,month,32)).getDate();
}

//console.log(daysInMonth(2013,6));
//console.log((new Date(2013,5,32)).getDate() );

const showCal = (year, month) => {
    let generatedDate = new Date(year,month);
    let inputMonth = generatedDate.getMonth();
    //To determine Exact day starting the Month
    let startMonth = generatedDate.toString().split(" ")[0];
        
    for(let i = inputMonth; i < months.length; i++){
        let headerEl = document.createElement('div');
        //Assign the Value of Month and Pick its Corresponding
        let inputMonthText = months[i];
        
        headerEl.classList.add('card-header');
        headerEl.classList.add('text-center');
        headerEl.textContent = inputMonthText+ " " + year;
        
        calHouse.appendChild(headerEl);
        calHouse.appendChild(createNodes());
//        console.log(createNodes());
//        let starterDay = (new Date(year,inputMonth)).getDay();
        let starterDay = 1;
        console.log(starterDay,'Start of each month');
        for(let row=0; row<= 6; row++){
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('d-flex');
            rowDiv.classList.add('justify-content-around');
            
            for(col = 0; col < days.length; col++){
                
                if(row === 0 && col < starterDay){
                    let cell = document.createElement('div');
                    cell.classList.add('bg-info');
                    cell.textContent = "";
                    rowDiv.appendChild(cell);
                }else if(starterDay > daysInMonth(year,inputMonth)){
                    break;
                }else{
                    let cell = document.createElement('div');
                    
                    cell.classList.add('p-2');
                    cell.textContent = starterDay;
                    rowDiv.appendChild(cell);
                    starterDay++;
                }
//                starterDay++;
            }
            //OUTSIDE THE COLUMN LOOP
            calHouse.appendChild(rowDiv);
//            starterDay++;
        }
        inputMonth++;
    }
    
    
//End of Function --NB    
}

//Text Content FIXED
    const createNodes = () => {
    let sunNode = document.createElement('div');
    let monNode = document.createElement('div');
    let tueNode = document.createElement('div');
    let wedNode = document.createElement('div');
    let thuNode = document.createElement('div');
    let friNode = document.createElement('div');
    let satNode = document.createElement('div');
    
    sunNode.textContent = 'Sun';
    monNode.textContent = 'Mon';
    tueNode.textContent = 'Tue';
    wedNode.textContent = 'Wed';
    thuNode.textContent = 'Thur';
    friNode.textContent = 'Fri';
    satNode.textContent = 'Sat';
    
    let calHouseNode = document.createElement('div');
        calHouseNode.classList.add('d-flex');
        calHouseNode.classList.add('justify-content-around');
        calHouseNode.classList.add('bg-primary');
        calHouseNode.classList.add('text-light');
        
    calHouseNode.appendChild(sunNode);
    calHouseNode.appendChild(monNode);
    calHouseNode.appendChild(tueNode);
    calHouseNode.appendChild(wedNode);
    calHouseNode.appendChild(thuNode);
    calHouseNode.appendChild(friNode);
    calHouseNode.appendChild(satNode);
    return calHouseNode;   
}

//Text Content to BE added Later
const createCardHeader = () => {
    let cardFoot = document.createElement('div');
    cardFoot.classList.add('card-header');
    cardFoot.classList.add('text-center');
}

formCal.addEventListener('submit',(e) => {
    e.preventDefault();
    showCal(getYearVal(),getMonthVal());
});

const getYearVal = () => {
    return document.querySelector('#year').value;
}

const getMonthVal = () => {
    return document.querySelector('#month').value;
}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thur',
    'Fri',
    'Sat'
];

//const currentDate = new Date();
//currentDate.getFullYear();
//currentDate.getMonth();
//
//const dateSet = new Date(2013,'7');
////NB: DayofWeek = (new Date).getDay();
////console.log(dateSet.getDay());
////console.log(dateSet.toString().split(" ")[0]);
//
//let month = dateSet.getMonth();
//let year = dateSet.getFullYear();
//    while (month < 12 ){
//    console.log(month);
//    textMonth = months[month];
//    console.log(textMonth);
//    month++;
//    }
//console.log(year);
//
//console.log(dateSet);
//
//console.log(dateSet.getMonth());
//console.log(dateSet.getMonth().toString());







/*EXTRACT SOLUTION FROM INTERNET*/
//let today = new Date();
//let currentMonth = today.getMonth();
//let currentYear = today.getFullYear();
//
////PUT INPUT YEAR HERE
//const inputYear = document.querySelector('#year');
//const inputMonth = document.querySelector('#month');
//
////GET MONTH&YEAR HERE
//let monthAndYear = document.querySelector('.card-footer');
//
////MAKE AN ARRAY OF MONTHS HERE
//months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//
//function next() {
//    currentYear = (currentMonth === 11)? currentYear + 1 : currentYear;
//    currentMonth = (currentMonth + 1) % 12;
//    showCalendar(currentMonth, currentYear);
//}
//
//function previous() {
//    currentYear = (currentMonth === 0) ? currentYear - 1: currentYear;
//    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
//    showCalendar(currentMonth, currentYear);
//}
//
//function jump() {
//    currentYear = parseInt(selectYear.value);
//    currentMonth = parseInt(selectMonth.value);
//    showCalendar(currentMonth, currentYear);
//}
//
//function showCalendar(month,year) {
//    let firstDay = (new Date(year,month)).getDay();
//    let tbl = document.querySelector('#conDate');
//    tbl.innerHTML = "";
//    tbl.classList.add('d-flex');
//    tbl.classList.add('justify-content-around');
//    
//    monthAndYear.innerHTML = months[month] + " " + year;
//    inputYear.value = year;
//    inputMonth.value = month;
//    
//    let date = 1;
//    for(let i = 0; i < 6; i++){
//        let row = document.createElement("div");
////        row.classList.add('d-flex');
////        row.classList.add('justify-content-around');
//        
//        for(let j = 0; j < 7; j++) {
//            if(i === 0 && j < firstDay) {
//                cell = document.createElement("div");
////                cell.style.background = 'red';
//                cellText = document.createTextNode("");
//                cell.appendChild(cellText);
//                row.appendChild(cell);
//            }else if(date > daysInMonth(month, year)) {
//                break;
//            }else {
//                cell = document.createElement("div");
//                cell.style.background = 'red';
//                cellText = document.createTextNode(date);
//                if(date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ){
//                    cell.classList.add("bg-info");
//                    cell.classList.add('p-3');
//                }
//                cell.appendChild(cellText);
//                row.appendChild(cell);
//                date++;
//            }
//        }
//        tbl.appendChild(row);
//    }
//    
//    function daysInMonth(iMonth, iYear){
//        return 32 - new Date(iYear, iMonth, 32).getDate();
//    }
//}
//showCalendar(currentMonth,currentYear);






