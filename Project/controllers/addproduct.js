const Products = require('../db/models/products');
const path = require('path');




async function generateUniqueProductID() {
    const count = await Products.countDocuments();
    const newProductID = count + 1;
    return newProductID;
}

module.exports = async (req, res) => {
    let image = req.files.image;
    try {
        const uniqueProductID = await generateUniqueProductID();
        image.mv(path.resolve(__dirname,'..','public/img',image.name), async (err) => {
            await Products.create({
                ...req.body,
                ProductId: uniqueProductID,
                image: '/img/' + image.name
            })
        });
        res.redirect('/admin');
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).send('Internal Server Error');
    }
};