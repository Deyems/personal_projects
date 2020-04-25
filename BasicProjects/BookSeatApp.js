class BookingApp{
  constructor(){
    this.container = document.querySelector('.container');
    this.moviePicker = document.querySelector('#movie');
    this.screen = document.querySelector('.screen');
    this.seats = document.querySelectorAll('.row .seat:not(.occupied)');
    this.seatCounter = document.querySelector('#count');
    this.price = document.querySelector('#total');
    this.ticketPrice = +this.moviePicker.value;

  }



  run(){
    this.container.addEventListener('click', (e) => {
      if(e.target.classList.contains('seat') &&
      !e.target.classList.contains('occupied')){
        // console.log(e.target);
        e.target.classList.toggle('selected');
        this.updateBookSeat();

      }
    });
    this.changePrice();
    this.populateUI();
  }

  //UPDATE THE SELECTED MOVIE PRICES
  changePrice(){
    this.moviePicker.addEventListener('change', e => {

      this.ticketPrice = +e.target.value;
      console.log(e.target);
      this.setMovieData(e.target.selectedIndex,e.target.value);
      this.updateBookSeat();
    });
  }

  setMovieData(movieIdx, moviePrice){
    localStorage.setItem('movieIndex',movieIdx);
    localStorage.setItem('moviePrice',moviePrice);
  }

  updateBookSeat(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // ticketPrice = +this.moviePicker.value;
    const seatIdx = [...selectedSeats].map((item) => [...this.seats].indexOf(item));
    localStorage.setItem('selectedSeats',JSON.stringify(seatIdx));
    // console.log(seatIdx);
    const selectedSeatCount = selectedSeats.length;
    this.seatCounter.innerText = selectedSeatCount;
    this.price.innerText = selectedSeatCount * this.ticketPrice;
  }

  populateUI(){
    // console.log(localStorage.getItem('selectedSeats'));

    const selection = JSON.parse(localStorage.getItem('selectedSeats'));

    // console.log(selection);
    if(selection !== null && selection.length>0){
      this.seats.forEach((eachSeat,idx) => {
        if(selection.indexOf(idx)> -1){
        eachSeat.classList.add('selected');
        }
      });
    }

    console.log(localStorage.getItem('movieIndex'));

    let movieSelection = localStorage.getItem('movieIndex');
    if(movieSelection !== null){
      this.moviePicker.selectedIndex = movieSelection;
    }
    this.updateBookSeat();

  }

// ###############
// NAIVE WAY I IMPLEMENTED
//############
    // console.log('Are you working?');
    // let total = 0;
    // Array.from(this.seats).forEach((seat) => {
    //     seat.addEventListener('click',() => {
    //       let counter = parseInt(this.seatCounter.textContent);
    //       `${counter++}`;
    //       this.seatCounter.textContent = counter;
    //       let moviePrice = parseInt(this.moviePicker.value);
    //       total += moviePrice;
    //       this.price.textContent = total;
    //       console.log('A box has been selected');
    //     });
    // });
}

let takeOrders = new BookingApp();
takeOrders.run();
