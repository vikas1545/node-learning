const morgan = require("morgan");
const express = require("express");
const server = express();
//bodyParser
server.use(express.json());
const productController = require("./controller/product");

server.get("/products", productController.getAllProducts);
server.get("/products/:id", productController.getProduct);
server.post("/products", productController.createProduct);
server.put("/products/:id", productController.updateProduct);
server.patch("/products/:id", productController.editProduct);
server.delete("/products/:id", productController.deleteProduct);

server.listen(8080, () => {
  console.log("server started");
});
