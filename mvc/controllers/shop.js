exports.getShop = (req, res, next) => {
    res.render('shop', {
        prods: adminData.products, 
        pageTitle: 'Shop', 
        path:"/shop", 
        hasProducts: adminData.products.length > 0, 
        activeShop: true,
        productsCSS: true,
    }); 
}
