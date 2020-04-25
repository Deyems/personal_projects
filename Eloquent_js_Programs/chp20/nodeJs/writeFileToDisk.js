const {writeFile} = require("fs");
writeFile("graffiti.txt", "Node was here",(err) => {
  if(err) console.log(`Failed to write file: ${err}`);
  else console.log("File written");
});

// let {writeFile} = require("fs");
let content = `This is a simple World!
Where there is too much
satanic activity.
Selah!`;
writeFile("logtest.txt", `${content}`, error => {
  if(error) console.log('An error in writing to file');
  else console.log('Text added to file successfully');
});
