const products = [];

module.exports = class Products  {
    constructor(title) {
        this.title = title; 
    };

    //method from class allowing us to save to the products array. 
    save() {
        products.push(this); 
    };

    //static calls on this object only
    static fetchAll() {
        return products; 
    };
};