addEventListener("message", event => { 
    postMessage(event.data * event.data); 
});

//console.log('Bobo is good');
//self.postMessage('Finished at last!!!');