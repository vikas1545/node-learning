const fs = require("fs");
const index = fs.readFileSync("index.html", "utf8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const model = require('../model/product');
//const products = data.products;
const Product = model.Product;

//create
exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  product.save()
    .then(() => {
      console.log('saved : ');
      res.status(201).send("Added new phone");
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
}

//read
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    res.status(400).json({ error });
  }
  //const product = products.find((p) => p.id === id);

};
//read All
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Use the `find` function on the model
    res.json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
//update using put
exports.replaceProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOneAndReplace({ _id: id }, req.body, { new: true });
    res.json(product);
  } catch (error) {
    res.status(400).send(error)
  }

};
//update using patch
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).send(error)
  }
};

//delete
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).send(error)
  }
};
