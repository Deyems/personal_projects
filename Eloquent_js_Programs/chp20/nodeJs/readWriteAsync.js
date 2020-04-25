//READING FILE ASYNCHRONOUSLY
let {readFile} = require("fs").promises;
readFile("logtest.txt","utf8")
.then(text => console.log("File Content: ",text));

let {writeFile} = require("fs").promises;
let content = `This is a simple World!
Where there is too much
satanic activity.
Selah!`
writeFile("logtest.txt",content)
.then(err => {
  if(err) console.log('The error here is: ',err);
  else console.log('success writing to file!!!');
});
// This is a simple World!
// Where there is too much
// satanic activity.
// Selah!
