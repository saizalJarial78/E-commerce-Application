// backend/routes/cartRoutes.js

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware.authenticateUser, cartController.getCart);
router.post('/', authMiddleware.authenticateUser, cartController.addItemToCart);
router.delete('/:id', authMiddleware.authenticateUser, cartController.removeItemFromCart);

module.exports = router;
