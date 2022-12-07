//exports out the functionality allowing the router to still have access to all the data provided from this call. 

exports.getAddProduct = (req, res, next) => {
    res.render('shop', {
        prods: adminData.products, 
        pageTitle: 'Shop', 
        path:"/shop", 
        hasProducts: adminData.products.length > 0, 
        activeShop: true,
        productsCSS: true,
    }); 
}