const Product = require('../../model/product/product.model');

exports.getAll = (req, res) => {
    Product.findAll({ raw: true }).then(product => {
        console.log(product);
        res.json(product);
    })
}

exports.getData = (req, res) => {
    res.json("quang vinh");
}