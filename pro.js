const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const products = require("./assign.json");

app.use(cors());

app.use(express.static(__dirname + '/front'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'index.html'));
});


app.get("/all-products", (req, res) => {
  return res.send({
    products: products,
  });
});

app.get("/single-product/:id",(req,res)=>{
  const productId= req.params.id;
  console.log(productId);
  const result = products.find((product)=> product.id === parseInt(productId));
  res.send(result);

})
app.get("/single-product-by-title/:name",(req,res)=>{
  const productName = req.params.name;
  const result = products.find((product)=> product.title === productName);
  res.send(result)

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})