const Products = require('../db/models/products');

module.exports = async (req, res) => {
    const { ProductId, Name, Description, Price, Category, Manufacturer, Availability, howMushInStock } = req.body;

    if (isNaN(ProductId)) {
        return res.status(400).send('Invalid clientIds ss');
    }

    const numericProductId = Number(ProductId);

    console.log('ProductId being queried:', numericProductId);

    try {
        const result = await Products.findOneAndUpdate(
            { ProductId: numericProductId }, 
            { $set: { Name, Description, Price, Category, Manufacturer, Availability, howMushInStock } },
            { new: true }
        );

        if (result) {
            res.redirect('/admin');
        } else {
            res.status(404).send('product not found');
        }
    } catch (error) {
        console.error('Error updating product:', error.message); 
        res.status(500).send(`Error updating product: ${error.message}`);
    }
};