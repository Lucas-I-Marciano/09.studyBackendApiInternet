import http from "node:http";
import { stock } from "./2.stock.mjs";
import { URL } from "node:url";
import jsonBody from "body/json.js";

const server = http.createServer();
let productStock = [...stock];

server.addListener("request", (request, response) => {
  const urlObject = new URL(`http://${request.headers.host}${request.url}`);
  if (urlObject.pathname === "/") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(productStock));
    response.end();
  }
  if (
    urlObject.pathname === "/get-unavailable-products" &&
    request.method === "GET"
  ) {
    response.writeHead(200, { "Content-Type": "application/json" });
    // response.write(
    //   JSON.stringify(productStock.filter((item) => item.amountLeft === 0))
    // );
    response.end(
      JSON.stringify(
        productStock.filter((item) => {
          return item.amountLeft === 0;
        })
      )
    );
  }
  if (
    request.method === "POST" &&
    urlObject.pathname === "/get-unavailable-products"
  ) {
    response.writeHead(405, { "Content-Type": "text/plain" });
    response.write("POST method not allowed!!!");
    response.end();
    return;
  }
  // id=X
  if (urlObject.pathname === "/get-by-id") {
    const idParam = urlObject.searchParams.get("id");

    if (!idParam || isNaN(idParam)) {
      //If I didn't receive id as a parametrer on URL, idParam will be "null"
      response.writeHead(400, { "Content-Type": "text/plain" });
      response.write("ID not available");
      response.end();
      return;
    }
    const selectedObject = productStock.find((product) => {
      return product.id === Number(idParam);
    });
    if (!selectedObject) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("ID not founded");
      response.end();
      return;
    }
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(selectedObject));
    response.end();
    return;
  }

  if (urlObject.pathname === "/delete-by-id") {
    const idParam = urlObject.searchParams.get("id");

    if (!idParam || isNaN(idParam)) {
      response.writeHead(400, { "Content-Type": "text/plain" });
      response.write("ID not available");
      response.end();
      return;
    }
    const selectedObject = productStock.find((product) => {
      return product.id === Number(idParam);
    });
    productStock = productStock.filter((product) => {
      return product.id !== Number(idParam);
    });

    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(selectedObject ?? {}));
    response.end();
    return;
  }

  if (urlObject.pathname === "/create" && request.method === "POST") {
    jsonBody(request, response, (erro, body) => {
      if (erro) {
        response.writeHead(400, { "Content-Type": "text/plain" });
        response.write("Erro ao processar a requisição. ");
        response.write(erro.message);
        response.end();
        return;
      }
      const { productName, amountLeft } = body;
      const newProduct = {
        id: productStock.length,
        productName: productName,
        amountLeft,
      };
      productStock.push(newProduct);
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(newProduct));
    });
  }
});
server.listen(8000);
