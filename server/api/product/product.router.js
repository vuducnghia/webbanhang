const express = require('express');
const router = express.Router();
const proContr = require('../../controllers/product/product.controller');

router.get('/demo', (req, res) => {
    res.send("vinh");
})

module.exports = router;