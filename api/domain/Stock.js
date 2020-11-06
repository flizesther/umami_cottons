module.exports =  class Stock {

    constructor({ product = '', stock = '' }) {
        this.product = product;
        this.stock = stock;
    }

    toJSON() {
        let { product, stock } = this;
        return { product, stock };
    }
}