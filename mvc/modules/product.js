const fs = require('fs');
const path = require('path'); 

// const products = []; replace with actual file.

module.exports = class Products  {
    constructor(title) {
        this.title = title; 
    };

    //method from class allowing us to save to the products array. 
    save() {
        // products.push(this); create content that is saved. 
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
            );

        fs.readFile(p, (error, data) => {
            let products = [];
            if (data) {
                products = JSON.parse(data);
            };

            products.push(this); //make sure you use this to keep context for the class. 
            fs.write(p, JSON.stringify(products), (error) => {
                console.log(error)
            }); 
        }); 

    };

    //static calls on this object only
    static fetchAll() {

        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
            );

        fs.readFile(p, (error,data) => {
            if (error) {
                return [];
            }

            return JSON.parse(data); 
        })
    };
};