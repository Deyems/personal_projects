const {readFile} = require("fs");
readFile("file.txt", (err, buffer) => {
  if(err) throw err;
  console.log("Our file contains ", buffer.length);
  console.log("The first byte is: ", buffer[0]);
});
