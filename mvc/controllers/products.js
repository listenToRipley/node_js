//exports out the functionality allowing the router to still have access to all the data provided from this call.

let products = []

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
    pageTitle: 'Add Product', 
    path:'/admins/add-product',
    activeAddProducts: true,
    productsCSS: true,
    formsCSS: true,
    });
};

exports.postAddProducts = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
};
