
const express = require('express');
const router = express.Router();
const ProductsManager = require('../utils/productsManager');

const productsManager = new ProductsManager();

router.get('/', (req, res) => {
    try {
        const products = productsManager.getProducts();
        res.render('home', { products });
    } catch (error) {
        res.status(500).send('Error al obtener productos');
    }
});

router.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts');
});

module.exports = router;
