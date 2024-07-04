// backend/controllers/cartController.js

const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
  const userId = req.user.id; // Assuming userId is extracted from JWT

  try {
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addItemToCart = async (req, res) => {
  const userId = req.user.id; // Assuming userId is extracted from JWT
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        items: [{ product: productId, quantity }],
      });

      await cart.save();
    } else {
      // Check if item already exists in cart
      const itemIndex = cart.items.findIndex(item => item.product == productId);

      if (itemIndex > -1) {
        // If item exists, update quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // If item does not exist, add new item
        cart.items.push({ product: productId, quantity });
      }

      await cart.save();
    }

    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.removeItemFromCart = async (req, res) => {
  const userId = req.user.id; // Assuming userId is extracted from JWT
  const cartItemId = req.params.id;

  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ msg: 'Cart not found' });
    }

    // Remove item from cart items array
    cart.items = cart.items.filter(item => item.id !== cartItemId);

    await cart.save();
    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
   
