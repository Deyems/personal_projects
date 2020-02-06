'use strict';
//let el = document.createElement('div');
//let elchild = document.createElement('p');
//elchild.textContent = 'Louder';
//el.appendChild(elchild);

//HOW TO USE FETCH API WITH RESPONSE
//let url = 'https:example.com/data';
//fetch(url)
//    .then((response) => {
//        if(response.ok) {
//            return response;
//        }
////        throw Error(response.statusText);
//    })
//    .then((response) => {
//        Json.parse(response)
//    })
//    .catch((error) => {
//        console.log('There was an Error');
//    });


//HOW TO HANDLE REDIRECT
//fetch(url)
//.then( response => response.redirect(newUrl))
//.then()
//.catch( error => console.log('There was an Error', error));
//
//
////HOW A TEXT RESPONSE IS RESOLVED
//fetch(url)
//.then((response)=> response.text())
//.then((text)=> text)
//.catch(error => console.log('There was an Error: ', error));
//
//
//fetch(url)
//.then( response => response.blob() );
//.then( blob => console.log(blob.type))
//.catch(error => console.log('There was an Error:',error));
//

//HANDLING JSON FROM OTHER SITES
//fetch(url)
//.then( response => response.json())
//.then( data => console.log(Object.entries(data)))
//.catch( error => console.log('There was an Error: ', error));


//CREATING RESPONSE OBJECT
//const response = new Response('Hello!',{
//    ok: true,
//    status: 200,
//    statusText: 'OK',
//    type: 'cors',
//    url: '/api'
//});

//const request = new Request('http://abc.com',{
//    method: 'GET',
//    mode: 'cors',
//    redirect: 'follow',
//    cache: 'no-cache'
//});

//console.log(headers.has('Content-Type'));
//console.log(headers.get('Accept-Charset'));
//
//headers.set('Content-Code','app/json');
//console.log(headers.has('content-code'));

//for(const key of headers.entries()){
//    console.log(key);
////    console.log(``);
//}

//const fetchBill = () => {
//        const apiHost = 'https://randomapi.com/api';
//		const apiKey = '006b08a801d82d0c9824dcfdfdfa3b3c';
//        const apiEndpoint = `${apiHost}/${apiKey}`;
//    return apiEndpoint;
//      };
//
//console.log(fetchBill());

//const url = 'https:example.com/data';
//const headers = new Headers(
//    {'Content-Type': 'text/plain',
//    'Accept-Charset': 'utf-8',
//    'Accept-Encoding': 'gzip,deflate'
//    });
//
//const request = (url, {
//    headers: headers
//});

//fetch(fetchBill)
//.then( function(response) {
//    if(response.ok){
//        return response;
//    }
//    throw Error(response.statusText);
//})
//.then( response => console.log(response))
//.catch((error) => {'Error occured somewhere', error});

const textButton = document.getElementById('number'); 
const apiButton = document.getElementById('chuck'); 
const outputDiv = document.getElementById('output');

const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

apiButton.addEventListener('click', () => {
fetch(apiURL)
.then((response) => {
    outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
.then((response) => response.json())
.then( data => outputDiv.innerText = data.value)
.catch(error => console.log('There was an error:',error))
},false);

//textButton.addEventListener('click', () => {
//fetch(textURL) 
//.then( response => { 
//outputDiv.innerHTML = 'Waiting for response...';
//if(response.ok){ 
//    return response;
//}
//throw Error(response.statusText); })
//.then( response => response.text() ) 
//.then( text => outputDiv.innerText = text ) 
//.catch( error => console.log('There was an error:', error)) },false);


const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);

//function addTask(e) {
//    e.preventDefault();
//    const number = form.task.value;
//    //An Object
//    const task = {
//        userId: 1,
//        title: form.task.value,
//        completed: false
//    }
//    
//    const data = JSON.stringify(task);
//    const url = 'https://jsonplaceholder.typicode.com/todos';
//    
//    const headers = new Headers({
//        'Accept': 'application/json',
//        'Content-Type': 'application/json'
//    });
//    
//    const request = new Request(url,{
//        method: 'POST',
//        header: headers,
//        body: data
//    });
//    
//    fetch(request)
//    .then( response => response.json())
//    .then( task => console.log(`Task saved with an id of ${task.id}`) )
//    .catch( error => console.log('There was an error',error))
//    
//}

//USING FORMDATA INTERFACE

function addTask(e) {
    e.preventDefault();
    const task = new FormData(form);
    const url = `http://echo.jsontest.com/id/1/title/${form.task.value}`;
    const headers = new Headers({
        'Accept': 'application/json',
        'Content=-Type': 'application/json'
    });
    const request = new Request(url,{
        method: 'post',
        header: headers,
        body: JSON.stringify(task)
    });
    fetch(request)
    .then(response => response.json())
    .then(data => console.log(`${data.title} saved with an id of ${data.id}`))
    .catch( error=> console.log('There was an error:',error));
    
}
