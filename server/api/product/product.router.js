const express = require('express');
const router = express.Router();
const proContr = require('../../controllers/product/product.controller');

router.get('/demo', proContr.getData);
router.get('/nghia',(req, res)=>{
    console.log(req)
     res.json('value');
})
module.exports = router;