const products = [];

module.exports = class Products  {
    constructor(title) {
        this.title = title; 
    };

    save() {
        products.push(this); 
    };

    //static calls on this object only
    static fetchAll() {
        return this.products; 
    };
};