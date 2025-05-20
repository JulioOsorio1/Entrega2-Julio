

class productsManager {
    constructor() {
        this.products = [];
        this.currentId = 1;
    }

    getProducts() {
        return this.products;
    };

    addProduct(product) {
        product.id = this.currentId++;
        this.products.push(product);
    };

    deleteProduct(id) {
        this.products = this.products.filter(p => p.id != id);
    };
}

module.exports = productsManager;

