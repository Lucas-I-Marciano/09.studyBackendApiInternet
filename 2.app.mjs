import http from "node:http";
import { stock } from "./2.stock.mjs";

const server = http.createServer();

server.addListener("request", (request, response) => {
  const myUrl = request.url;
  if (myUrl === "/") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(stock));
    response.end();
  } else if (myUrl === "/getUnavailableProducts") {
    response.writeHead(200, { "Content-Type": "application/json" });
    // response.write(
    //   JSON.stringify(stock.filter((item) => item.amountLeft === 0))
    // );
    response.end(JSON.stringify(stock.filter((item) => item.amountLeft === 0)));
  }
  console.log(myUrl);
});
server.listen(8000);
