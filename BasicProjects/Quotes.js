const simpleQuotes = [
    {
        name:'author number 1',
        quote: 'quote number 1'
    },
    {
        name:'author number 2',
        quote: 'quote number 2'
    }
]

const quotes =[
    {
        name:'Stephen King',
        quote: 'Get busy living or get busy dying.'
    },
    {
        name:'John F.kennedy',
        quote: 'Those who today fail miserably can achieve greatly.'
    },
    {
        name:'Abraham Lincoln',
        quote: 'I\'m a success today because I had a friend who believed in me and I didnt have the heart to let him down '
    },
    {
        name:'Leornardo Da Vinci',
        quote: 'It had long since come to my attention that people of accomplishment rarely sit back and let things happen to them, They went out and happened to things.'
    },
    {
        name: 'Leo Tolstoy',
        quote: 'If you want to be happy, Be lively'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#author');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);
function displayQuote(){
    let randomNo = Math.floor(quotes.length*Math.random());
    quoteAuthor.innerHTML = quotes[randomNo].name;
    quote.innerHTML = quotes[randomNo].quote;
}

