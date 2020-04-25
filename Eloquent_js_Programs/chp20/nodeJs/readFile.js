let {readFile} = require("fs");
readFile("file.txt","utf8",(err,text) => {
  if(err) throw err;
  console.log("file contains ",text);
});
