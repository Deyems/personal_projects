let {createServer} = require("http");

createServer((req,res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(`<h1>Hello!</h1>
    <p>You requested for <b>${req.url}</b></p>`);
  res.end();
}).listen(8030);
console.log("Listening to (port 8030)");
