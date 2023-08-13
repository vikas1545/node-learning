const http = require("http");
const express = require("express");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const morgan = require("morgan");
const server = express();

/* const server = http.createServer((req, res) => {
  if (req.url.startsWith("/product")) {
    res.setHeader("Content-Type", "text/html");
    const id = req.url.split("/")[2];
    const product = products.find((p) => p.id === +id);
    let modifiedIndex = index
      .replace("**title**", product.title)
      .replace("**url**", product.thumbnail)
      .replace("**price**", product.price);
    res.end(modifiedIndex);

    return;
  }
  console.log("server started");
});

server.listen(8080); */
