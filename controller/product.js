const express = require("express");
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

//create
exports.createProduct = (req, res) => {
  products.push(req.body);
  res.json(req.body);
  res.status(201, "added new phone");
};
//read
exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};
//read All

exports.getAllProducts = (req, res) => {
  res.json(products);
};
//update using put
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(200).send("Updated");
};
//update using patch
exports.editProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(200).send("Updated");
};
//delete
exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1);
  res.status(200).send("deleted");
};
