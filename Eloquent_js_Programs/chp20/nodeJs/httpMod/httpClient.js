const {request} = require("http");

let requestStream = request({
  "hostname": "127.0.0.1",
  "path": "/Personal/Eloquent_js_Programs/chp18_httpRequest_Forms/formsInJs.html",
  "method": "GET",
  "headers": {Accept: "text/html"}
}, res => {
  console.log("The server responded with ",res.statusCode);
});
requestStream.end();
// requestStream.listen(8080);
console.log("Server listens to: port?");
