const Product = require('../../model/product/product.model');

exports.getAll = (req, res) => {
    Product.findAll({ raw: true }).then(product => {
        console.log(product);
        res.json(product);
    })
}

exports.getData = (req, res) => {
    console.log(1111111111)
    res.json("quang vinh");
}