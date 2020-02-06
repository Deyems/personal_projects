const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','green','#4f89e8','chocolate'];

colorBtn.addEventListener('click',changeColor);

function changeColor(){
    let randomNo = Math.floor(Math.random()*colors.length);
        bodyBcg.style.backgroundColor = colors[randomNo];
}
