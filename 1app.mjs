import http from "node:http";
import fs from "node:fs";

// var http = require("http");
// var fs = require("fs");
// var path = require("path");
let count = 0;
http
  .createServer(function (request, response) {
    count += 1;
    console.log("request starting...", count);
    var filePath = "." + request.url;
    var contentType = "text/html";

    fs.readFile(filePath, function (error, content) {
      response.writeHead(200, { "Content-Type": contentType });
      response.end(content, "utf-8");
    });
    console.log("." + request.url);
  })
  .listen(8000);
