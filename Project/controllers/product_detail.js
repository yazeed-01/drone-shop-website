products = require('../db/models/products');

module.exports = async (req, res) => {
    try {
      const product = await products.findById(req.params.id).populate('ProductId');
      if (!product) {
        return res.status(404).send('product  not found');
      }
      res.render('product_detail', { product });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching product');
    }
  };