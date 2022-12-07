//exports out the functionality allowing the router to still have access to all the data provided from this call.

// let products = [] // this would be the array to add content to. 
//replaceing the products array with a module 

const Product = require('../modules/product'); //use capital for classes

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
    const products = new Product(req.body.title)
    products.save(); // call the method from product
    res.redirect('/');
};


exports.getShop = (req, res, next) => {
    // let products = Product.fetchAll(); // get all products

    //provide callback here for fetching data. 

    Product.fetchAll((products) => {
        //waits for information before trying to render here. 
        res.render('shop', {
            prods: products, 
            pageTitle: 'Shop', 
            path:"/shop", 
            hasProducts: products.length > 0, 
            activeShop: true,
            productsCSS: true,
        }); 

    })
};
