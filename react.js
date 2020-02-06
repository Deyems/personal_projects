
let listCart = document.querySelectorAll(".box");
let delCart = document.querySelector("#clear");

let orderTitle = [];
let orderPrice = [];
let counter = 0;
for(selected of listCart){
selected.addEventListener("click",function(){
    let title = this.dataset.title;
    let price = this.dataset.num;
    //alert("You chose "+title +"and Price is "+price);
    orderTitle.push(title);
    orderPrice.push(price);
    counter +=1;
    updateCart();
    for (i=0; i<orderPrice.length; i++){
        total += orderPrice[i];
    }
    console.log(total);
    document.querySelector(".dropdown").style.display = 'block';

})
}

function updateCart(){
    let OutputTitle = "";
    let OutputPrice = "";
    let total = 0;
    for(Particular of orderTitle){
        OutputTitle += Particular;
    }
    for(Particular of orderPrice){
        OutputPrice += Particular;
        //total += OutputPrice;
    }
    //console.log(OutputTitle + " " + OutputPrice + "<br>")
    //console.log("<br>"+total);
    let t = document.querySelector(".dropdown li div section .title")
    let p = document.querySelector(".dropdown li div section .price");
    
    t.innerHTML = OutputTitle + " "+ OutputPrice+"<br>";
    //p.innerHTML = OutputPrice + "<br>";
}

/*
let gallery = document.querySelectorAll('.box');
gallery[0].addEventListener("hover",function(){
    document.getElementsByClassName("cartIcon")[0].style.display = 'block';
    document.documentElement.addEventListener("load",funciton(){

    })
});
*/