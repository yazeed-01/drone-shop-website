const Products = require('../db/models/products');

module.exports = async (req, res) => {
    const { productId } = req.body;
    if (!productId) {
        console.error('No product ID provided.');
        return res.redirect('/admin');
    }

    try {
        const result = await Products.findOneAndDelete({ ProductId: productId });

        if (!result) {
            console.error(`No product found with ID: ${productId}`);
        }

        res.redirect('/admin');
    } catch (error) {
        console.error('Error deleting product:', error);
        res.redirect('/admin'); 
    }
};