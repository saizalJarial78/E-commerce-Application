// backend/routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', authMiddleware.authenticateAdmin, productController.addProduct);
router.put('/:id', authMiddleware.authenticateAdmin, productController.updateProduct);
router.delete('/:id', authMiddleware.authenticateAdmin, productController.deleteProduct);

module.exports = router;
