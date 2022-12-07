const fs = require('fs');
const path = require('path'); 

// const products = []; replace with actual file.

//helper function for path constructions and get all. 

const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
    );

const getProductsFromFile = (callback) => {


    fs.readFile(p, (error, data) => {
        if (error) {
            callback([]);
        }

        callback(JSON.parse(data)); 
    })
};

module.exports = class Products  {
    constructor(title) {
        this.title = title; 
    };

    //method from class allowing us to save to the products array. 
    save() {
        getProductsFromFile((products) => {

            products.push(this); //make sure you use this to keep context for the class. 
            fs.write(p, JSON.stringify(products), (error) => {
                console.log(error)
            }); 
        }); 

    };


    // //static calls on this object only
     static fetchAll(callback) { //provides a reference check
        getProductsFromFile(); 

    };
};