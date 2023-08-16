require('dotenv').config()
const morgan = require("morgan");
const express = require("express");
const mongoose = require('mongoose');
const server = express();
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');


//db connection
main().catch(err => console.log('error in db connection : ', err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database conectted..')
}

//bodyParser
server.use(express.json());
//server.use(morgan('default'));
//server.use(express.static('public'));
server.use('/products', productRouter.routes);
server.use('/users', userRouter.routes);


server.listen(8080, () => {
  console.log("server started");
});    
